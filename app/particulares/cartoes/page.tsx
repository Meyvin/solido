// app/page.tsx

import Navbar from "@/components/layout/Navbar";
import { HeroBancaria } from "@/components/Particular/HeroBancaria";
import Footer from "@/components/layout/Footer";
import Support from "@/components/sections/Support";
import CondicoesAdesao from "@/components/Particular/menor/CondicoesAdesao";
import {ComoFunciona} from "@/components/Particular/ComoFunciona";
import OQuePodeFazer from "@/components/Particular/AbrirConta/OQuePodeFazer";
import SobreSolido from "@/components/Particular/AbrirConta/SobreSolido";

export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <HeroBancaria/>
      <SobreSolido/>
      <OQuePodeFazer/>
      <ComoFunciona/>
      <CondicoesAdesao/>
      <Support />
      <Footer />
    </main>
  );
}