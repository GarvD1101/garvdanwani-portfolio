import Link from "next/link";

interface CaseStudyCardProps {
  href: string;
  eyebrow: string;
  title: string;
  hook: string;
  metric: string;
}

export function CaseStudyCard({
  href,
  eyebrow,
  title,
  hook,
  metric,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="card" style={{ textDecoration: "none" }}>
      <span className="card__eyebrow">{eyebrow}</span>
      <h3 className="card__title">{title}</h3>
      <p className="card__hook">{hook}</p>
      <span className="card__metric">{metric}</span>
    </Link>
  );
}
