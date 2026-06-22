// components/sections/Offers.tsx

"use client";

import { useState } from "react";

import Image from "next/image";

import { ArrowRight } from "lucide-react";

const offers = [
  {
    image: "/images/offer-1.png",
    title: "Indique e ganhe",
    description:
      "Convide amigos para abrirem conta no Sólido e ganhe 500 MZN por cada indicação que for aprovada.",
    button: "Indicar agora",
  },

  {
    image: "/images/offer-2.png",
    title: "Cashback no cartão",
    description:
      "Use seu cartão Sólido e receba até 5% de volta em compras selecionadas.",
    button: "Ativar cashback",
  },

  {
    image: "/images/offer-3.png",
    title: "Proteja seu dinheiro",
    description:
      "Aprenda a identificar golpes e mantenha sua conta sempre segura.",
    button: "Ver dicas de segurança",
  },
];

export default function Offers() {
const [hovered, setHovered] = useState(0);

  return (
    <section className="py-24 bg-[#ffffff] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* HEADER */}
        <div className="mb-16">
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
            NÃO PERCA
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
            Ofertas especiais para você
          </h2>
        </div>

        {/* CARDS */}
        <div
          className="
            flex
            items-start
            gap-10
          "
        >
          {offers.map((offer, index) => {
           const isHovered = hovered === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                className={`
                  relative
                  overflow-hidden
                  rounded-[20px]
                  bg-transparent
                  transition-all
                  duration-500
                  ease-in-out
                  cursor-pointer
                  flex-shrink-0
                  ${
                    hovered === index
                      ? "w-[486px] h-[429px]"
                      : "w-[250px] h-[319px] opacity-70"
                  }
                `}
              >
                {/* IMAGE */}
                <div
                  className={`
                    relative
                    w-full
                    overflow-hidden
                    rounded-[20px]
                    transition-all
                    duration-500
                    ${
                      isHovered
                        ? "h-[240px]"
                        : "h-[192px]"
                    }
                  `}
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`
                    flex
                    flex-col
                    justify-between
                    h-[127px]
                    transition-all
                    duration-500
                    ${
                      isHovered
                        ? "pt-6"
                        : "pt-3"
                    }
                  `}
                >
                  <div>
                    {/* TITLE */}
                    <h3
                      className={`
                        font-bold
                        leading-[1.2]
                        mb-2
                        transition-all
                        duration-500
                        ${
                          isHovered
                            ? "text-[24px] text-[#FBB400]"
                            : "text-[16px] text-[#111827]"
                        }
                      `}
                    >
                      {offer.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`
                        transition-all
                        duration-500
                        leading-[18px]
                        ${
                          isHovered
                            ? "text-[14px] text-[#000000]"
                            : "text-[12px] text-[#11182733] line-clamp-2"
                        }
                      `}
                    >
                      {offer.description}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <button
                    className={`
                      flex
                      items-center
                      gap-6
                      pt-3
                      ml-2
                      font-medium
                      transition-all
                      duration-500
                      ${
                        isHovered
                          ? "text-[#ffbb00]"
                          : "text-[#9CA3AF]"
                      }
                    `}
                  >
                    {offer.button}

                    <ArrowRight size={19} />
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