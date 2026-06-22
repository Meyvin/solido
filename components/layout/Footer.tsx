"use client";

import Image from "next/image";
import Link from "next/link";

import { Globe } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Para você",
    links: [
      { label: "Particulares", href: "/particulares" },
      { label: "Empresas", href: "/empresas" },
      { label: "Jovens", href: "/jovens" },
      { label: "Imigrantes", href: "/imigrantes" },
    ],
  },

  {
    title: "Serviços",
    links: [
      { label: "Contas", href: "/contas" },
      { label: "Créditos", href: "/creditos" },
      { label: "Cartões", href: "/cartoes" },
      { label: "Seguros", href: "/seguros" },
    ],
  },

  {
    title: "Informações",
    links: [
      { label: "Preçário", href: "/precario" },
      { label: "Privacidade", href: "/privacidade" },
      { label: "Termos", href: "/termos" },
      { label: "Reclamações", href: "/reclamacoes" },
    ],
  },

  {
    title: "Ajuda",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contactos", href: "/contactos" },
      { label: "Agências", href: "/agencias" },
      { label: "App Sólido", href: "/app-solido" },
    ],
  },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/solido.tafacil/?_rdc=1&_rdr#",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/microbanco_solido/",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/solidotafacil",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-black
        text-white
        pt-20
        pb-10
        overflow-hidden
      "
    >
      <div className="w-full max-w-[1440px] mx-auto px-8">
        {/* TOPO */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-16
            mb-16
          "
        >
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Sólido"
              width={150}
              height={70}
              priority
              className="object-contain"
            />
          </div>

          {/* MENUS */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-x-20
              gap-y-12
            "
          >
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    mb-6
                  "
                >
                  {section.title}
                </h3>

                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          text-[#8B8B8B]
                          text-[16px]
                          transition-all
                          duration-300
                          hover:text-white
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* LINHA */}
        <div className="border-t border-white/10" />

        {/* CENTRO */}
        <div
          className="
            py-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          {/* IDIOMA */}
          <div className="flex items-center gap-4">
            <Globe
              size={20}
              className="text-white"
            />

            <div
              className="
                h-[42px]
                rounded-full
                bg-[#111827]
                border
                border-white/10
                flex
                items-center
                overflow-hidden
              "
            >
              <button
                className="
                  w-[50px]
                  h-full
                  bg-[#1F2937]
                  text-white
                  text-[14px]
                  font-medium
                "
              >
                PT
              </button>

              <div className="w-px h-4 bg-white/10" />

              <button
                className="
                  w-[50px]
                  h-full
                  text-[#8B8B8B]
                  text-[14px]
                  font-medium
                "
              >
                EN
              </button>
            </div>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-[50px]
                    h-[50px]
                    rounded-full
                    bg-[#111827]
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-[#F5B400]
                    hover:border-[#F5B400]
                    hover:scale-105
                  "
                >
                  <Icon className="text-[18px]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* LINHA */}
        <div className="border-t border-white/10 mb-8" />

        {/* RODAPÉ */}
        <div className="text-center">
          <p
            className="
              text-[#6B7280]
              text-[16px]
              mb-2
            "
          >
            © 2026 Microbanco Sólido, S.A.
            Todos os direitos reservados.
          </p>

          <p
            className="
              text-[#4B5563]
              text-[14px]
            "
          >
            Registado no Banco de Moçambique sob o n°. 33
          </p>
        </div>
      </div>
    </footer>
  );
}