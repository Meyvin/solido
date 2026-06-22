import {
  Zap,
  Shield,
  Globe,
  Users,
} from "lucide-react";

export default function Facil() {
  const features = [
    {
      icon: Zap,
      title: "Tá Fácil",
      description:
        "Processos simples e rápidos. Abra sua conta em 5 minutos.",
    },
    {
      icon: Shield,
      title: "Segurança",
      description:
        "Seus dados e dinheiro protegidos com tecnologia de ponta.",
    },
    {
      icon: Globe,
      title: "Digital",
      description:
        "Faça tudo pelo app, onde e quando quiser.",
    },
    {
      icon: Users,
      title: "Atendimento",
      description:
        "Equipe especializada pronta para ajudar você.",
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center">
          <span className="text-[#F4B400] text-[14px] font-semibold uppercase tracking-[2px]">
            POR QUE ESCOLHER O SÓLIDO?
          </span>

          <h2 className="mt-4 text-[36px] leading-[64px] font-bold text-[#182033]">
            Tá{" "}
            <span className="text-[#F4B400]">
              Fácil
            </span>{" "}
            Encontrar as Melhores Soluções
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[64px] h-[64px] rounded-[16px] bg-[#F8EEDB] flex items-center justify-center mb-6">
                  <Icon
                    size={28}
                    className="text-[#F4B400]"
                  />
                </div>

                <h3 className="text-[20px] font-bold text-[#182033] mb-1">
                  {feature.title}
                </h3>

                <p className="text-[16px] leading-[22px] text-[#6B7280] max-w-[240px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}