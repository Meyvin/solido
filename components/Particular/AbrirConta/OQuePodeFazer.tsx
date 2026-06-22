import {
  ArrowLeftRight,
  WalletCards,
  BadgeDollarSign,
  Smartphone,
} from "lucide-react";

export default function OQuePodeFazer() {
  const funcionalidades = [
    {
      titulo: "Depositar e transferir",
      descricao:
        "Coloque fundos por meio de depósitos ou transferências a qualquer momento.",
      icon: ArrowLeftRight,
    },
    {
      titulo: "Pagar e receber",
      descricao:
        "O saldo fica disponível para pagar, receber ou mover, a débito ou a crédito, quando for preciso.",
      icon: WalletCards,
    },
    {
      titulo: "Domiciliar o salário",
      descricao:
        "Possibilidade de receber o salário diretamente na conta Sólido.",
      icon: BadgeDollarSign,
    },
    {
      titulo: "Aceder digitalmente",
      descricao:
        "Possibilidade de aceder à sua conta através dos canais digitais da Sólido.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="bg-[#ffffff] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4B000]">
            O QUE PODE FAZER
          </p>

          <h2 className="mt-3 text-[32px] font-bold leading-tight text-[#1B2430]">
            Tudo o que a sua conta permite
          </h2>

          <p className="mt-3 text-[15px] text-[#6B7280]">
            É um modo fácil e seguro de gerir o seu dinheiro no dia a dia.
          </p>
        </div>

        {/* Card Principal */}
        <div className="mt-10 overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {funcionalidades.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center px-6 py-8 text-center
                    ${
                      index !== funcionalidades.length - 1
                        ? "border-b border-[#E5E7EB] sm:border-b-0 lg:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Ícone */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF6DD]">
                    <Icon
                      size={22}
                      strokeWidth={2}
                      className="text-[#F4B000]"
                    />
                  </div>

                  {/* Título */}
                  <h3 className="mt-5 text-[14px] font-bold text-[#1B2430]">
                    {item.titulo}
                  </h3>

                  {/* Descrição */}
                  <p className="mt-3 max-w-[220px] text-[13px] leading-6 text-[#6B7280]">
                    {item.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}