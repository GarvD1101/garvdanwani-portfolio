import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/data";
import { ProjectDataView } from "@/components/features/ProjectDataView";

const project = PROJECTS.find((p) => p.slug === "financial-platform")!;

export const metadata: Metadata = {
  title: `${project.title} // Telemetry Monitor`,
  description: project.summary,
};

export default function FinancialPlatformPage() {
  if (!project) notFound();
  return <ProjectDataView project={project} />;
}
