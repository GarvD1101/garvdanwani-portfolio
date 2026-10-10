import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/data";
import { ProjectDataView } from "@/components/features/ProjectDataView";

interface PageProps {
  params: Promise<{
    projectSlug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    projectSlug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = PROJECTS.find((p) => p.slug === projectSlug);

  if (!project) {
    return {
      title: "Project Not Found // System Monitor",
    };
  }

  return {
    title: `${project.title} // Telemetry Monitor`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { projectSlug } = await params;
  const project = PROJECTS.find((p) => p.slug === projectSlug);

  if (!project) {
    notFound();
  }

  return <ProjectDataView project={project} />;
}
