// components/sections/Hero.tsx

"use client";

import { useState, useEffect } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Wallet,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/hero-bg.png",
    subtitle: "CONTA DIGITAL SÓLIDO",

    title: "A Solução Financeira\nà Tua Medida",

    description:
      "Trazendo soluções digitais num click. Abra conta online, aceda a crédito pessoal e empresarial, poupança segura e pagamentos móveis. Tá Fácil!",
  },

  {
    image: "/images/hero-bg-2.png",
    subtitle: "CONTA DIGITAL SÓLIDO",

    title: "Um Microbanco\nDigital Feito para Ti",

    description:
      "Somos o Microbanco Sólido, uma instituição financeira tipicamente moçambicana. Diferenciamo-nos pelo compromisso de oferecer produtos e serviços de qualidade e inovadores.",
  },

  {
    image: "/images/hero-bg-2.png",
    subtitle: "CONTA DIGITAL SÓLIDO",

    title: "Crédito Empresarial\ncom Leasing Flexível",

    description:
      "Financie viaturas, equipamentos e bens para o seu negócio com condições especiais e prazos flexíveis.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  /* AUTO PLAY */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );
  };

  return (
    <section
      className="
        relative
        w-full
        h-[800px]
        overflow-hidden
      "
    >
      {/* BACKGROUND CAROUSEL */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url('${slides[current].image}')`,
          }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-20
          max-w-[1360px]
          mx-auto
          px-8
          h-full
          flex
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-[680px]">
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* SUBTITLE */}
            <p
              className="
                uppercase
                tracking-[4px]
                text-[14px]
                font-semibold
                text-white
                mb-6
              "
            >
              {slides[current].subtitle}
            </p>

            {/* TITLE */}
            <h1
              className="
                text-[72px]
                leading-[0.95]
                font-bold
                text-white
                whitespace-pre-line
                mb-8
              "
            >
              {slides[current].title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-[18px]
                leading-[44px]
                text-white
                max-w-[640px]
                mb-10
              "
            >
              {slides[current].description}
            </p>

            {/* BUTTON */}
            <button
              className="
                h-[64px]
                px-8
                rounded-[16px]
                bg-white
                text-[#F5B400]
                text-[18px]
                font-semibold
                flex
                items-center
                gap-4
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-xl
              "
            >
              Abrir conta agora

              <Wallet size={22} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-8
          top-1/2
          -translate-y-1/2
          z-30
          w-[52px]
          h-[52px]
          rounded-full
          bg-white/20
          backdrop-blur-md
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-300
          hover:bg-white/30
        "
      >
        <ArrowLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-8
          top-1/2
          -translate-y-1/2
          z-30
          w-[52px]
          h-[52px]
          rounded-full
          bg-white/20
          backdrop-blur-md
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-300
          hover:bg-white/30
        "
      >
        <ArrowRight size={22} />
      </button>

      {/* INDICATORS */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-30
          flex
          items-center
          gap-3
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              transition-all
              duration-300
              ${
                current === index
                  ? "w-[32px] h-[6px] rounded-full bg-white"
                  : "w-[8px] h-[8px] rounded-full bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}