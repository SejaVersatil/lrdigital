/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { solutionsData } from "../data/landingData";
import { 
  Database, 
  BrainCircuit, 
  Workflow, 
  Bot,
  Sparkles,
  ArrowRight,
  Clock
} from "lucide-react";
import { motion } from "motion/react";

interface OverviewSectionProps {
  onOpenContactModal: () => void;
  isDarkMode: boolean;
}

export default function OverviewSection({ onOpenContactModal, isDarkMode }: OverviewSectionProps) {
  // Map icons helper
  const getIcon = (id: string, className: string) => {
    switch (id) {
      case "captacao":
        return <Database className={className} />;
      case "qualificacao":
        return <BrainCircuit className={className} />;
      case "crm":
        return <Workflow className={className} />;
      case "followup":
        return <Bot className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="solutions" className={`relative py-32 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#EEF3F8]"
    }`}>
      {/* Absolute background effects */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] transition-colors duration-500 ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      <div className="absolute -right-40 top-1/4 w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-40 bottom-1/4 w-[450px] h-[450px] rounded-full bg-brand-bright/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto">
        {/* Header content */}
        <div className="text-center max-w-[700px] mx-auto mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/15 mb-4">
            Soluções
          </div>
          
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight mb-6 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}>
            IA e automação aplicadas aos pontos onde sua operação perde velocidade.
          </h2>
          
          <p className={`text-sm md:text-[15px] leading-relaxed max-w-[585px] mx-auto transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}>
            Criamos fluxos sob medida para reduzir tarefas repetitivas, organizar dados e dar mais contexto ao time comercial.
          </p>
        </div>

        {/* 2x2 Grid of Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutionsData.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className={`group relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 overflow-hidden shadow-xl ${
                isDarkMode 
                  ? "border-white/[0.05] bg-[#08080C] hover:border-brand-purple/30 hover:bg-[#0D0B12]" 
                  : "border-black/[0.06] bg-white hover:border-brand-purple/20 hover:shadow-2xl hover:bg-[#F7F8FC]"
              }`}
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent group-hover:via-brand-purple/30 transition-all duration-300" />
              
              {/* Corner Glow effect */}
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-brand-purple/5 group-hover:bg-brand-purple/10 blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                {/* Meta details header inside card */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-brand-purple">
                    {sol.badge}
                  </span>
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                    isDarkMode 
                      ? "border-white/[0.06] bg-white/[0.02] text-white group-hover:text-brand-soft group-hover:border-brand-purple/35" 
                      : "border-slate-200 bg-slate-50 text-slate-800 group-hover:text-brand-purple group-hover:border-brand-purple/20"
                  }`}>
                    {getIcon(sol.id, "w-4 h-4")}
                  </div>
                </div>

                {/* Card Title & Copy */}
                <h3 className={`font-display font-semibold text-xl md:text-[22px] mb-3 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}>
                  {sol.title}
                </h3>
                <p className={`text-xs md:text-[13px] leading-relaxed mb-8 transition-colors duration-500 ${
                  isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"
                }`}>
                  {sol.text}
                </p>
              </div>

              {/* HAND-CRAFTED MINI MOCK UI ELEMENT */}
              <div className={`mt-2 p-4 rounded-xl border overflow-hidden select-none transition-all duration-500 ${
                isDarkMode 
                  ? "border-white/[0.04] bg-[#040406]/90" 
                  : "border-black/[0.04] bg-slate-50"
              }`}>
                
                {sol.id === "captacao" && (
                  <div className="flex flex-col gap-2 font-mono text-[9px]">
                    <div className="flex items-center justify-between pb-1 border-b border-[#000000]/[0.01] text-[#71717A]">
                      <span>CANAL DE ENTRADA</span>
                      <span className="text-emerald-500 flex items-center gap-1">FLUXO ATIVO</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-1 items-center">
                      <div className={`p-1.5 rounded border text-center ${isDarkMode ? "border-white/[0.04] bg-[#0A0910]" : "border-black/[0.05] bg-white shadow-sm"}`}>
                        <span className={`block font-sans font-medium text-[10px] ${isDarkMode ? "text-white" : "text-slate-900"}`}>WhatsApp</span>
                        <span className="text-[7.5px] text-[#71717A]">Conectado</span>
                      </div>
                      <div className="text-center text-[#7C3AED] text-xs">→</div>
                      <div className={`p-1.5 rounded border text-center ${isDarkMode ? "border-white/[0.04] bg-[#0A0910]" : "border-black/[0.05] bg-white shadow-sm"}`}>
                        <span className={`block font-sans font-medium text-[10px] ${isDarkMode ? "text-white" : "text-slate-900"}`}>Central</span>
                        <span className="text-[7.5px] text-emerald-500">Pronto</span>
                      </div>
                    </div>
                  </div>
                )}

                {sol.id === "qualificacao" && (
                  <div className="flex flex-col gap-2 font-mono text-[9px]">
                    <div className="flex items-center justify-between pb-1 border-b border-[#000000]/[0.01] text-[#71717A]">
                      <span>TRIAGEM DE CONTEXTO</span>
                      <span className="text-brand-bright">ANÁLISE IA</span>
                    </div>
                    <div className="flex flex-wrap gap-1 py-1">
                      <span className="px-1.5 py-0.5 rounded bg-red-950/20 text-red-400 border border-red-900/30 font-sans">
                        Prioridade: Alta
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-brand-purple/10 text-brand-soft border border-brand-purple/20 font-sans">
                        Segmentado
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-950/20 text-emerald-400 border border-emerald-900/30 font-sans">
                        Urgente
                      </span>
                    </div>
                  </div>
                )}

                {sol.id === "crm" && (
                  <div className="flex flex-col gap-2 font-mono text-[9px]">
                    <div className="flex items-center justify-between pb-1 border-b border-[#000000]/[0.01] text-[#71717A]">
                      <span>INTEGRAÇÃO DE DADOS</span>
                      <span className="text-emerald-500">CRM ATUALIZADO</span>
                    </div>
                    <div className={`p-1.5 rounded border flex justify-between items-center ${isDarkMode ? "border-white/[0.04] bg-[#0A0910]" : "border-black/[0.05] bg-white shadow-sm"}`}>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-brand-purple" />
                        <span className={`font-sans text-[10px] ${isDarkMode ? "text-white" : "text-slate-900"}`}>Oportunidade Criada</span>
                      </div>
                      <span className="text-[8px] text-[#71717A]">Funil Ativo</span>
                    </div>
                  </div>
                )}

                {sol.id === "followup" && (
                  <div className="flex flex-col gap-2 font-mono text-[9px]">
                    <div className="flex items-center justify-between pb-1 border-b border-[#000000]/[0.01] text-[#71717A]">
                      <span>PASSAGEM DE BASTÃO</span>
                      <span className="text-amber-500">HANDOFF PREPARADO</span>
                    </div>
                    <div className="border border-brand-purple/20 p-2 rounded gap-1 flex flex-col bg-brand-purple/5">
                      <p className="text-brand-soft font-bold leading-none flex items-center gap-1 text-[8px]">
                        <Clock className="w-3 h-3 text-brand-purple" />
                        NOTIFICAÇÃO:
                      </p>
                      <p className={`text-[8.5px] font-sans ${isDarkMode ? "text-[#E4E4E7]" : "text-slate-700"}`}>
                        Mapeamento do processo enviado com sucesso para o time de atendimento.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

        {/* Action prompt */}
        <div className="mt-20 text-center">
          <p className={`text-[11px] font-sans mb-4 transition-colors ${isDarkMode ? "text-[#71717A]" : "text-slate-500"}`}>
            Cada fluxo de automação é estruturado sob medida focado nas regras específicas da sua operação.
          </p>
          <button
            onClick={onOpenContactModal}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/[0.02] hover:bg-white/[0.05] text-[#E4E4E7] border border-white/8 hover:border-brand-purple/40" 
                : "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:border-brand-purple/20"
            }`}
          >
            <span>Mapear os gargalos da minha empresa</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-soft group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
