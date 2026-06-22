// components/sections/News.tsx

"use client";

import Image from "next/image";

import { ArrowRight } from "lucide-react";

const news = [
  {
    category: "RESULTADOS",
    title: "Sólido cresce 35% em 2025",
    description:
      "Mais clientes, mais serviços, mais confiança.",
    action: "Ler mais",
  },

  {
    category: "INOVAÇÃO",
    title: "Novo recurso: Transferências por QR Code",
    description:
      "Agora é ainda mais fácil enviar dinheiro.",
    action: "Descobrir",
  },

  {
    category: "RECONHECIMENTO",
    title: "Sólido eleito melhor microbanco digital",
    description:
      "Prémio reconhece nossa inovação e atendimento.",
    action: "Ver prémio",
  },

  {
    category: "EXPANSÃO",
    title: "Novas agências em Maputo e Beira",
    description:
      "Mais perto de você, em mais lugares.",
    action: "Ver locais",
  },
];

export default function News() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* HEADER */}
        <div className="mb-14">
          <p
            className="
              uppercase
              tracking-[3px]
              text-[#F5B400]
              text-[13px]
              font-semibold
              mb-4
            "
          >
            FIQUE POR DENTRO
          </p>

          <h2
            className="
              text-[56px]
              leading-[1.05]
              font-bold
              text-[#111827]
            "
          >
            Novidades do Sólido
          </h2>
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            xl:flex-row
            gap-8
            items-start
          "
        >
          {/* LEFT CARD */}
          <div
            className="
              relative
              w-full
              xl:w-[592px]
              h-[744px]
              rounded-[14px]
              overflow-hidden
              flex-shrink-0
            "
          >
            {/* IMAGE */}
            <Image
              src="/images/news-main.png"
              alt="Novidades"
              fill
              priority
              className="object-cover"
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/10
                to-transparent
              "
            />

            {/* CONTENT */}
            <div
              className="
                absolute
                inset-0
                px-8
                pb-8
                flex
                flex-col
                justify-end
              "
            >
              {/* TAG */}
              <p
                className="
                  text-white/80
                  uppercase
                  tracking-[2px]
                  text-[14px]
                  mb-4
                "
              >
                DESTAQUE
              </p>

              {/* TITLE */}
              <h3
                className="
                  text-white
                  text-[36px]
                  leading-[1.1]
                  font-bold
                  max-w-[470px]
                  mb-5
                "
              >
                5 anos de Sólido:
                <br />
                Uma história de crescimento
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-white/85
                  text-[16px]
                  leading-7
                  max-w-[440px]
                  mb-8
                "
              >
                De startup a referência em microbanco
                digital em Moçambique.
                Conheça nossa trajetória.
              </p>

              {/* BUTTON */}
              <button
                className="
                  flex
                  items-center
                  gap-2
                  text-white
                  text-[16px]
                  font-medium
                  group
                "
              >
                Ler história completa

                <ArrowRight
                  size={16}
                  className="
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex
              flex-col
              gap-6
              w-full
              xl:w-[592px]
            "
          >
            {news.map((item, index) => (
              <div
                key={index}
                className="
                  w-full
                  h-[168px]
                  rounded-[14px]
                  bg-[#FAFAFA]
                  border
                  border-[#EFEFEF]
                  px-8
                  flex
                  flex-col
                  justify-center
                  transition-all
                  duration-300
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                "
              >
                {/* CATEGORY */}
                <p
                  className="
                    uppercase
                    tracking-[2px]
                    text-[#F5B400]
                    text-[12px]
                    font-semibold
                    mb-3
                  "
                >
                  {item.category}
                </p>

                {/* TITLE */}
                <h3
                  className="
                    text-[18px]
                    leading-[1.3]
                    font-bold
                    text-[#111827]
                    mb-2
                    max-w-[90%]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[#6B7280]
                    text-[14px]
                    leading-6
                    mb-4
                  "
                >
                  {item.description}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#F5B400]
                    text-[15px]
                    font-medium
                    group
                  "
                >
                  {item.action}

                  <ArrowRight
                    size={15}
                    className="
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}