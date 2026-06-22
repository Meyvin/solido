export default function SobreProduto() {
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
             Mais do que um banco, um parceiro de negócio
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
             A conta Sólido Empresa permite que as entidades coletivas e entidades <br/>
             equiparadas iniciem a relação comercial com o Banco Sólido por forma a <br/> 
             acompanhar o crescimento destas, assim como apoiar na apresentação <br/>
             de soluções que se adequem às necessidades do negócio.O cliente<br/>
             Empresa Sólido terá a possibilidade de se relacionar com um Banco que, <br/>
             para além de Produtos e Serviços de qualidade, se apresenta como <br/>
             Consultor de modo a viabilizar oportunidades de negócio, aconselhar ao <br/>
             cliente em como investir olhando para o crescimento da sua marca.
            </p>
          </div>

          {/* Imagem */}
          <div>
            <img
              src="/images/card2.png"
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