// app/page.tsx

import Navbar from "@/components/layout/Navbar";
import {HeroPoupanca } from "@/components/Particular/HeroPoupanca";
import Footer from "@/components/layout/Footer";
import Support from "@/components/sections/Support";
import SobrePoupanca from "@/components/Particular/poupanca/SobrePoupanca";
import NossosProdutos from "@/components/Particular/poupanca/NossosProdutos";

export default function Home() {
  return (
    <main className="bg-[#F7F7F7] overflow-hidden">
      <Navbar />
      <HeroPoupanca/>
      <SobrePoupanca/>
      <NossosProdutos/>
      <Support />
      <Footer />
    </main>
  );
}