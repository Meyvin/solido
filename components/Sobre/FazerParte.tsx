export default function HistoriaSection() {
  return (
    <div className="my-20 bg-white">
     <section
    className="
      relative
      w-full
      h-[520px]
      overflow-hidden
      bg-[#F8BB0E]
    "
  >
      {/* Overlay/Fundo */}
      <div className="absolute inset-0 bg-[#F8BB0E] z-0" />

      {/* Imagem */}
      <img
        src="/images/historia-banner.png"
        alt="Faça parte da nossa história"
        className="
          absolute
          right-0
          top-0
          w-[1000px]
          h-full
          object-cover
          z-[1]
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-8 flex items-center">
        <div className="max-w-[500px]">
          <h2
            className="
              text-white
              text-[36px]
              leading-[60px]
              font-bold
              mb-4
            "
          >
            Faça parte da nossa história
          </h2>

          <p
            className="
              text-white
              text-[18px]
              leading-[20px]
              mb-8
            "
          >
            Abra sua conta hoje e descubra por que mais de
            50 mil moçambicanos confiam no Sólido
          </p>

          <div className="flex items-center gap-4">
            <button
              className="
                h-[52px]
                px-8
                rounded-full
                border
                border-white
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#F8BB0E]
              "
            >
              Abrir conta agora →
            </button>

            <button
              className="
                h-[52px]
                px-8
                rounded-full
                border
                border-white
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#F8BB0E]
              "
            >
              Falar com consultor
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}