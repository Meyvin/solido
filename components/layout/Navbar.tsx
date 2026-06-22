// components/layout/Navbar.tsx

"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  ChevronDown,
  Lock,
  CreditCard,
  PiggyBank,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const menuItems = [
  {
    title: "Particulares",
    links: [
      {
        label: "Abrir Conta Bancária",
        desc: "Abra a sua conta em poucos minutos",
        icon: Landmark,
        href: "/particulares/conta",
      },
      {
        label: "Conta Sólido Menor",
        desc: "Soluções para menores de idade",
        icon: CreditCard,
        href: "/particulares/menor",
      },
      {
        label: "Conta Bancária Sólido",
        desc: "Conta à ordem para o dia a dia",
        icon: CreditCard,
        href: "/particulares/cartoes",
      },
      {
        label: "Poupança",
        desc: "Faça crescer o seu dinheiro",
        icon: PiggyBank,
        href: "/particulares/poupanca",
      },
      {
        label: "Transferências",
        desc: "Envie dinheiro com segurança",
        icon: ArrowUpRight,
        href: "/particulares/transferencias",
      },
    ],
  },

  {
    title: "Empresas",
    links: [
      {
        label: "Conta Empresarial",
        desc: "Gestão financeira para empresas",
        icon: Landmark,
        href: "/empresarial/abrirconsta",
      },
      {
        label: "Crédito Empresarial",
        desc: "Soluções de financiamento",
        icon: CreditCard,
        href: "/empresarial/conta",
      },
      {
        label: "Soluções Empresariais",
        desc: "Serviços financeiros para apoiar a gestão e o crescimento da sua empresa.",
        icon: ArrowUpRight,
        href: "/empresarial/solucoes",
      },
      {
        label: "POS",
        desc: "Receba pagamentos facilmente",
        icon: CreditCard,
        href: "/empresarial/pos",
      },
      {
        label: "Internet Banking",
        desc: "Controle a empresa online",
        icon: PiggyBank,
        href: "/empresarial/internet-banking",
      },
    ],
  },

  {
    title: "Sobre Nós",
    href: "/sobre",
  },

  {
    title: "Contacto",
    href: "/contacto",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500

        ${
          scrolled
            ? "bg-[#111827]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] py-4"
            : "bg-transparent py-6"
        }
      `}
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-10
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={60}
            priority
          />
        </Link>

        {/* MENUS */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
            text-white
            relative
          "
        >
          {menuItems.map((item, index) => {
            const hasDropdown = !!item.links;

            return (
              <div
                key={index}
                className="
                  relative
                  group
                "
              >
                {/* MENU BUTTON */}
                <Link
                  href={item.href || "#"}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[16px]
                    font-medium
                    hover:text-[#F5B400]
                    transition-all
                    duration-300
                  "
                >
                  {item.title}

                  {hasDropdown && (
                    <ChevronDown
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                      "
                    />
                  )}
                </Link>

                {/* DROPDOWN */}
                {hasDropdown && (
                  <div
                    className="
                      absolute
                      top-[45px]
                      left-1/2
                      -translate-x-1/2
                      opacity-0
                      invisible
                      translate-y-3
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                      pt-4
                    "
                  >
                    <div
                      className="
                        bg-white
                        rounded-[20px]
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                        min-w-[260px]
                        p-6
                        border
                        border-[#F3F4F6]
                      "
                    >
                      <div className="flex flex-col gap-4">
                        {item.links?.map(
                          (link, idx) => (
                            <Link
                              key={idx}
                              href={link.href}
                              className="
                                text-[#111827]
                                text-[15px]
                                font-medium
                                hover:text-[#F5B400]
                                hover:translate-x-1
                                transition-all
                                duration-300
                              "
                            >
                              {link.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* BUTTONS */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          {/* LOGIN */}
          <button
            className="
              h-[52px]
              px-7
              rounded-full
              border
              border-white
              flex
              items-center
              gap-3
              text-white
              text-[16px]
              font-medium
              transition-all
              duration-300

              hover:bg-white
              hover:text-[#111827]
              hover:scale-[1.03]
            "
          >
            <Lock size={16} />

            Entrar
          </button>

          {/* OPEN ACCOUNT */}
          <button
            className="
              h-[52px]
              px-8
              rounded-full
              bg-[#F5B400]
              flex
              items-center
              justify-center
              text-white
              text-[16px]
              font-semibold
              transition-all
              duration-300

              hover:bg-[#e0a800]
              hover:scale-[1.03]
              hover:shadow-[0_10px_30px_rgba(245,180,0,0.35)]
            "
          >
            E-Banking
          </button>
        </div>
      </div>
    </header>
  );
}