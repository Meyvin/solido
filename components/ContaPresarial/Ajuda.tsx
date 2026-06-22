// components/sections/BusinessHelp.tsx

"use client";

import {
  ArrowRight,
  Phone,
} from "lucide-react";

export default function BusinessHelp() {
  return (
    <section className="py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-4 flex justify-center">
        {/* CARD */}
        <div
          className="
            group
            relative

            w-[832px]
            h-[292px]

            rounded-[32px]

            overflow-hidden

            bg-[linear-gradient(90deg,#09142D_0%,#07122B_100%)]

            px-[48px]
            py-[48px]

            flex
            items-center
            justify-between

            transition-all
            duration-500

            hover:-translate-y-1
            hover:shadow-[0_25px_80px_rgba(0,0,0,0.18)]
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
            "
          />

          {/* LEFT SIDE */}
          <div
            className="
              relative
              z-10

              max-w-[420px]

              h-full

              flex
              flex-col
              justify-between
            "
          >
            {/* TOP */}
            <div>
              {/* TITLE */}
              <h2
                className="
                  text-[30px]
                  leading-[1.05]
                  font-bold
                  text-white

                  mb-6
                "
              >
                Precisa de ajuda?
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  text-[16px]
                  leading-[24px]
                  text-white/65

                  max-w-[360px]
                "
              >
                Nossos gestores comerciais estão
                prontos para ajudar a encontrar a
                melhor solução para o seu negócio.
              </p>
            </div>

            {/* CONTACT */}
            <div
              className="
                flex
                items-center
                gap-5
              "
            >
              {/* ICON */}
              <div
                className="
                  w-[48px]
                  h-[48px]

                  rounded-full

                  bg-[#F5B400]

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-500

                  group-hover:scale-110
                "
              >
                <Phone
                  size={22}
                  className="text-white"
                />
              </div>

              {/* PHONE INFO */}
              <div>
                <p
                  className="
                    text-[14px]
                    text-white/50

                    mb-1
                  "
                >
                  Ligue para
                </p>

                <p
                  className="
                    text-[16px]
                    font-bold
                    tracking-[0.5px]
                    text-white
                  "
                >
                  +258 84 123 4567
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative z-10">
            <button
              className="
                group/button

                h-[60px]
                px-8

                rounded-full

                bg-[#FBB400]

                flex
                items-center
                justify-center
                gap-3

                text-white
                text-[14px]
                font-semibold

                transition-all
                duration-500

                hover:scale-[1.03]
                hover:bg-[#ffbf1f]
                hover:shadow-[0_15px_40px_rgba(245,180,0,0.35)]
              "
            >
              Falar com gestor

              <ArrowRight
                size={18}
                className="
                  transition-all
                  duration-300

                  group-hover/button:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}