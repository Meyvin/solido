"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProdutosEmpresas() {
  const produtos = [
    {
      titulo: "Crédito Empresarial",
      descricao:
        "O Microbanco Sólido oferece produtos de crédito variados para atender às necessidades pessoais e profissionais. Aderir ao Crédito com o Sólido Tá Fácil é o compromisso de alcançar a necessidade do cliente.",
      imagem: "/images/card1.png",
      href: "/empresarial/credito",
    },
    {
      titulo: "Leasing Empresarial",
      descricao:
        "O Leasing é um contrato de locação financeira celebrada entre o Sólido (Locador) e o Cliente (Locatário), permitindo a utilização do bem móvel ao longo do prazo do contrato mediante o pagamento de uma renda mensal.",
      imagem: "/images/offer-2.png",
      href: "/empresarial/leasing",
    },
    {
      titulo: "Conta Sólido Empresas",
      descricao:
        "A conta Sólido Empresa permite que as entidades colectivas e entidades equiparadas iniciem a relação comercial com o Banco Sólido por forma a acompanhar o crescimento destas.",
      imagem: "/images/card2.png",
      href: "/empresarial/conta",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F4B000]">
            OS NOSSOS PRODUTOS
          </p>

          <h2 className="mt-3 text-[30px] font-bold text-[#111827] md:text-[36px]">
            Um Microbanco! Várias Soluções
          </h2>

          <p className="mt-4 text-[#6B7280]">
            Conta empresarial, crédito, leasing, tesouraria e muito mais.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-10 overflow-visible md:grid-cols-2 xl:grid-cols-3">
          {produtos.map((produto, index) => (
            <Link
              key={index}
              href={produto.href}
              className="group block"
            >
              <article
                className="
                  h-full
                  rounded-[24px]
                  border
                  border-transparent
                  p-3
                  transition-all
                  duration-500
                  group-hover:scale-[1.04]
                  group-hover:-translate-y-3
                  group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                "
              >
                {/* Imagem */}
                <div className="overflow-hidden rounded-[18px] bg-[#F3F4F6]">
                  <img
                    src={produto.imagem}
                    alt={produto.titulo}
                    className="
                      h-[180px]
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Conteúdo */}
                <div className="mt-6 px-1">
                  <h3
                    className="
                      text-[22px]
                      font-semibold
                      text-[#111827]
                      transition-colors
                      duration-300
                      group-hover:text-[#F4B000]
                    "
                  >
                    {produto.titulo}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-7
                      text-[#6B7280]
                    "
                  >
                    {produto.descricao}
                  </p>

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-[#F4B000]
                      font-medium
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <span>Saber Mais</span>

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}