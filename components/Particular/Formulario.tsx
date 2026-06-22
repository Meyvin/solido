"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip } from "lucide-react";

export function Formulario() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mb-10 md:mb-14 text-center">
          <span className="text-[#F4B400] text-xs md:text-[14px] font-semibold uppercase tracking-widest">
            Microbanco Sólido
          </span>

          <h2 className="mt-6 md:mt-10 text-3xl md:text-[36px] font-bold text-slate-900 leading-tight">
            O Primeiro passo para ter
            <br className="hidden md:block" />
            a Tua Conta
          </h2>

          <p className="mt-6 md:mt-10 max-w-2xl mx-auto text-gray-600 text-sm md:text-[18px] leading-relaxed">
            Preencha o formulário e dê o primeiro passo para ter a sua conta
            Sólido. Para fechar o processo de abertura, o Microbanco Sólido vai
            entrar em contacto.
          </p>
        </div>

        {/* Formulário */}
        <form className="space-y-8 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Nome */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Nome <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                placeholder="O seu nome"
                className="h-11 md:h-12"
              />
            </div>

            {/* Rendimento */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Rendimento Líquido Mensal{" "}
                <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                placeholder="Ex: 25.000 MZN"
                className="h-11 md:h-12"
              />
            </div>

            {/* Documento */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Documento de Identificação (BI, Passaporte ou DIRE)
                <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                placeholder="Número do Documento"
                className="h-11 md:h-12"
              />
            </div>

            {/* Morada */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Morada (Nr. da Casa, Avenida, Rua, Bairro)
                <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                placeholder="A Sua Morada Completa"
                className="h-11 md:h-12"
              />
            </div>

            {/* Profissão */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Profissão <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                placeholder="A sua Profissão"
                className="h-11 md:h-12"
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Número de Telefone <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                placeholder="+258 XX XXX XXXX"
                className="h-11 md:h-12"
              />
            </div>

            {/* NUIT */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Número de NUIT <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                placeholder="Número do NUIT"
                className="h-11 md:h-12"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm md:text-[16px] font-semibold">
                Email <span className="text-[#F4B400]">*</span>
              </label>
              <Input
                type="email"
                placeholder="O Seu Email"
                className="h-11 md:h-12"
              />
            </div>
          </div>

          {/* Upload */}
          <div>
            <label className="mb-2 block text-sm md:text-[16px] font-semibold">
              Declaração de rendimentos ou comprovativo de salário
              <span className="text-[#F4B400]">*</span>
            </label>

            <label
              htmlFor="document"
              className="mt-4 md:mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4 md:p-5 cursor-pointer hover:bg-gray-50 transition"
            >
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[5px] bg-[#FFFFFFCC] border border-[#1118271A]">
                <Paperclip className="h-6 w-6 text-[#F4B400]" />
              </div>

              <div>
                <p className="font-bold text-sm">
                  Adicionar Documento
                </p>

                <p className="text-sm text-gray-500">
                  PDF, JPG ou PNG - 100mb max
                </p>
              </div>

              <input
                id="document"
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </label>
          </div>

          {/* Botão */}
          <Button
            type="submit"
            className="w-full h-12 md:h-14 bg-[#FBB400] hover:bg-[#e3a800] text-black font-semibold rounded-full text-sm md:text-[16px]"
          >
            Submeter
          </Button>
        </form>
      </div>
    </section>
  );
}