// components/sections/LeasingDetails.tsx

"use client";

const financingDetails = [
  {
    label: "Prazo",
    value: "12 a 72 Meses",
  },

  {
    label: "Montante máximo",
    value: "Até 90% do valor do bem",
  },

  {
    label: "Comparticipação",
    value: "Mín. 10% - Máx. 50%",
  },

  {
    label: "Valor residual",
    value: "Mín. 2% - Máx. 10%",
  },
];

export default function Produto() {
  return (
    <section className="py-28 bg-[#ffffff] overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-4">
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1fr_520px]
            items-start
            gap-20
          "
        >
          {/* LEFT SIDE */}
          <div className="max-w-[580px]">
            {/* TAG */}
            <p
              className="
                uppercase
                tracking-[3px]
                text-[#FBB400]
                text-[14px]
                font-semibold
                mb-5
              "
            >
              O PRODUTO
            </p>

            {/* TITLE */}
            <h2
              className="
                text-[36px]
                leading-[1.05]
                font-bold
                text-[#111827]
                mb-10
              "
            >
              O que é o Leasing Sólido?
            </h2>

            {/* TEXT CONTENT */}
            <div className="space-y-8">
              <p
                className="
                  text-[18px]
                  leading-[36px]
                  text-[#4B5563]
                "
              >
                O Leasing é um contrato de locação financeira
                celebrado entre o Sólido (Locador) e o Cliente
                (Locatário), permitindo a utilização do bem
                móvel ao longo do prazo do contrato mediante o
                pagamento de uma renda mensal.
              </p>

              <p
                className="
                  text-[18px]
                  leading-[36px]
                  text-[#6B7280]
                "
              >
                Ao fim do período, terá a opção de adquirir a
                viatura por um valor previamente acordado,
                designado por valor residual. É a solução ideal
                para empresas que precisam de viaturas ou
                equipamentos sem comprometer o capital de giro.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              group
              relative

              w-full
              max-w-[520px]

              rounded-[32px]

              bg-[#FFFBEF]

              px-10
              py-10

              transition-all
              duration-500

              hover:-translate-y-1
              hover:shadow-[0_25px_80px_rgba(245,180,0,0.12)]
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-[32px]

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-700

                bg-[radial-gradient(circle_at_top_right,rgba(245,180,0,0.12),transparent_60%)]
              "
            />

            {/* CARD CONTENT */}
            <div className="relative z-10">
              {/* CARD TITLE */}
              <h3
                className="
                  text-[20px]
                  font-bold
                  text-[#FBB400]
                  mb-10
                "
              >
                Detalhes do financiamento
              </h3>

              {/* DETAILS */}
              <div className="flex flex-col">
                {financingDetails.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex
                      items-center
                      justify-between

                      py-6
                    `}
                  >
                    {/* LABEL */}
                    <p
                      className="
                        text-[16px]
                        text-[#FBB400]
                      "
                    >
                      {item.label}
                    </p>

                    {/* VALUE */}
                    <p
                      className="
                        text-[16px]
                        font-semibold
                        text-[#FBB400]
                        text-right
                        max-w-[220px]
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}