export default function NossosProdutos() {
  const produtos = [
    {
      titulo: "Poupança Sólido Mensal",
      descricao:
        "Para quem quer criar uma reserva de dinheiro, mensal ou ocasional.",
      imagem: "/images/card1.png",
    },
    {
      titulo: "Poupança Sólido",
      descricao:
        "Para quem quer segurança e algum ganho extra. Pode usar o mobile ou o ebanking.",
      imagem: "/images/offer-1.png",
    },
    {
      titulo: "Poupança Sólido Menor",
      descricao:
        "Para jovens ou menores que querem começar cedo a investir.",
      imagem: "/images/card2.png",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Cabeçalho */}
        <div className="text-center">
          <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#F4B000]">
            OS NOSSOS PRODUTOS
          </p>

          <h2 className="mt-3 text-[40px] font-bold text-[#1B2430]">
            Escolha a poupança certa para si
          </h2>

          <p className="mt-3 text-[20px]  text-[#6B7280]">
            Para quem são estas contas de poupança?
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Imagem */}
              <div className="overflow-hidden rounded-[12px]">
                <img
                  src={produto.imagem}
                  alt={produto.titulo}
                  className="
                    h-[180px]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Conteúdo */}
              <div className="mt-5">
                <h3
                  className="
                    text-[20px]
                    font-bold
                    text-[#1B2430]
                    transition-colors
                    duration-300
                    group-hover:text-[#F4B000]
                  "
                >
                  {produto.titulo}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#6B7280]">
                  {produto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}