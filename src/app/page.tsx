import TabBar from "@/components/TabBar";
import StatusBar from "@/components/StatusBar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import DotGrid from "@/components/DotGrid";
import FloatingPixels from "@/components/FloatingPixels";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <DotGrid />
      <FloatingPixels />

      {/* Navigation */}
      <TabBar />

      {/* Content */}
      <main className="relative z-[2] mt-10 mb-6">
        <HeroSection />
        <SectionDivider variant="comment" text="/* ── skills ── */" />
        <SkillsSection />
        <SectionDivider variant="default" />
        <ProjectsSection />
        <SectionDivider variant="dashed" />
        <ExperienceSection />
        <SectionDivider variant="comment" text="/* ── education ── */" />
        <EducationSection />
        <SectionDivider variant="default" />
        <ContactSection />
      </main>

      {/* Status bar */}
      <StatusBar />
    </>
  );
}
