// app/page.tsx

import Navbar from "@/components/layout/Navbar";
import { HeroContaParticular } from "@/components/Particular/HeroContaParticular";
import Footer from "@/components/layout/Footer";
import Support from "@/components/sections/Support";
import {Formulario} from "@/components/Particular/Formulario";
import {ComoFunciona} from "@/components/Particular/ComoFunciona";


export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <HeroContaParticular/>
      <Formulario/>
      <ComoFunciona/>
      <Support />
      <Footer />
    </main>
  );
}