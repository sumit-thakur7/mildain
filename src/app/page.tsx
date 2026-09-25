import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ExplorePrograms from "@/components/home/ExplorePrograms";
import PartnerLogos from "@/components/home/PartnerLogos";
import CommitmentSection from "@/components/home/CommitmentSection";
import ProgramsStandOut from "@/components/home/ProgramsStandOut";
import ExploreSection from "@/components/home/ExploreSection";
import SkillupSection from "@/components/home/SkillupSection";
import AlumniVideoSection from "@/components/home/AlumniVideoSection";
import InsightsCarousel from "@/components/home/InsightsCarousel";
import Footer from "@/components/layout/Footer";
import StickyBottomBar from "@/components/shared/StickyBottomBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <ExplorePrograms />
      <CommitmentSection />
      <ProgramsStandOut />
      <ExploreSection />
      <SkillupSection />
      <AlumniVideoSection />
      <InsightsCarousel />
      <Footer />
      <StickyBottomBar />
    </div>
  );
}