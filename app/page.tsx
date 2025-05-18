import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import HomeLandingSection from "@/components/HomeLandingSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="">

      <HomeLandingSection />

      {/* experience section */}
      <ExperienceSection />

      {/* education section */}
      <EducationSection />

      {/* skills section */}
      <SkillSection />

    </div>
  );
}
