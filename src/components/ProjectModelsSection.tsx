/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { projectModelsData } from "../data/landingData";
import { Check, Star, Brain } from "lucide-react";
import { motion } from "motion/react";

interface ProjectModelsSectionProps {
  onOpenContactModal: (tierName?: string) => void;
  isDarkMode: boolean;
}

export default function ProjectModelsSection({ onOpenContactModal, isDarkMode }: ProjectModelsSectionProps) {
  return (
    <section id="project-models" className={`relative py-32 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#FAF9F5]"
    }`}>
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      
      {/* Visual lighting direction: purple glowing orb underneath */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto">
        
        {/* Title area */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/15 mb-4">
            Modelos de Implementação
          </div>
          
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-none mb-6 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}>
            Projetos sob medida para diferentes níveis de operação.
          </h2>
          
          <p className={`text-sm md:text-[15px] mt-6 leading-relaxed max-w-[585px] mx-auto transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}>
            A automação é desenhada exclusivamente de acordo com seus canais de vendas, volume de contatos diários, CRM contratado, equipe disponível e nível de classificação inteligente necessário.
          </p>

          <div className={`inline-flex items-center gap-2 mt-6 py-2 px-4 rounded-xl border ${
            isDarkMode ? "bg-white/[0.01] border-white/[0.04]" : "bg-black/[0.01] border-black/[0.05]"
          }`}>
            <Brain className="w-4 h-4 text-brand-purple animate-pulse" />
            <span className={`text-xs font-semibold ${isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"}`}>
              Nota: Não vendemos assinaturas. São entregues projetos de arquitetura e propriedade definitiva.
            </span>
          </div>
        </div>

        {/* 3 implementation tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {projectModelsData.map((tier, index) => {
            const isRec = tier.isRecommended;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 border ${
                  isRec 
                    ? "bg-[#0E0A1A] border-brand-purple shadow-xl shadow-brand-purple/5 scale-105 z-10" 
                    : isDarkMode
                      ? "bg-[#08080C] border-white/[0.06] hover:border-brand-purple/30 shadow-sm"
                      : "bg-white border-black/[0.06] hover:border-brand-purple/20 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Recommending Glow Banner */}
                {isRec && (
                   <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4.5 py-1 rounded-full bg-gradient-to-r from-brand-purple to-[#8936FF] text-white text-[9px] font-mono uppercase tracking-widest font-extrabold shadow-md flex items-center gap-1.5 border border-white/20">
                    <Star className="w-3 h-3 fill-white text-white" />
                    <span>Destaque Comercial</span>
                  </div>
                )}

                <div>
                  {/* Top sector description */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono tracking-widest uppercase border px-2.5 py-1 rounded-md ${
                      isDarkMode 
                        ? "text-[#A1A1AA] bg-white/[0.03] border-white/[0.08]" 
                        : "text-slate-600 bg-slate-50 border-black/10"
                    }`}>
                      {tier.badge}
                    </span>
                    <span className="text-[11px] font-mono text-brand-purple font-bold uppercase">
                      Implementação dedicada
                    </span>
                  </div>

                  <h3 className={`font-display font-extrabold text-2xl mb-2 ${isDarkMode ? "text-white" : "text-slate-950"}`}>
                    {tier.name}
                  </h3>
                  
                  <p className={`text-xs mb-6 leading-relaxed ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
                    {tier.tagline}
                  </p>

                  <hr className={`mb-6 ${isDarkMode ? "border-white/[0.06]" : "border-black/[0.06]"}`} />

                  {/* Implementation scope metrics */}
                  <div className="mb-6">
                    <span className={`text-[9px] font-mono uppercase tracking-widest block mb-2 ${
                      isDarkMode ? "text-[#71717A]" : "text-slate-400"
                    }`}>
                      Foco Operacional
                    </span>
                    <p className={`text-xs font-semibold p-2.5 rounded-lg border ${
                      isDarkMode 
                        ? "text-white bg-white/[0.02] border-white/[0.04]" 
                        : "text-slate-800 bg-slate-50 border-black/[0.05]"
                    }`}>
                      {tier.scope}
                    </p>
                  </div>

                  {/* Bullet features list */}
                  <div className="space-y-3.5 mb-8">
                    <span className={`text-[9px] font-mono uppercase tracking-widest block ${
                      isDarkMode ? "text-[#71717A]" : "text-slate-400"
                    }`}>
                      Itens Incluídos no Escopo
                    </span>
                    {tier.bullets.map((bullet, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-xs ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
                        <div className="p-0.5 rounded bg-brand-purple/10 text-brand-purple mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope valuation & Action Call */}
                <div>
                  <div className={`p-4 rounded-2xl mb-5 text-center border ${
                    isDarkMode ? "bg-black/40 border-white/[0.04]" : "bg-[#FAF8FF] border-brand-purple/10"
                  }`}>
                    <span className={`text-[9px] font-mono uppercase block mb-1 ${isDarkMode ? "text-[#71717A]" : "text-brand-purple font-semibold"}`}>CUSTO DA IMPLEMENTAÇÃO</span>
                    <span className={`text-sm font-bold tracking-wide ${isDarkMode ? "text-white" : "text-slate-950"}`}>Sob Análise de Processo</span>
                    <p className={`text-[10px] mt-1 font-sans ${isDarkMode ? "text-[#71717A]" : "text-slate-500"}`}>
                      A proposta é formulada após mapeamento do processo sem ônus.
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenContactModal(tier.name)}
                    className={`w-full py-3.5 rounded-full text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 cursor-pointer ${
                      isRec 
                        ? "bg-brand-purple text-white hover:bg-brand-bright shadow-lg shadow-brand-purple/35" 
                        : isDarkMode
                          ? "bg-white/[0.03] text-[#F8FAFC] hover:bg-white/[0.07] border border-white/10 hover:border-brand-purple/50"
                          : "bg-black/[0.02] text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-brand-purple/40"
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Security / trust reassurance note */}
        <div className={`mt-16 text-center max-w-xl mx-auto border rounded-2xl p-4 flex items-center gap-3 transition-colors duration-500 ${
          isDarkMode 
            ? "bg-[#09080E]/90 border-white/[0.04]" 
            : "bg-white border-black/[0.05] shadow-sm"
        }`}>
          <div className="p-2 bg-brand-purple/10 text-brand-purple rounded-lg shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className={`text-[11px] text-left leading-normal ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
            Todos os fluxos e lógicas criadas são de propriedade intelectual exclusiva da sua empresa (sem licenças obrigatórias contínuas adicionais de assessoria). Fornecemos documentação completa de handover técnico.
          </p>
        </div>

      </div>
    </section>
  );
}
