export default function SobreSolucoes() {
  return (
    <section className="bg-[#ffffff] py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Conteúdo */}
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4B000]">
              Sobre o produto
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-3xl">
             Um banco que cresce com o seu negócio
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
             O Crédito permitirá ao Microbanco Sólido (Mutuante) disponibilizar <br/>
             dinheiro ao cliente (mutuário) que fica obrigado a devolver esse<br/>
              montante dentro de um prazo acordado, acrescido de encargos com<br/> juros e outros custos associados.<br/>
No Sólido, damos crédito fácil para tornar seus planos reais, seja para<br/> coisas suas ou da empresa. Seja para comprar casa, carro, máquina ou <br/> reforçar o caixa da empresa, temos linhas de crédito que cabem nas <br/> suas necessidades.
            </p>
          </div>

          {/* Imagem */}
          <div>
            <img
              src="/images/card1.png"
              alt="Conta Sólido Menor"
              className="
                w-full
                rounded-2xl
                object-cover
                h-[250px]
                sm:h-[320px]
                md:h-[380px]
                lg:h-[590px]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}