import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import FeaturesGrid from "@/components/FeaturesGrid";
import CommunitySection from "@/components/CommunitySection";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/About";
import EventsSection from "@/components/Event";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      {/* <AboutSection />
      <FeaturesGrid />
      <CommunitySection />
      <Gallery /> */}
      {/* Events preview section */}
      <EventsSection />
    </main>
  );
}
