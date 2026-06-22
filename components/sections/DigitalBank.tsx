// components/sections/DigitalBank.tsx

"use client";

import Image from "next/image";

export default function DigitalBank() {
  return (
    <section className="py-24 bg-[#ffffff] overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-8">
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
            SOLUÇÕES DIGITAIS
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
            O Teu Microbanco Digital
          </h2>
        </div>

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[570px_776px]
            gap-8
            items-start
            justify-center
          "
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* CARD 1 */}
            <div
              className="
                group
                relative
                w-full
                h-[425px]
                rounded-[20px]
                border-[2px]
                border-[#E5E5E5]
                bg-[#FCFCFC]
                overflow-hidden
                px-[48px]
                pt-[48px]
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
                  bg-[radial-gradient(circle_at_top_right,rgba(245,180,0,0.12),transparent_45%)]
                  pointer-events-none
                "
              />

              {/* TITLE */}
              <h3
                className="
                  relative
                  z-10
                  text-[29px]
                  leading-[1.2]
                  font-bold
                  text-[#111827]
                  transition-colors
                  duration-500
                  group-hover:text-[#F5B400]
                  mb-6
                "
              >
                <span className="text-[#F5B400]">
                  Enviar & Receber
                </span>{" "}
                Dinheiro
              </h3>

              {/* TEXT */}
              <p
                className="
                  relative
                  z-10
                  text-[16px]
                  leading-[22px]
                  my-6
                  text-[#6B7280]
                  max-w-[430px]
                "
              >
                Transfira e receba dinheiro de forma rápida,
                segura e sem complicações
              </p>

              {/* IMAGE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  w-[450px]
                  h-[200px]
                "
              >
                <Image
                  src="/images/Bento.png"
                  alt="Pagamentos"
                  fill
                  className="
                    object-contain
                    transition-all
                    duration-700
                    group-hover:scale-105
                    group-hover:-translate-y-2
                  "
                />
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                group
                relative
                w-full
                h-[425px]
                rounded-[20px]
                border-[2px]
                border-[#E5E5E5]
                bg-[#FCFCFC]
                overflow-hidden
                px-[48px]
                pt-[10px]
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
                  bg-[radial-gradient(circle_at_top_right,rgba(245,180,0,0.12),transparent_45%)]
                  pointer-events-none
                "
              />

              {/* IMAGE */}
              <div
                className="
                  relative
                  w-[400px]
                  h-[250px]
                  mx-auto
                  mb-6
                "
              >
                <Image
                  src="/images/digital-2.png"
                  alt="Multimoedas"
                  fill
                  className="
                    object-contain
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative
                  z-10
                  text-[29px]
                  leading-[1.2]
                  font-bold
                  text-[#111827]
                  transition-colors
                  duration-500
                  group-hover:text-[#F5B400]
                  mb-6
                "
              >
                <span className="text-[#F5B400]">
                  Uma Conta!
                </span>{" "}
                Várias Moedas
              </h3>

              {/* TEXT */}
              <p
                className="
                  relative
                  z-10
                  text-[18.9px]
                  leading-[22px]
                  text-[#6B7280]
                  max-w-[430px]
                "
              >
                Gerencie diferentes moedas numa única conta
                de forma simples e segura.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* CARD 3 */}
            <div
              className="
                group
                relative
                w-full
                h-[425px]
                rounded-[20px]
                border-[2px]
                border-[#E5E5E5]
                bg-[#FCFCFC]
                overflow-hidden
                px-[55px]
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
                  bg-[radial-gradient(circle_at_top_right,rgba(245,180,0,0.12),transparent_45%)]
                  pointer-events-none
                "
              />

              {/* IMAGE */}
              <div
                className="
                  relative
                  w-[600px]
                  h-[300px]
                  mx-auto
                  mb-1
                "
              >
                <Image
                  src="/images/Cartoes.png"
                  alt="Cartões"
                  fill
                  className="
                    object-contain
                    translate-y-[24px]
                    transition-all
                    duration-700
                    group-hover:scale-105
                    group-hover:-translate-y-2
                  "
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative
                  z-10
                  text-[29px]
                  leading-[1.2]
                  font-bold
                  text-[#111827]
                  transition-colors
                  duration-500
                  group-hover:text-[#F5B400]
                  mb-1
                  my-1
                "
              >
                Cartões{" "}
                <span className="text-[#F5B400]">
                  Contactless
                </span>
              </h3>

              {/* TEXT */}
              <p
                className="
                  relative
                  z-10
                  text-[18.9px]
                  leading-[20px]
                  text-[#6B7280]
                  max-w-[700.57px]
                  my-5
                "
              >
                Tenha cartões práticos para pagar,
                transferir e gerir o seu dinheiro num só
                lugar.
              </p>
            </div>

            {/* CARD 4 */}
            <div
              className="
                group
                relative
                w-full
                h-[425px]
                rounded-[20px]
                overflow-hidden
                bg-[#F5B400]
                px-[48px]
                pt-[64px]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(245,180,0,0.35)]
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
                  bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]
                  pointer-events-none
                "
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* TITLE */}
                <h3
                  className="
                    text-[29px]
                    leading-[1.2]
                    font-bold
                    text-white
                    mb-6
                  "
                >
                  Baixe agora e descubra
                </h3>

                {/* TEXT */}
                <p
                  className="
                    text-[18.9px]
                    leading-[22px]
                    text-white/90
                    max-w-[380px]
                    mb-10
                  "
                >
                  Baixe o app e experimente uma nova
                  forma de enviar, receber e controlar
                  o seu dinheiro.
                </p>

                {/* STORES */}
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/google-play.png"
                    alt="Google Play"
                    width={160}
                    height={52}
                    className="
                      object-contain
                      transition-all
                      duration-500
                      hover:scale-105
                    "
                  />

                  <Image
                    src="/images/app-store.png"
                    alt="App Store"
                    width={160}
                    height={52}
                    className="
                      object-contain
                      transition-all
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* PHONE IMAGE */}
              <div
                className="
                  absolute
                  right-[-20px]
                  bottom-[-20px]
                  w-[568px]
                  h-[520px]
                "
              >
                <Image
                  src="/images/Telefone.png"
                  alt="Telefone"
                  fill
                  className="
                    object-contain
                    translate-y-[56px]
                    transition-all
                    duration-700
                    group-hover:scale-[1.03]
                    group-hover:-translate-y-3
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}