import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import GithubContributionSection from "@/components/GithubContributionSection";
import HomeLandingSection from "@/components/HomeLandingSection";
import SkillSection from "@/components/SkillSection";
import { Github } from "lucide-react";

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

      {/* footer */}
      <Footer />

    </div>
  );
}
