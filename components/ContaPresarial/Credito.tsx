"use client";

import {
  ArrowRight,
  Calculator,
} from "lucide-react";

const products = [
  {
    title: "Crédito Empresarial",
    description:
      "Capital de giro para seu negócio",
  },

  {
    title: "Conta Empresas",
    description:
      "Gestão simplificada da sua empresa",
  },

  {
    title: "Cartão Empresarial",
    description:
      "Controle dos gastos da empresa",
  },
];

export default function Credito() {
  return (
    <section className="bg-[#F7F7F7] overflow-hidden">
      {/* TOP CTA */}
      <div
        className="
          relative

          w-full
          h-[420px]

          bg-[#F5B400]

          flex
          items-center
          justify-center
        "
      >
        {/* CONTENT */}
        <div
          className="
            relative
            z-10

            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* ICON */}
          <div
            className="
              w-[64px]
              h-[64px]

              rounded-full

              bg-[#F8C533]

              flex
              items-center
              justify-center

              mb-10

              transition-all
              duration-500

              hover:scale-110
            "
          >
            <Calculator
              size={30}
              className="text-white"
            />
          </div>

          {/* TITLE */}
          <h2
            className="
              text-[36px]
              leading-[1.05]
              font-bold
              text-white

              mb-6
            "
          >
            Simule o seu crédito
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-[18px]
              leading-[25px]
              text-white/90

              max-w-[720px]

              mb-12
            "
          >
            Descubra em poucos cliques quanto pode
            financiar e qual será a sua prestação
            mensal
          </p>

          {/* BUTTON */}
          <button
            className="
              group

              h-[48px]
              px-8

              rounded-full

              bg-white

              flex
              items-center
              justify-center
              gap-3

              text-[#FBB400]
              text-[10x]
              font-semibold

              transition-all
              duration-500

              hover:scale-[1.03]
              hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)]
            "
          >
            Fazer simulação

            <ArrowRight
              size={18}
              className="
                transition-all
                duration-300

                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="py-28">
        <div className="max-w-[1216px] mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-20">
            {/* TAG */}
            <p
              className="
                uppercase
                tracking-[3px]
                text-[#FBB400]
                text-[14px]
                font-semibold
                mb-5
              "
            >
              CONHEÇA TAMBÉM
            </p>

            {/* TITLE */}
            <h2
              className="
                text-[36px]
                leading-[1.05]
                font-bold
                text-[#111827]
              "
            >
              Outros produtos para empresas
            </h2>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
          >
            {products.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative

                  h-[180px]

                  rounded-[24px]

                  bg-white

                  border
                  border-[#F3F4F6]

                  p-8

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#FBB400]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                "
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0

                    rounded-[24px]

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-700

                    bg-[radial-gradient(circle_at_top_right,rgba(245,180,0,0.08),transparent_60%)]
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    relative
                    z-10

                    h-full

                    flex
                    flex-col
                    justify-between
                  "
                >
                  {/* TOP */}
                  <div>
                    {/* TITLE */}
                    <h3
                      className="
                        text-[20px]
                        leading-[1.1]
                        font-bold
                        text-[#111827]

                        mb-4

                        transition-all
                        duration-500

                        group-hover:text-[#FBB400]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-[16px]
                        leading-[28px]
                        text-[#6B7280]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* LINK */}
                  <button
                    className="
                      group/link

                      flex
                      items-center
                      gap-3

                      text-[#FBB400]
                      text-[16px]
                      font-semibold
                    "
                  >
                    Saber mais

                    <ArrowRight
                      size={18}
                      className="
                        transition-all
                        duration-300

                        group-hover/link:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}