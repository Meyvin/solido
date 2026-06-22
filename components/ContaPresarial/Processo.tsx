// components/sections/LeasingProcess.tsx

"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Simule",
    description:
      "Use nossa calculadora para saber quanto pode financiar",
  },

  {
    number: "02",
    title: "Candidate-se",
    description:
      "Preencha o formulário com seus dados",
  },

  {
    number: "03",
    title: "Aprovação",
    description:
      "Análise rápida em até 48 horas",
  },

  {
    number: "04",
    title: "Assinatura",
    description:
      "Assine digitalmente e receba o bem",
  },
];

export default function Processo() {
  return (
    <section className="py-28 bg-[#ffffff] overflow-hidden">
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
            PROCESSO
          </p>

          {/* TITLE */}
          <h2
            className="
              text-[36px]
              leading-[1.05]
              font-bold
              text-[#111827]
              mb-6
            "
          >
            Como funciona?
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-[16px]
              leading-[32px]
              text-[#4B5563]
            "
          >
            Quatro passos simples para obter o seu
            financiamento
          </p>
        </div>

        {/* PROCESS */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-6
              "
            >
              {/* CARD */}
              <div
                className="
                  group
                  relative

                  w-[258px]
                  h-[200px]

                  rounded-[16px]

                  bg-[#F9FAFB]

                  border
                  border-[#F3F4F6]

                  px-8
                  py-8

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#F5B400]
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

                    bg-[radial-gradient(circle_at_top,rgba(245,180,0,0.10),transparent_60%)]
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
                    items-center
                    text-center
                  "
                >
                  {/* NUMBER */}
                  <span
                    className="
                      text-[36px]
                      leading-none
                      font-bold
                      text-[#FBB4004D]

                      mb-6

                      transition-all
                      duration-500

                      group-hover:text-[#F5B400]
                    "
                  >
                    {step.number}
                  </span>

                  {/* TITLE */}
                  <h3
                    className="
                      min-h-[56px]

                      flex
                      items-center
                      justify-center
                    
                      text-[20px]
                      leading-[1.2]
                      font-bold
                      text-[#111827]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-[14px]
                      leading-[14px]
                      text-[#4B5563]
                      max-w-[180px]
                      -mt-2
                    
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* ARROW */}
              {index !== steps.length - 1 && (
                <div
                  className="
                    flex
                    items-center
                    justify-center

                    text-[#D1D5DB]

                    flex-shrink-0
                  "
                >
                  <ArrowRight size={34} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}