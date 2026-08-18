interface Metric {
  value: string;
  label: string;
}

interface MetricStripProps {
  metrics: Metric[];
}

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <section className="vitals-band" id="vitals" aria-label="Vitals and key metrics">
      <div className="container container--wide">
        <div className="vitals-strip">
          {metrics.map((m) => (
            <div key={m.label} className="vitals-strip__item">
              <div className="vitals-strip__value">{m.value}</div>
              <div className="vitals-strip__label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
