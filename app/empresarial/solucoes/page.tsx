import Navbar from "@/components/layout/Navbar";
import {HeroSolucoes} from "@/components/Particular/HeroSolucoes";
import Footer from "@/components/layout/Footer";
import SobreSolucoes from "@/components/Solucoes/SobreSolucoes";
import ProdutosEmpresas from "@/components/Solucoes/ProdutosEmpresas";
import Support from "@/components/sections/Support"


export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <HeroSolucoes/>
      <SobreSolucoes/>
     <ProdutosEmpresas/>
      <Support />
      <Footer />
    </main>
  );
}