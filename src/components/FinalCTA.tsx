/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowUpRight, ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenContactModal: () => void;
  isDarkMode: boolean;
}

export default function FinalCTA({ onOpenContactModal, isDarkMode }: FinalCTAProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section id="final-cta" className={`relative py-28 md:py-36 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#EEF3F8]"
    }`}>
      {/* Background Star Overlay */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] transition-colors duration-500 ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />

      {/* Extreme Deep Purple Spot Background Glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[300px] bg-brand-purple/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Animated tag bar */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/20 mb-6">
          <Sparkles className="w-3 h-3 text-brand-purple animate-spin" />
          <span>Primeiro passo sem compromisso</span>
        </div>

        {/* Strong Final Headline */}
        <h2 className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-3xl leading-[1.15] transition-colors duration-500 ${
          isDarkMode ? "text-white" : "text-[#131122]"
        }`}>
          Quer transformar seu atendimento comercial em um processo mais inteligente?
        </h2>

        {/* Explanatory description text */}
        <p className={`text-sm md:text-base max-w-2xl mt-6 leading-relaxed transition-colors duration-500 ${
          isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
        }`}>
          Mapeamos minuciosamente sua operação atual para identificar precisamente onde a implementação de IA e automações comerciais gerará mais velocidade de resposta, conformidade de CRM e aceleração de receita.
        </p>

        {/* Core dynamic action panel */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10 w-full sm:w-auto px-4 text-center">
          <button
            onClick={onOpenContactModal}
            className="w-full sm:w-auto px-8 py-4.5 rounded-full text-xs font-bold text-white bg-brand-purple hover:bg-brand-bright hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BA9DFE]/50 transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Solicitar análise do processo
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bright to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={onOpenContactModal}
            className={`w-full sm:w-auto px-8 py-4.5 rounded-full text-xs font-bold active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 transition-all cursor-pointer flex items-center justify-center gap-2 group border ${
              isDarkMode 
                ? "text-[#E4E4E7] bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-brand-purple/50" 
                : "text-slate-800 bg-white border-black/10 hover:bg-slate-50 hover:border-brand-purple/35 shadow-sm"
            }`}
          >
            <span>Enviar mensagem direta</span>
            <ArrowRight className="w-4 h-4 text-brand-purple group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Small trust note requested in prompt */}
        <p className={`text-[11px] mt-6 max-w-md leading-relaxed transition-colors duration-500 ${
          isDarkMode ? "text-[#80808a]" : "text-slate-500"
        }`}>
          Sem compromisso corporativo. A análise de processo e o diagnóstico inicial servem exclusivamente para que ambos entendamos se a automação gera retorno financeiro real para a sua empresa.
        </p>

        {/* Premium footer board with copyright and disclaimer details */}
        <div className={`mt-28 pt-8 border-t w-full flex flex-col md:flex-row items-center justify-between text-[11px] font-sans gap-4 transition-colors duration-500 ${
          isDarkMode ? "border-white/[0.05] text-[#80808a]" : "border-black/[0.08] text-slate-500"
        }`}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className={`font-semibold tracking-wide font-display ${isDarkMode ? "text-white" : "text-slate-950"}`}>LR DIGITAL</span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-wider">Implementação de Automação e IA Comercial</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase font-mono">
            <span>Início</span>
            <span>Soluções</span>
            <span>Metodologia</span>
            <span>Segurança da Informação</span>
          </div>

          <p className="font-mono text-[10px]">
            © {currentYear} LR Digital. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </section>
  );
}
