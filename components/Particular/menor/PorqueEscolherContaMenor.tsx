export default function PorqueEscolherContaMenor() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Cabeçalho */}
        <div className="max-w-md">
          <h2 className="text-[32px] font-bold leading-tight text-[#1B2430]">
            Por que escolher a Conta
            <br />
            <span className="text-[#F4B000]">Sólido Menor?</span>
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
            Uma conta pensada para criar hábitos financeiros saudáveis
            desde cedo.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[818px_428px]">
          {/* CARD ESQUERDO */}
          <div className="overflow-hidden rounded-[16px] lg:h-[314px]">
            <div className="grid h-full grid-cols-1 lg:grid-cols-[474px_344px]">
              {/* Conteúdo */}
              <div className="bg-[#F4B000] p-6 md:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                  <svg
                    className="h-5 w-5 text-[#F4B000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-3 0-5 1.5-5 4s2 4 5 4s5-1.5 5-4s-2-4-5-4z"
                    />
                  </svg>
                </div>

                <h3 className="mt-5 text-[18px] font-bold text-white">
                  Poupança segura
                </h3>

                <p className="mt-4 max-w-[340px] text-[14px] leading-7 text-black/80">
                  Guarde poupanças de forma segura para o futuro do seu
                  filho — com o controlo total do representante legal em
                  cada movimento.
                </p>
              </div>

              {/* Foto */}
              <div className="h-[220px] lg:h-[314px]">
                <img
                  src="/images/card2.png"
                  alt="Poupança segura"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CARD DIREITO */}
          <div className="rounded-[16px] bg-[#F4B000] p-8 lg:h-[314px] mr-5">
            <div className="flex h-full flex-col justify-center">
              <div>
                <span className=" text-[64px] font-bold leading-none text-black">
                  30
                </span>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-black/70">
                  Dias — Prazo mínimo
                </p>
              </div>

              <h3 className="mt-8 text-[18px] font-bold text-black">
                Isenção de comissões
              </h3>

              <p className="mt-3 max-w-[260px] text-[14px] leading-6 text-black/80">
                Garante isenção de comissões em aplicações
                a prazo com mais de 30 dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}