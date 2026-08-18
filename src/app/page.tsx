import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroAndDetour } from "@/components/HeroAndDetour";
import { StatBlock } from "@/components/StatBlock";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ExperienceSection } from "@/components/ExperienceSection";
import { RecognitionSection } from "@/components/RecognitionSection";
import { CompetitionsSection } from "@/components/CompetitionsSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { TechStackTable } from "@/components/TechStackTable";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* ─── 1. Centered Hero & The Detour into Systems (#detour) ─── */}
      <HeroAndDetour />

      {/* ─── 2. Full-Bleed Stat Block (Saffron on True Black) ─── */}
      <StatBlock />

      {/* ─── 3. Projects Showcase (Stacked-Card Pop Reveal) ─── */}
      <section className="container section" id="work" aria-label="Featured Projects">
        <ScrollReveal>
          <h2 className="section-heading">Featured Projects</h2>
        </ScrollReveal>
        <ProjectShowcase />
      </section>

      {/* ─── 4. Experience (Left Accent Bar Growth Reveal) ─── */}
      <ExperienceSection />

      {/* ─── 5. Recognition & Education (Rotating Snap Badge Mark Reveal) ─── */}
      <RecognitionSection />

      {/* ─── 6. Competitions & Leadership (Fade-Up Reveal) ─── */}
      <CompetitionsSection />

      {/* ─── 7. Credentials & Certifications (Fade-Up Reveal) ─── */}
      <CredentialsSection />

      {/* ─── 8. Tech Stack & Tooling (Category Banner Wipe Reveals) ─── */}
      <section className="container container--wide section" id="tech-stack" aria-label="Tech Stack">
        <ScrollReveal>
          <h2 className="section-heading">Tech Stack &amp; Tooling</h2>
        </ScrollReveal>
        <TechStackTable />
      </section>

      {/* ─── 9. Contact (Clip-Path Wipe Reveal) ─── */}
      <ContactSection />
    </>
  );
}
