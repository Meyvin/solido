"use client";

import { useState } from "react";
import {
  Target,
  Eye,
  Heart,
  Flag,
  BadgeCheck,
} from "lucide-react";

export default function Apresentacao() {
  const [activeTab, setActiveTab] = useState<
    "missao" | "visao" | "valores" | "objetivos"
  >("missao");

  const conteudos = {
    missao: {
      titulo: "A Nossa Missão",
      descricao:
        "Prestação de serviços personalizados com aconselhamento financeiro focado no planeamento e investimentos do cliente. Garantimos qualidade, rapidez e rigor na entrega de produtos e serviços financeiros.",
      items: [
        "Maximizar valor para clientes, colaboradores e acionistas",
        "Inovação constante nos produtos e serviços",
        "Eficiência operacional em todos os processos",
        "Investimento contínuo na nossa equipa",
      ],
    },

    visao: {
      titulo: "A Nossa Visão",
      descricao:
        "Ser uma referência nacional na prestação de serviços, oferecendo soluções inovadoras e sustentáveis para os nossos clientes.",
      items: [
        "Liderança no mercado",
        "Excelência no atendimento",
        "Transformação digital contínua",
        "Crescimento sustentável",
      ],
    },

    valores: {
      titulo: "Os Nossos Valores",
      descricao:
        "Os nossos valores orientam todas as decisões e relacionamentos dentro da organização.",
      items: [
        "Integridade e transparência",
        "Compromisso com os clientes",
        "Inovação contínua",
        "Responsabilidade social",
      ],
    },

    objetivos: {
      titulo: "Os Nossos Objetivos",
      descricao:
        "Trabalhamos diariamente para alcançar metas estratégicas que contribuam para o crescimento da organização e dos nossos clientes.",
      items: [
        "Expandir a presença no mercado",
        "Aumentar a satisfação dos clientes",
        "Melhorar continuamente os serviços",
        "Promover inovação em todos os setores",
      ],
    },
  };

  const conteudo = conteudos[activeTab];

  return (
    <section className="w-full bg-[#ffffff] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[373px_1fr] gap-8">
          {/* Menu lateral */}
          <div>
            <h2 className="text-[30px] font-bold text-[#1F2937] mb-8">
              Quem Somos
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => setActiveTab("missao")}
                className={`h-[56px] w-[373.33px] rounded-[14px] flex items-center gap-3 px-5 transition-all duration-300 ${
                  activeTab === "missao"
                    ? "bg-[#F4B400] text-white shadow-md"
                    : "bg-[#ECECEC] text-[#4B5563]"
                }`}
              >
                <Target size={17} />
                <span className="text-sm font-medium">
                  Missão
                </span>
              </button>

              <button
                onClick={() => setActiveTab("visao")}
                className={`h-[56px] w-[373.33px] rounded-[14px] flex items-center gap-3 px-5 transition-all duration-300 ${
                  activeTab === "visao"
                    ? "bg-[#F4B400] text-white shadow-md"
                    : "bg-[#ECECEC] text-[#4B5563]"
                }`}
              >
                <Eye size={17} />
                <span className="text-sm font-medium">
                  Visão
                </span>
              </button>

              <button
                onClick={() => setActiveTab("valores")}
                className={`h-[56px] w-[373.33px] rounded-[14px] flex items-center gap-3 px-5 transition-all duration-300 ${
                  activeTab === "valores"
                    ? "bg-[#F4B400] text-white shadow-md"
                    : "bg-[#ECECEC] text-[#4B5563]"
                }`}
              >
                <Heart size={16} />
                <span className="text-sm font-medium">
                  Valores
                </span>
              </button>

              <button
                onClick={() => setActiveTab("objetivos")}
                className={`h-[56px] w-[373.33px] rounded-[14px] flex items-center gap-3 px-5 transition-all duration-300 ${
                  activeTab === "objetivos"
                    ? "bg-[#F4B400] text-white shadow-md"
                    : "bg-[#ECECEC] text-[#4B5563]"
                }`}
              >
                <Flag size={16} />
                <span className="text-sm font-medium">
                  Objetivos
                </span>
              </button>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="bg-[#F4EEDC] rounded-[14px] p-10">
            <h3 className="text-[24px] font-bold text-[#1F2937] mb-6">
              {conteudo.titulo}
            </h3>

            <p className="text-[#4B5563] leading-8 max-w-[700px] mb-6">
              {conteudo.descricao}
            </p>

            <div className="space-y-5">
              {conteudo.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <BadgeCheck
                    size={18}
                    className="text-[#F4B400]"
                  />

                  <span className="text-[#4B5563]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}