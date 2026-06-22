// app/page.tsx

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import HelpSection from "../components/sections/HelpSection";
import Solutions from "../components/sections/Solutions";
import DigitalBank from "@/components/sections/DigitalBank";
import MobileApp from "../components/sections/MobileApp";
import Offers from "../components/sections/Offers";
import News from "../components/sections/News";
import Support from "../components/sections/Support";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <Hero />
      <HelpSection />
      <Offers />
      <DigitalBank />
      <Solutions />
      <MobileApp />
      <News />
      <Support />
      <Footer />
    </main>
  );
}