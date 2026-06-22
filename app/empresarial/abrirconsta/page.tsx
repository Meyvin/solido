import Navbar from "@/components/layout/Navbar";
import {HeroAbrirContaSolido} from "@/components/Particular/HeroAbrirContaSolido";
import Footer from "@/components/layout/Footer";
import CondicoesAdesao from "@/components/Particular/menor/CondicoesAdesao";
import VantagensContaEmpresas from "@/components/ContaSolido/VantagensContaEmpresas";
import SobreProduto from "@/components/ContaSolido/SobreProduto";
import Support from "@/components/sections/Support"


export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <HeroAbrirContaSolido />
      <SobreProduto/>
      <VantagensContaEmpresas/>
      <CondicoesAdesao/>
      <Support />
      <Footer />
    </main>
  );
}