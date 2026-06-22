"use client";

import Image from "next/image";

const steps = [
  {
    title: "Preencha o formulário",
    description:
      "Insira os seus dados e anexe a declaração de rendimentos ou comprovativo de salário.",
    image: "/images/card1.png",
  },
  {
    title: "O Sólido entra em contacto",
    description:
      "A nossa equipa contacta-o para validar a informação e concluir o processo de abertura.",
    image: "/images/card2.png",
  },
  {
    title: "Conta aberta",
    description:
      "Comece a usar a sua conta Sólido — pagamentos, transferências e acesso digital.",
    image: "/images/offer-3.png",
  },
];

export function ComoFunciona() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <span className="text-[#FBB400] text-[14px] md:text-[16px] font-semibold uppercase tracking-wide">
            Como Funciona
          </span>

          <h2 className="mt-4 text-[30px] md:text-[36px] font-bold text-[#111827] leading-tight">
            Como funciona?
          </h2>

          <p className="mt-4 text-[14px] md:text-[15px] text-[#6B7280]">
            Três passos simples para obter o seu financiamento
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              {/* Imagem */}
              <div className="relative h-[186px] w-full overflow-hidden rounded-xl bg-[#F5F5F5] transition-all duration-300 group-hover:shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <div className="mt-6 md:mt-10">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#111827] transition-colors duration-300 group-hover:text-[#FBB400]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#4B5563]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}