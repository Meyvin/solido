"use client";

import {
  ArrowUpRight,
  Clock3,
  Shield,
  Briefcase,
} from "lucide-react";

const benefits = [
  {
    icon: ArrowUpRight,
    title: "Financiamento até 90%",
    description:
      "Do valor do bem que pretende adquirir",
  },

  {
    icon: Clock3,
    title: "Prazo flexível",
    description:
      "De 12 a 72 meses para pagar",
  },

  {
    icon: Shield,
    title: "Seguro incluído",
    description:
      "Cobertura completa durante o financiamento",
  },

  {
    icon: Briefcase,
    title: "Para seu negócio",
    description:
      "Viaturas, equipamentos e mais",
  },
];

export default function Vantagens() {
  return (
    <section className="py-28 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
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
            VANTAGENS
          </p>

          {/* TITLE */}
          <h2
            className="
              text-[36px]
              leading-[1.1]
              font-bold
              text-[#111827]
            "
          >
            Por que escolher o Leasing Sólido?
          </h2>
        </div>

        {/* CARDS */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
          "
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  w-[286px]
                  h-[220px]
                  rounded-[20px]
                  bg-white
                  border
                  border-[#EFEFEF]

                  flex
                flex-col
                items-center
                text-center
                pt-10

                  px-8

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-2
                  hover:border-[#F5B400]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    rounded-[20px]
                    bg-[radial-gradient(circle_at_top,rgba(245,180,0,0.10),transparent_60%)]
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10

                    w-[52px]
                    h-[52px]
                    rounded-[12px]

                    bg-[#FFF7E5]

                    flex
                    items-center
                    justify-center

                    mb-8

                    transition-all
                    duration-500

                    group-hover:bg-[#F5B400]
                    group-hover:scale-110
                  "
                >
                  <Icon
                    size={24}
                    className="
                      text-[#F5B400]
                      transition-all
                      duration-500
                      group-hover:text-white
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    relative
                    z-10

                    text-[18px]
                    leading-[1.2]
                    font-bold
                    text-[#111827]

                    mb-4

                    transition-all
                    duration-500

                    group-hover:text-[#F5B400]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    relative
                    z-10

                    text-[14px]
                    leading-[24px]
                    text-[#6B7280]

                    max-w-[220px]

                    transition-all
                    duration-500

                    group-hover:text-[#4B5563]
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}