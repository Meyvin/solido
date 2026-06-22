import {
  Building2,
  Handshake,
  BarChart3,
  MonitorSmartphone,
} from "lucide-react";

export default function VantagensContaEmpresas() {
  const vantagens = [
    {
      titulo: "Banco como Consultor",
      descricao:
        "Para além de Produtos e Serviços de qualidade, o Sólido apresenta-se como Consultor para viabilizar oportunidades de negócio e aconselhar como investir no crescimento da sua marca.",
      icon: Building2,
    },
    {
      titulo: "Oportunidades de Negócio",
      descricao:
        "Viabilizamos oportunidades e aconselhamos sobre onde investir, olhando para o crescimento da sua marca.",
      icon: Handshake,
    },
    {
      titulo: "Acompanha o seu crescimento",
      descricao:
        "Soluções que se adequam às necessidades do negócio em cada fase.",
      icon: BarChart3,
    },
    {
      titulo: "Acesso Digital",
      descricao:
        "Ebanking e Mobile Banking para gerir a conta da sua empresa onde estiver.",
      icon: MonitorSmartphone,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4B000]">
            VANTAGENS
          </p>

          <h2 className="mt-4 text-[34px] font-bold leading-tight text-[#111827] md:text-[42px]">
            Porque escolher a Conta Sólido
            <br />
            Empresas
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {vantagens.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  rounded-[20px]
                  border
                  border-[#EEF2F7]
                  bg-white
                  p-6
                  md:p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {/* Ícone */}
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    items-center
                    justify-center
                    rounded-[12px]
                    bg-[#FFF8EE]
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#F4B000]"
                  />
                </div>

                {/* Título */}
                <h3 className="mt-6 text-[24px] font-semibold text-[#111827]">
                  {item.titulo}
                </h3>

                {/* Texto */}
                <p className="mt-5 text-[15px] leading-8 text-[#6B7280]">
                  {item.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}