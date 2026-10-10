"use client";

import { useEffect, useRef, useState } from "react";

export function RppgWaveformVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [heartRate, setHeartRate] = useState(74);
  const [rmssd, setRmssd] = useState(42.3);
  const [fps, setFps] = useState(30.0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;
    const points: number[] = [];
    const maxPoints = 200;

    // Pulse generator parameters (systolic peak + dicrotic notch)
    const generatePulse = (time: number) => {
      const period = 50; // pulse period
      const phase = (time % period) / period;
      
      // Photoplethysmography waveform approximation
      const systolic = Math.exp(-Math.pow((phase - 0.2) / 0.08, 2)) * 36;
      const dicrotic = Math.exp(-Math.pow((phase - 0.45) / 0.1, 2)) * 14;
      const noise = (Math.sin(time * 0.4) + Math.cos(time * 0.7)) * 1.5;
      
      return systolic + dicrotic + noise;
    };

    const render = () => {
      if (!isPaused) {
        t++;
        const val = generatePulse(t);
        points.push(val);
        if (points.length > maxPoints) {
          points.shift();
        }

        // Slight live variation in metrics every ~45 frames
        if (t % 45 === 0) {
          setHeartRate(73 + Math.floor(Math.sin(t * 0.05) * 2));
          setRmssd(Number((41.5 + Math.cos(t * 0.08) * 1.8).toFixed(1)));
          setFps(Number((29.8 + Math.random() * 0.4).toFixed(1)));
        }
      }

      const width = canvas.width;
      const height = canvas.height;
      const baselineY = height / 2 + 10;

      ctx.clearRect(0, 0, width, height);

      // Grid background lines
      ctx.strokeStyle = "#161E2E";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);

      // Horizontal grid lines
      for (let y = 20; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      ctx.setLineDash([]);

      // Draw Waveform Line
      if (points.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = "#FF7E00";
        ctx.lineWidth = 2;
        ctx.shadowColor = "#FF7E00";
        ctx.shadowBlur = 6;

        const stepX = width / maxPoints;

        points.forEach((p, i) => {
          const x = i * stepX;
          const y = baselineY - p;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });

        ctx.stroke();
        ctx.shadowBlur = 0; // reset shadow

        // Draw pulse scanhead marker at right edge
        const lastX = (points.length - 1) * stepX;
        const lastY = baselineY - points[points.length - 1];
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <div className="border border-gray-800 bg-[#050505] p-4 md:p-6 font-mono text-white relative">
      <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-850 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-[#FF7E00] animate-pulse" />
          <span className="text-xs text-[#FF7E00] font-bold">
            OPTICAL_TELEMETRY // rPPG_PULSE_SIGNAL
          </span>
          <span className="text-[10px] text-gray-500 border border-gray-800 px-1.5 py-0.5">
            ALGORITHM: POS + CHROM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-[10px] text-gray-400 hover:text-[#FF7E00] border border-gray-800 px-2 py-0.5"
          >
            {isPaused ? "[RESUME_STREAM]" : "[PAUSE_SAMPLER]"}
          </button>
          <span className="text-[10px] text-[#FF7E00] border border-[#FF7E00]/40 px-1.5 py-0.5 bg-[#171300]">
            NEXT_STAGE: CDSCO
          </span>
        </div>
      </div>

      {/* Live Vitals Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <div className="border border-gray-850 bg-[#070707] p-2.5">
          <div className="text-[10px] text-gray-500 uppercase">HEART_RATE (BVP)</div>
          <div className="text-2xl font-bold text-[#FF7E00] tabular-nums mt-0.5">
            {heartRate} <span className="text-xs font-normal text-gray-400">BPM</span>
          </div>
          <div className="text-[9px] text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] mt-0.5">MAE &lt; 1.8 BPM vs ECG</div>
        </div>

        <div className="border border-gray-850 bg-[#070707] p-2.5">
          <div className="text-[10px] text-gray-500 uppercase">HRV_RMSSD</div>
          <div className="text-2xl font-bold text-white tabular-nums mt-0.5">
            {rmssd} <span className="text-xs font-normal text-gray-400">ms</span>
          </div>
          <div className="text-[9px] text-gray-400 mt-0.5">Parasympathetic Tone</div>
        </div>

        <div className="border border-gray-850 bg-[#070707] p-2.5">
          <div className="text-[10px] text-gray-500 uppercase">VIDEO_SAMPLING</div>
          <div className="text-2xl font-bold text-white tabular-nums mt-0.5">
            {fps} <span className="text-xs font-normal text-gray-400">FPS</span>
          </div>
          <div className="text-[9px] text-gray-400 mt-0.5">1080p RGB Optical feed</div>
        </div>

        <div className="border border-gray-850 bg-[#070707] p-2.5">
          <div className="text-[10px] text-gray-500 uppercase">ROI_STABILITY</div>
          <div className="text-2xl font-bold text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] tabular-nums mt-0.5">
            +28%
          </div>
          <div className="text-[9px] text-gray-400 mt-0.5">MediaPipe FaceMesh 468pt</div>
        </div>
      </div>

      {/* Real-time Oscilloscope Canvas */}
      <div className="relative border border-gray-800 bg-[#000000] overflow-hidden">
        <canvas
          ref={canvasRef}
          width={800}
          height={160}
          className="w-full h-[150px] md:h-[180px] block"
        />

        {/* Oscilloscope HUD Overlays */}
        <div className="absolute top-2 left-2 text-[9px] text-gray-600 font-mono pointer-events-none space-y-0.5">
          <div>BANDPASS: [0.75Hz - 2.50Hz] (45-150 BPM)</div>
          <div>NORMALIZATION: ZERO_MEAN_UNIT_VARIANCE</div>
        </div>

        <div className="absolute bottom-2 right-2 text-[9px] text-gray-600 font-mono pointer-events-none">
          SWEEP: 50ms/div | GAIN: 1.0x
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between text-[10px] text-gray-500">
        <span>SIGNAL_SOURCE: Real-time forehead &amp; malar micro-vascular reflectance</span>
        <span className="text-gray-400">100% CONTACTLESS SENSORLESS AI</span>
      </div>
    </div>
  );
}
