import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import FeaturesGrid from "@/components/FeaturesGrid";
import CommunitySection from "@/components/CommunitySection";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/About";
import EventsSection from "@/components/Event";


export default function Home() {

  const events = [
    { title: 'Motorcross Challenge', date: 'May 25, 2025' },
    { title: 'Desert Ride Fest', date: 'June 10, 2025' },
    { title: 'Night Rally', date: 'July 5, 2025' },
  ];
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
