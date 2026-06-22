import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import Vantagens from "@/components/ContaPresarial/Vantagens";
import Produto from "@/components/ContaPresarial/Produto";
import Requisitos from "@/components/ContaPresarial/Requisitos";
import Processo from "@/components/ContaPresarial/Processo";
import Credito from "@/components/ContaPresarial/Credito";
import Ajuda from "@/components/ContaPresarial/Ajuda";


export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <Hero />
      <Vantagens/>
      <Produto/>
      <Requisitos/>
      <Processo/>
      <Credito/>
      <Ajuda/>
      <Footer />
    </main>
  );
}