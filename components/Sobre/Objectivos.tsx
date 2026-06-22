import {
  TrendingUp,
  BadgeCheck,
  Building2,
} from "lucide-react";

export default function Objectivos() {
  const objetivos = [
    {
      icon: TrendingUp,
      title: "Expansão Física e Digital",
      description:
        "Aumentar rapidamente a nossa presença com novas agências em regiões estratégicas. Ao mesmo tempo, reforçamos significativamente as nossas capacidades de banca digital.",
    },
    {
      icon: BadgeCheck,
      title: "Produtos Digitais",
      description:
        "Inovamos continuamente para introduzir novos produtos e serviços financeiros digitais. Eles atendem às necessidades em evolução dos nossos clientes.",
    },
    {
      icon: Building2,
      title: "Apoio a Empreendedores",
      description:
        "Foco especial no apoio a jovens empresários e startups, promovendo o desenvolvimento económico de Moçambique.",
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span className="text-[#F4B400] text-[14px] font-semibold uppercase tracking-[1.5px]">
            NOSSO FOCO
          </span>

          <h2 className="mt-2 text-[36px] leading-[60px] font-bold text-[#182033]">
            Objetivos Estratégicos
          </h2>

          <p className="mt-4 text-[16px] text-[#6B7280]">
            Para realizar a nossa visão e tornar-nos um ator-chave no setor
            financeiro moçambicano
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {objetivos.map((objetivo, index) => {
            const Icon = objetivo.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#F3F4F6]
                  rounded-[16px]
                  w-[384px]
                  h-[314px]
                  pt-7
                  px-7
                  pb-8
                  min-h-[266px]
                "
              >
                {/* Ícone */}
                <div className="w-[64px] h-[64px] rounded-[16px] bg-[#F7941D1A] flex items-center justify-center mb-6">
                  <Icon
                    size={36}
                    className="text-[#F7941D]"
                  />
                </div>

                {/* Título */}
                <h3 className="text-[20px] font-bold text-[#182033] ">
                  {objetivo.title}
                </h3>

                {/* Descrição */}
                <p className="text-[16px] leading-[28px] text-[#6B7280]">
                  {objetivo.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}