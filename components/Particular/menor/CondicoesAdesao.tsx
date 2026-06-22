export default function CondicoesAdesao() {
  const condicoes = [
    {
      titulo: "Ser menor de 18 anos",
      descricao:
        "A conta é exclusiva para crianças e jovens que ainda não atingiram a maioridade.",
    },
    {
      titulo: "Representante legal",
      descricao:
        "Pai, mãe ou tutor com poderes legais para representar o menor.",
    },
    {
      titulo: "Formulários preenchidos",
      descricao:
        "Formulários de abertura de conta preenchidos e aceitação dos Termos e Condições.",
    },
    {
      titulo: "Documentação em vigor",
      descricao:
        "Toda a documentação deve ser válida e atualizada à data de abertura de conta.",
    },
  ];

  const documentos = [
    {
      titulo: "Documento de identificação",
      descricao:
        "BI, Passaporte, DIRE ou outro documento válido (do menor e do representante legal).",
    },
    {
      titulo: "Comprovativo de residência",
      descricao:
        "Declaração do Bairro ou fatura de água / energia em nome do cliente.",
      badge: "Emitido há menos de 90 dias",
    },
    {
      titulo: "Confirmação de rendimentos",
      descricao:
        "Documento que prove o contrato de trabalho, a função e o rendimento mensal líquido do representante legal.",
      badge: "Emitido há menos de 90 dias",
    },
    {
      titulo: "Formulários de abertura",
      descricao:
        "Formulários preenchidos e aceitação dos Termos e Condições do Microbanco Sólido.",
    },
  ];

  return (
    <section className="bg-[#F7F7F8] py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ESQUERDA */}
          <div className=" mt-15 max-w-xl">
            <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4B000]">
              Requisitos
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Condições de adesão
            </h2>

            <div className="mt-8 space-y-6 md:space-y-8">
              {condicoes.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#F4B000]" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.titulo}
                    </h3>

                    <p className="mt-1 text-[14px] leading-6 text-slate-500">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DIREITA */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-5 md:px-6">
              <svg
                className="h-6 w-6 text-[#F4B000] md:h-7 md:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6M9 16h6M9 8h3m-6 12h12a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>

              <p className="text-[14px] font-bold uppercase tracking-wide text-slate-800">
                Documentação Necessária
              </p>
            </div>

            {documentos.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-slate-100 px-5 py-5 md:px-6 last:border-none"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#F4B000] text-[11px] font-bold text-black">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h4 className="text-[14px] font-semibold text-slate-900">
                    {item.titulo}
                  </h4>

                  <p className="mt-1 text-[13px] leading-6 text-slate-500">
                    {item.descricao}
                  </p>

                  {item.badge && (
                    <span className="mt-1 inline-flex rounded-full border border-[#F4B000] bg-[#FFF6DD] px-3 py-1 text-xs font-medium text-[#D38A00]">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}