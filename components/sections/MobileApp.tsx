// components/sections/MobileApp.tsx

"use client";

import Image from "next/image";

const features = [
  "Transferências instantâneas",
  "Pagamentos de serviços",
  "Consulta de saldo 24h",
  "Cartão virtual",
];

export default function MobileApp() {
  return (
    <section className="py-24 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <div
          className="
            flex
            flex-col
            xl:flex-row
            items-center
            justify-between
            gap-10
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              group
              relative
              w-full
              max-w-[520px]
              transition-all
              duration-700
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
                bg-[radial-gradient(circle_at_top_left,rgba(245,180,0,0.10),transparent_40%)]
                pointer-events-none
              "
            />

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
              BAIXE O APP
            </p>

            {/* TITLE */}
            <h2
              className="
                text-[36px]
                leading-[1.1]
                font-bold
                text-[#111827]
                mb-6
                transition-all
                duration-500
                group-hover:text-[#F5B400]
              "
            >
              Seu banco sempre com você
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-[16px]
                leading-8
                text-[#6B7280]
                max-w-[500px]
                mb-10
                transition-all
                duration-500
                group-hover:text-[#4B5563]
              "
            >
              Faça tudo pelo celular:
              transferências, pagamentos,
              consultas e muito mais.
              <br />
              É rápido, seguro e Tá Fácil de usar.
            </p>

            {/* FEATURES */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-y-5
                gap-x-10
                mb-12
              "
            >
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    transition-all
                    duration-500
                    hover:translate-x-2
                  "
                >
                  {/* DOT */}
                  <div
                    className="
                      w-[6px]
                      h-[6px]
                      rounded-full
                      bg-[#F5B400]
                      transition-all
                      duration-500
                      group-hover:scale-125
                    "
                  />

                  {/* TEXT */}
                  <p
                    className="
                      text-[14px]
                      text-[#F5B400]
                      font-medium
                      transition-all
                      duration-500
                      hover:text-[#111827]
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* STORES */}
            <div
              className="
                flex
                items-center
                gap-8
                mt-2
              "
            >
              {/* GOOGLE PLAY */}
              <button
                className="
                  group/store
                  relative
                  w-[205px]
                  h-[68px]
                  rounded-[16px]
                  bg-transparent
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                "
              >
                {/* BUTTON GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover/store:opacity-100
                    transition-all
                    duration-700
                    bg-[radial-gradient(circle,rgba(245,180,0,0.15),transparent_60%)]
                  "
                />

                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={205}
                  height={68}
                  className="
                    relative
                    z-10
                    object-contain
                    transition-all
                    duration-500
                    group-hover/store:scale-105
                  "
                />
              </button>

              {/* APP STORE */}
              <button
                className="
                  group/store2
                  relative
                  w-[205px]
                  h-[68px]
                  rounded-[16px]
                  bg-transparent
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                "
              >
                {/* BUTTON GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover/store2:opacity-100
                    transition-all
                    duration-700
                    bg-[radial-gradient(circle,rgba(245,180,0,0.15),transparent_60%)]
                  "
                />

                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={205}
                  height={68}
                  className="
                    relative
                    z-10
                    object-contain
                    transition-all
                    duration-500
                    group-hover/store2:scale-105
                  "
                />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              group
              relative
              w-full
              max-w-[628px]
              h-[649px]
              flex
              items-center
              justify-center
              flex-shrink-0
              transition-all
              duration-700
              hover:scale-[1.02]
            "
          >
            {/* BACKGROUND GLOW */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                bg-[radial-gradient(circle_at_center,rgba(245,180,0,0.12),transparent_60%)]
                blur-3xl
              "
            />

            {/* PHONE */}
            <Image
              src="/images/mobile-app.png"
              alt="Mobile App"
              fill
              priority
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
      </div>
    </section>
  );
}