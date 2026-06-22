export default function SobreContaMenor() {
  return (
    <section className="bg-[#ffffff] py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Conteúdo */}
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4B000]">
              Sobre o produto
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
             O que é a Conta Bancária Sólido?
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
             Uma Conta Bancária é um produto que o cliente do Banco usa para<br/> 
             guardar o seu dinheiro de forma simples e segura. Ele pode colocar <br/> 
             fundos por meio de depósitos ou por meio de transferências.O valor fica <br/> 
              sempre disponível para uso, seja para pagar, receber ou mover o saldo, a  <br/> 
              débito ou a crédito, quando for preciso.
            </p>
          </div>

          {/* Imagem */}
          <div>
            <img
              src="/images/hero-bg.png"
              alt="Conta Sólido Menor"
              className="
                w-full
                rounded-2xl
                object-cover
                h-[250px]
                sm:h-[320px]
                md:h-[380px]
                lg:h-[400px]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}