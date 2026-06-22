// components/sections/HelpSection.tsx

"use client";

import { useState } from "react";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  PiggyBank,
  Home,
  Plane,
  TrendingUp,
  Wrench,
} from "lucide-react";

const tabs = [
  {
    icon: BadgeDollarSign,
    label: "Preciso de crédito",
  },

  {
    icon: PiggyBank,
    label: "Quero poupar",
  },

  {
    icon: Home,
    label: "Quero comprar casa",
  },

  {
    icon: Plane,
    label: "Vou viajar",
  },

  {
    icon: TrendingUp,
    label: "Quero investir",
  },

  {
    icon: Wrench,
    label: "Planear reforma",
  },

  {
    icon: BadgeDollarSign,
    label: "Microcrédito",
  },

  {
    icon: PiggyBank,
    label: "Seguros",
  },
];

const cardsGroups = [
  [
    {
      image: "/images/card1.png",
      tag: "CRÉDITO PESSOAL",
      title: "Dinheiro na conta em\n24 horas",
      description:
        "De 1.000 MZN à 500.000 MZN\nSem garantias, aprovação rápida",
      button: "Simular agora",
      badge: "MAIS POPULAR",
    },

    {
      image: "/images/card2.png",
      tag: "CRÉDITO VEÍCULO",
      title: "Seu carro novo\nestá esperando",
      description:
        "Financiamento até 100%\ndo valor",
      button: "Saber mais",
    },

    {
      image: "/images/card3.jpg",
      tag: "CRÉDITO HABITAÇÃO",
      title: "Realize o sonho da casa\nprópria",
      description:
        "Taxas a partir de 15% ao ano",
      button: "Simular",
    },
  ],

  [
    {
      image: "/images/card2.png",
      tag: "POUPANÇA",
      title: "Poupe dinheiro\ncom segurança",
      description:
        "Rendimento mensal garantido",
      button: "Abrir conta",
      badge: "RECOMENDADO",
    },

    {
      image: "/images/card3.jpg",
      tag: "INVESTIMENTO",
      title: "Invista no\nseu futuro",
      description:
        "Rentabilidade competitiva",
      button: "Investir",
    },

    {
      image: "/images/offer-3.jpg",
      tag: "SEGURANÇA",
      title: "Proteja seu\ndinheiro",
      description:
        "Mais segurança para si",
      button: "Descobrir",
    },
  ],
];

export default function HelpSection() {
  const [activeTab, setActiveTab] =
    useState(0);

  const [hoveredCard, setHoveredCard] =
    useState<number | null>(0);

  const [startIndex, setStartIndex] =
    useState(0);

  const visibleTabs = tabs.slice(
    startIndex,
    startIndex + 5
  );

  const currentCards =
    cardsGroups[activeTab % cardsGroups.length];

  return (
    <section className="py-24 bg-[#F7F7F7] overflow-hidden">
      <div
        className="
          max-w-[1360px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}
        <div className="mb-12">
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
            O QUE VOCÊ PRECISA?
          </p>

        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-[36px]
            leading-[1.1]
            font-bold
            text-[#111827]
          "
        >
            Como podemos ajudar você hoje?
          </h2>
        </div>

        {/* TOP BUTTONS */}
        <div
          className="
            flex
            items-center
            gap-4
            mb-12
            w-full
          "
        >
          {/* LEFT BUTTON */}
          <button
            onClick={() =>
              setStartIndex((prev) =>
                prev > 0 ? prev - 1 : 0
              )
            }
            className="
              w-[44px]
              h-[44px]
              rounded-full
              bg-white
              border
              border-[#E5E7EB]
              flex
              items-center
              justify-center
              shadow-sm
              flex-shrink-0
            "
          >
            <ArrowLeft size={18} />
          </button>

          {/* TABS */}
            <div
              className="
                flex
                items-center
                gap-3
                overflow-x-auto
                w-full
                scrollbar-hide
              "
            >
            {visibleTabs.map((tab, index) => {
              const Icon = tab.icon;

              const realIndex =
                startIndex + index;

              const active =
                activeTab === realIndex;

              return (
                <button
                  key={realIndex}
                  onClick={() =>
                    setActiveTab(realIndex)
                  }
                  className={`
                    h-[48px]
                    sm:h-[56px]
                    px-4
                    sm:px-8
                    text-sm
                    sm:text-base
                    rounded-full
                    border
                    transition-all
                    duration-300
                    flex
                    items-center
                    gap-3
                    leading-none
                    font-medium
                    whitespace-nowrap
                    flex-shrink-0
                    ${
                      active
                        ? "bg-[#F5B400] border-[#F5B400] text-white shadow-md"
                        : "bg-white border-[#E5E7EB] text-[#4B5563]"
                    }
                  `}
                >
                  <Icon size={18} />

                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() =>
              setStartIndex((prev) =>
                prev + 5 < tabs.length
                  ? prev + 1
                  : prev
              )
            }
            className="
              w-[44px]
              h-[44px]
              rounded-full
              bg-white
              border
              border-[#E5E7EB]
              flex
              items-center
              justify-center
              shadow-sm
              flex-shrink-0
            "
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {currentCards.map((card, index) => {
            const isHovered =
              hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() =>
                  setHoveredCard(index)
                }
                onMouseLeave={() =>
                  setHoveredCard(0)
                }
              className={`
                relative
                overflow-hidden
                rounded-[16px]
                transition-all
                duration-500
                ease-in-out
                cursor-pointer
                w-full
                h-[320px]
                ${
                  isHovered
                    ? "lg:scale-[1.03]"
                    : "scale-100"
                }
              `}
              >
                {/* IMAGE */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/20" />

                {/* CONTENT */}
                <div
                  className="
                    relative
                    z-10
                    h-full
                    p-6
                    flex
                    flex-col
                    justify-between
                    text-white
                  "
                >
                  {/* TOP */}
                  <div className="flex justify-between">
                    <p
                      className="
                        text-[14px]
                        uppercase
                        tracking-[1px]
                        text-white/90
                      "
                    >
                      {card.tag}
                    </p>

                    {card.badge && (
                      <div
                        className="
                          px-4
                          h-[32px]
                          rounded-full
                          bg-[#F59E0B]
                          flex
                          items-center
                          justify-center
                          text-[13px]
                          font-semibold
                          text-white
                        "
                      >
                        {card.badge}
                      </div>
                    )}
                  </div>

                  {/* CENTER */}
                  <div>
                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        leading-[1.15]
                        font-bold
                        mb-5
                        whitespace-pre-line
                        max-w-[340px]
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        leading-7
                        text-white/90
                        whitespace-pre-line
                        max-w-[280px]
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <button
                    className={`
                      w-full
                      sm:w-[131px]
                      h-[36px]
                      rounded-full
                      border
                      transition-all
                      duration-300
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-[14px]
                      font-medium
                      ${
                        isHovered
                          ? "bg-white border-white text-[#F5B400]"
                          : "bg-transparent border-white text-white"
                      }
                    `}
                  >
                    {card.button}

                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}