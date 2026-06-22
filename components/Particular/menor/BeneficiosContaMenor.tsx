export default function BeneficiosContaMenor() {
  return (
    <section className="bg-[#ffffff] py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[474px_800px] lg:justify-center">
          
          {/* CARD 1 */}
          <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white lg:h-[493px]">
            
            {/* Conteúdo */}
            <div className="p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4B000]">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7l4-4m0 0l4 4m-4-4v18M16 17l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-[25.69px] font-bold text-[#1B2430]">
                Transacções{" "}
                <span className="text-[#F4B000]">simples</span>
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-[#5F6573]">
                Realize operações básicas em segurança,
                com controlo do representante legal
                sempre activo.
              </p>
            </div>

            {/* Imagem */}
            <div className="h-[260px] lg:h-[260px]">
              <img
                src="/images/offer-2.png"
                alt="Transacções simples"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white lg:h-[493px]">
            <div className="grid h-full grid-cols-1 lg:grid-cols-[430px_370px]">

              {/* Texto */}
              <div className="flex items-center p-8 md:p-10">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4B000]">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7l4-4m0 0l4 4m-4-4v18M16 17l-4 4m0 0l-4-4m4 4V3"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-[25.69px] font-bold text-[#1B2430]">
                    Gestão familiar{" "}
                    <span className="text-[#F4B000]">total</span>
                  </h3>

                  <p className="mt-4 max-w-[300px] text-[14px] leading-7 text-[#5F6573]">
                    Até atingir a maioridade, ou até <br/> 
                    ser emancipado,
                    a conta deve ser usada <br/>  apenas pelo representante
                    legal — pai, mãe <br/> ou tutor com pleno controlo sobre
                    todos os <br/>  movimentos.
                  </p>
                </div>
              </div>

              {/* Imagem */}
              <div className="h-[260px] lg:h-full">
                <img
                  src="/images/offer-1.png"
                  alt="Gestão familiar total"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}