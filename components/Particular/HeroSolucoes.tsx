"use client";

import Image from "next/image";

export function HeroSolucoes() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[760px] overflow-hidden">
      {/* Imagem de Fundo */}
      <Image
        src="/images/hero-bg-2.png"
        alt="Conta Particular Sólido"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Escuro */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto h-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center">
          <div className="max-w-[720px] text-white">
            {/* Subtítulo */}
            <p
              className="
                mb-6
                text-[14px]
                md:text-[14px]
                font-medium
                uppercase
                tracking-[1px]
              "
            >
              CONTA DIGITAL SÓLIDO
            </p>

            {/* Título */}
            <h1
              className="
                mb-6
                font-bold
                leading-20
                text-[42px]
                sm:text-[52px]
                md:text-[64px]
                lg:text-[72px]
              "
            >
             Soluções
              <br />
              Empresariais
            </h1>

            {/* Descrição */}
            <p
              className="
                max-w-[650px]
                text-[16px]
                md:text-[20px]
                leading-8
                text-white
              "
            >
              O Microbanco Sólido oferece produtos de crédito variados para atender às 
              necessidades pessoais e profissionais. Aderir ao Crédito com o Sólido Tá
               Fácil — o compromisso é alcançar a necessidade do cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}