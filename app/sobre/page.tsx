import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import Apresentacao from  "@/components/Sobre/Apresentacao";
import Facil from  "@/components/Sobre/Facil";
import Objectivos from  "@/components/Sobre/Objectivos";
import FazerParte from "@/components/Sobre/FazerParte";

export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <Hero />
      <Apresentacao/>
      <Facil/>
      <Objectivos/>
      <FazerParte />
      <Footer />
    </main>
  );
}