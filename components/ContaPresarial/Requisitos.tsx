// components/sections/LeasingRequirements.tsx

"use client";

import {
  Check,
  FileText,
} from "lucide-react";

const requirements = [
  "Ser cliente Sólido com conta ativa",
  "Ser maior de 18 anos",
  "Ter rendimentos comprovados domiciliados no Sólido",
  "Ter os dados pessoais atualizados",
  "Aderir ao seguro de prestações",
  "Apresentar extracto de conta do banco onde aufere salário",
];

const documents = [
  "Bilhete de Identidade válido",
  "Comprovativo de morada",
  "Últimos 3 recibos de vencimento",
  "Extracto bancário dos últimos 3 meses",
  "Declaração de IRS (se aplicável)",
];

export default function Requisitos() {
  return (
    <section className="py-28 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-4">
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[560px_584px]
            justify-between
            gap-16
            items-stretch
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              h-[412px]

              flex
              flex-col
              justify-between
            "
          >
            {/* TOP CONTENT */}
            <div>
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
                REQUISITOS
              </p>

              {/* TITLE */}
              <h2
                className="
                  text-[36px]
                  leading-[1.05]
                  font-bold
                  text-[#111827]
                  mb-8
                "
              >
                Condições de Adesão
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  text-[16px]
                  leading-[34px]
                  text-[#374151]
                  max-w-[520px]
                "
              >
                Para candidatar-se ao Leasing Sólido,
                precisa de cumprir os seguintes
                requisitos:
              </p>
            </div>

            {/* REQUIREMENTS */}
            <div className="flex flex-col gap-5">
              {requirements.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      w-[22px]
                      h-[22px]

                      rounded-full

                      bg-[#F5B400]

                      flex
                      items-center
                      justify-center

                      flex-shrink-0

                      mt-[3px]
                    "
                  >
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="text-white"
                    />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-[16px]
                      leading-[28px]
                      text-[#4B5563]
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              group
              relative
              mt-10
              w-[584px]
              h-[412px]

              rounded-[32px]

              bg-white

              border
              border-[#F3F4F6]

              p-8

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]

              transition-all
              duration-500

              hover:-translate-y-1
              hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                inset-0

                rounded-[32px]

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
              "
            >
              {/* ICON */}
              <div
                className="
                  w-[64px]
                  h-[64px]

                  rounded-[16px]

                  bg-[#F7941D1A]

                  flex
                  items-center
                  justify-center

                  mb-8
                "
              >
                <FileText
                  size={28}
                  className="text-[#F5B400]"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[20px]
                  leading-[1.1]
                  font-bold
                  text-[#111827]

                  mb-8
                "
              >
                Documentação necessária
              </h3>

              {/* DOCUMENTS */}
              <div className="flex flex-col gap-5">
                {documents.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    {/* DOT */}
                    <div
                      className="
                        w-[6px]
                        h-[6px]

                        rounded-full

                        bg-[#FBB400]

                        mt-[11px]

                        flex-shrink-0
                      "
                    />

                    {/* TEXT */}
                    <p
                      className="
                        text-[16px]
                        leading-[28px]
                        text-[#4B5563]
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   