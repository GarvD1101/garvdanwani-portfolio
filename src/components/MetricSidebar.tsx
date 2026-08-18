interface Metric {
  value: string;
  label: string;
}

interface MetricSidebarProps {
  metrics: Metric[];
}

export function MetricSidebar({ metrics }: MetricSidebarProps) {
  return (
    <aside className="metric-sidebar" aria-label="Key Project Metrics">
      <div className="metric-sidebar__header">Key metrics</div>
      {metrics.map((m) => (
        <div key={m.label} className="metric-sidebar__item">
          <div className="metric-sidebar__value">{m.value}</div>
          <div className="metric-sidebar__label">{m.label}</div>
        </div>
      ))}
    </aside>
  );
}
