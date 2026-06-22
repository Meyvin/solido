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
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    title: "Particulares",
    links: [
      {
        label: "Abrir Conta Bancária",
        icon: Landmark,
        href: "/particulares/conta",
      },
      {
        label: "Conta Sólido Menor",
        icon: CreditCard,
        href: "/particulares/menor",
      },
      {
        label: "Conta Bancária Sólido",
        icon: CreditCard,
        href: "/particulares/cartoes",
      },
      {
        label: "Poupança",
        icon: PiggyBank,
        href: "/particulares/poupanca",
      },
      {
        label: "Transferências",
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
        icon: Landmark,
        href: "/empresarial/abrirconsta",
      },
      {
        label: "Crédito Empresarial",
        icon: CreditCard,
        href: "/empresarial/conta",
      },
      {
        label: "Soluções Empresariais",
        icon: ArrowUpRight,
        href: "/empresarial/solucoes",
      },
      {
        label: "POS",
        icon: CreditCard,
        href: "/empresarial/pos",
      },
      {
        label: "Internet Banking",
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
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
            ? "bg-[#111827]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] py-4"
            : "bg-transparent py-6"
        }
      `}
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-6
          lg:px-10
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
            className="
              w-[60px]
              sm:w-[70px]
              lg:w-[80px]
              h-auto
            "
          />
        </Link>

        {/* MENU DESKTOP */}
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
                className="relative group"
              >
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
                        {item.links.map(
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

        {/* BOTÕES + MOBILE */}
        <div className="flex items-center gap-3">
          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-4">
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
              "
            >
              <Lock size={16} />
              Entrar
            </button>

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
              "
            >
              E-Banking
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="
              lg:hidden
              text-white
              p-2
            "
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div
          className="
            lg:hidden
            bg-[#111827]
            border-t
            border-white/10
            shadow-xl
          "
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {menuItems.map(
              (item, index) => (
                <div key={index}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() =>
                        setMobileMenuOpen(
                          false
                        )
                      }
                      className="
                        block
                        text-white
                        text-lg
                        font-medium
                        py-2
                      "
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <h3
                        className="
                          text-[#F5B400]
                          font-semibold
                          mb-2
                        "
                      >
                        {item.title}
                      </h3>

                      <div className="flex flex-col gap-2 ml-3">
                        {item.links?.map(
                          (link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() =>
                                setMobileMenuOpen(
                                  false
                                )
                              }
                              className="
                                text-white/80
                                text-sm
                              "
                            >
                              {link.label}
                            </Link>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            )}

            <div className="flex flex-col gap-3 pt-4">
              <button
                className="
                  h-12
                  rounded-full
                  border
                  border-white
                  text-white
                "
              >
                Entrar
              </button>

              <button
                className="
                  h-12
                  rounded-full
                  bg-[#F5B400]
                  text-white
                  font-semibold
                "
              >
                E-Banking
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}