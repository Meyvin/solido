// components/sections/Solutions.tsx

"use client";

import { useState } from "react";

import Image from "next/image";

const tabs = [
  "Soluções Empresariais",
  "Soluções Particulares",
  "Crédito ao Consumo",
  "Crédito Habitação",
  "Depósito a Prazo",
];

const cardsData = {
  0: [
    {
      title: "Pagamentos Online",
      description:
        "Pague serviços e faça compras online de forma rápida e segura.",
    },

    {
      title: "Acesso Via Ebanking",
      description:
        "Aceda à sua conta e gere as suas finanças de forma segura pela internet.",
    },

    {
      title: "Transferência entre bancos diferentes.",
      description:
        "Envie dinheiro para contas de outros bancos de forma rápida e segura.",
    },

    {
      title: "Acesso ao Mobile Banking",
      description:
        "Aceda à sua conta e faça operações financeiras diretamente no seu telemóvel.",
    },
  ],

  1: [
    {
      title: "Conta Particular",
      description:
        "Gerencie sua conta pessoal de forma simples e segura.",
    },

    {
      title: "Cartão Débito",
      description:
        "Utilize seu cartão em compras e pagamentos diários.",
    },

    {
      title: "Transferências Instantâneas",
      description:
        "Envie e receba dinheiro em poucos segundos.",
    },

    {
      title: "Poupança Inteligente",
      description:
        "Organize suas finanças e aumente sua poupança.",
    },
  ],

  2: [
    {
      title: "Crédito Pessoal",
      description:
        "Solicite crédito com aprovação rápida e segura.",
    },

    {
      title: "Crédito Empresarial",
      description:
        "Impulsione o crescimento do seu negócio.",
    },

    {
      title: "Financiamento Flexível",
      description:
        "Planos ajustados às suas necessidades.",
    },

    {
      title: "Taxas Competitivas",
      description:
        "Melhores condições para o seu financiamento.",
    },
  ],

  3: [
    {
      title: "Casa Própria",
      description:
        "Realize o sonho da casa própria com facilidade.",
    },

    {
      title: "Crédito Habitação",
      description:
        "Financiamento imobiliário acessível e rápido.",
    },

    {
      title: "Taxas Fixas",
      description:
        "Mais estabilidade para o seu orçamento.",
    },

    {
      title: "Simulação Online",
      description:
        "Calcule seu crédito de forma simples.",
    },
  ],

  4: [
    {
      title: "Depósito Seguro",
      description:
        "Invista com segurança e rendimento garantido.",
    },

    {
      title: "Rentabilidade",
      description:
        "Aumente o valor do seu dinheiro ao longo do tempo.",
    },

    {
      title: "Prazos Flexíveis",
      description:
        "Escolha o período ideal para investir.",
    },

    {
      title: "Gestão Simples",
      description:
        "Acompanhe seus investimentos facilmente.",
    },
  ],
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#ffffff] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14">
          {/* TAG */}
          <p
            className="
              uppercase
              tracking-[3px]
              text-[#F5B400]
              text-[14px]
              font-semibold
              mb-4
            "
          >
            AS NOSSAS SOLUÇÕES
          </p>

          {/* TITLE */}
          <h2
            className="
             text-3xl sm:text-4xl lg:text-[36px]
              leading-[1.1]
              font-bold
              text-[#111827]
              mb-12
            "
          >
            Um Microbanco! Várias Soluções
          </h2>

          {/* TABS */}
          <div
            className="
              flex
              items-center
              gap-6
              lg:gap-12
              overflow-x-auto
              whitespace-nowrap
              border-b
              border-[#D9D9D9]
              pb-5
              scrollbar-hide
            "
>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="
                  relative
                  text-sm lg:text-[16px]
                  font-medium
                  pb-5
                  transition-all
                  duration-300
                "
              >
                <span
                  className={
                    activeTab === index
                      ? "text-[#111827]"
                      : "text-[#6B7280]"
                  }
                >
                  {tab}
                </span>

                {/* ACTIVE LINE */}
                {activeTab === index && (
                  <div
                    className="
                      absolute
                      left-0
                      bottom-[-22px]
                      w-full
                      h-[2px]
                      bg-[#111827]
                    "
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS CONTAINER */}
        <div
          className="
           bg-[#F9FAFB]
              rounded-[24px]
              p-4
              sm:p-6
              lg:p-10
          "
        >
          {/* GRID */}
          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-4
            sm:gap-6
            lg:gap-8
            "
          >
            {cardsData[
              activeTab as keyof typeof cardsData
            ].map((card, index) => (
              <div
                key={index}
                className="
                  w-full
                  min-h-[240px]
                  lg:h-[280px]
                  p-5
                  sm:p-7
                  lg:p-10
                  rounded-[16px]
                  border-[2px]
                  border-[#EAEAEA]
                  bg-white
                  
                  transition-all
                  duration-300
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-[56px]
                    h-[56px]
                    rounded-[14px]
                    border
                    border-[#EAEAEA]
                    flex
                    items-center
                    justify-center
                    mb-6 lg:mb-10
                  "
                >
                  <Image
                    src="/images/SVG.png"
                    alt="Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl lg:text-[24px]
                    leading-[1.2]
                    font-semibold
                    text-[#F5B400]
                    mb-5
                    max-w-[430px]
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-sm
                    leading-7
                    text-[#6B7280]
                    max-w-[430px]
                  "
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}