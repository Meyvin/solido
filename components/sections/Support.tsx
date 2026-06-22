"use client";

import {
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: HelpCircle,
    title: "Dúvidas frequentes",
    description:
      "Encontre respostas rápidas sobre nossos serviços",
    action: "Ver FAQ",
  },
  {
    icon: MapPin,
    title: "Encontre uma agência",
    description:
      "Localize a agência Sólido mais próxima de você",
    action: "Ver agências",
  },
  {
    icon: MessageCircle,
    title: "Fale conosco",
    description:
      "Estamos disponíveis 24h pelo chat ou telefone",
    action: "Iniciar conversa",
  },
];

export default function Support() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12 md:mb-14">
          <p
            className="
              uppercase
              text-[#F5B400]
              text-[12px]
              md:text-[14px]
              mb-4
            "
          >
            ESTAMOS AQUI PARA AJUDAR
          </p>

          <h2
            className="
              text-[30px]
              md:text-[36px]
              leading-[1.05]
              font-bold
              text-[#111827]
            "
          >
            Como podemos ajudar você?
          </h2>
        </div>

        {/* TOP CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            mb-8
          "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-[#FAFAFA]
                  border
                  border-[#EFEFEF]
                  rounded-[16px]
                  p-6
                  md:p-8
                  min-h-[220px]
                  md:min-h-[240px]
                  transition-all
                  duration-300
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  hover:-translate-y-1
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-[64px]
                    h-[64px]
                    rounded-[14px]
                    bg-white
                    border
                    border-[#F2F2F2]
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={24}
                    className="text-[#F5B400]"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[18px]
                    md:text-[20px]
                    font-semibold
                    text-[#111827]
                    mb-4
                    leading-tight
                    transition-colors
                    duration-300
                    group-hover:text-[#F5B400]
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[#4B5563]
                    text-[14px]
                    md:text-[16px]
                    leading-7
                    md:leading-8
                    max-w-full
                    md:max-w-[300px]
                    mb-8
                  "
                >
                  {card.description}
                </p>

                {/* ACTION */}
                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#F5B400]
                    text-[15px]
                    md:text-[16px]
                    font-medium
                    group/button
                  "
                >
                  {card.action}

                  <ArrowRight
                    size={16}
                    className="
                      transition-all
                      duration-300
                      group-hover/button:translate-x-1
                    "
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* CONTACT BAR */}
        <div
          className="
            bg-[#F5B400]
            rounded-[16px]
            min-h-[128px]
            px-4
            sm:px-6
            lg:px-8
            py-6
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-6
          "
        >
          {/* LEFT */}
          <div>
            <h3
              className="
                text-[20px]
                md:text-[20px]
                font-bold
                text-white
                mb-2
                leading-tight
              "
            >
              Prefere falar diretamente?
            </h3>

            <p
              className="
                text-white/90
                text-[15px]
                md:text-[16px]
              "
            >
              Nossa equipe está pronta para atender você
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              w-full
              lg:w-auto
            "
          >
            {/* PHONE */}
            <div
              className="
                bg-[#F8BF1A]
                border
                border-[#FFC933]
                rounded-[14px]
                min-h-[64px]
                px-5
                py-3
                flex
                items-center
                gap-4
                w-full
                sm:min-w-[250px]
              "
            >
              <div
                className="
                  w-[40px]
                  h-[40px]
                  rounded-[10px]
                  bg-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Phone
                  size={18}
                  className="text-[#F5B400]"
                />
              </div>

              <div>
                <p
                  className="
                    text-[12px]
                    text-white/80
                    mb-1
                  "
                >
                  Telefone
                </p>

                <p
                  className="
                    text-white
                    text-[14px]
                    md:text-[16px]
                    font-semibold
                  "
                >
                  +258 84 123 4567
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div
              className="
                bg-[#F8BF1A]
                border
                border-[#FFC933]
                rounded-[14px]
                min-h-[64px]
                px-5
                py-3
                flex
                items-center
                gap-4
                w-full
                sm:min-w-[250px]
              "
            >
              <div
                className="
                  w-[40px]
                  h-[40px]
                  rounded-[10px]
                  bg-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Mail
                  size={18}
                  className="text-[#F5B400]"
                />
              </div>

              <div>
                <p
                  className="
                    text-[12px]
                    text-white/80
                    mb-1
                  "
                >
                  Email
                </p>

                <p
                  className="
                    text-white
                    text-[14px]
                    md:text-[16px]
                    font-semibold
                  "
                >
                  apoio@solido.co.mz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}