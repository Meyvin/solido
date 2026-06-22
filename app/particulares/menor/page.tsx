// app/page.tsx

import Navbar from "@/components/layout/Navbar";
import { HeroContaMenorParticular } from "@/components/Particular/HeroContaMenorParticular";
import Footer from "@/components/layout/Footer";
import Support from "@/components/sections/Support";
import CondicoesAdesao from "@/components/Particular/menor/CondicoesAdesao";
import SobreContaMenor from "@/components/Particular/menor/SobreContaMenor";
import BeneficiosContaMenor from "@/components/Particular/menor/BeneficiosContaMenor";
import PorqueEscolherContaMenor from "@/components/Particular/menor/PorqueEscolherContaMenor";


export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <HeroContaMenorParticular/>
      <PorqueEscolherContaMenor/>
      <BeneficiosContaMenor/>
      <SobreContaMenor/>
      <CondicoesAdesao/>
      <Support />
      <Footer />
    </main>
  );
}