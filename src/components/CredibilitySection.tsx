/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, UserCheck, Eye, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface CredibilitySectionProps {
  isDarkMode: boolean;
}

export default function CredibilitySection({ isDarkMode }: CredibilitySectionProps) {
  const points = [
    {
      id: "contexto",
      icon: <Eye className="w-5 h-5 text-brand-purple" />,
      title: "1. Contexto antes da IA",
      tag: "Processo Primeiro",
      desc: "Nós não empurramos modelos prontos. Analisamos primeiro seu gargalo de atendimento físico, desenhamos o diagrama lógico e então configuramos a IA para atuar exatamente na sua dor."
    },
    {
      id: "seguranca",
      icon: <ShieldCheck className="w-5 h-5 text-brand-purple" />,
      title: "2. Regras claras e segurança",
      tag: "Blindado de Gargalos",
      desc: "Trabalhamos com regras claras, limites de atuação da IA e boas práticas de dados para que a IA opere em ambientes seguros, protegendo os dados estratégicos da sua empresa."
    },
    {
      id: "handoff",
      icon: <UserCheck className="w-5 h-5 text-brand-purple" />,
      title: "3. Handoff humano com histórico",
      tag: "Sincronia Fluida",
      desc: "A tecnologia cuida da repetição e da velocidade de triagem. Mas no momento de fechar o negócio, o vendedor recebe o alerta com o histórico organizado para fazer uma abordagem certeira."
    }
  ];

  return (
    <section id="credibility" className={`relative py-32 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#FDFDFD]"
    }`}>
      {/* Background Atmosphere */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      
      {/* Atmosphere glow orb bottom-left */}
      <div className="absolute -left-20 bottom-10 w-[350px] h-[350px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto">
        
        {/* Title area */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/15 mb-4">
            Confiança & Parâmetros
          </div>
          
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-none mb-6 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}>
            Construído para empresas que precisam de processo, não improviso.
          </h2>
          
          <p className={`text-sm md:text-[15px] mt-6 leading-relaxed max-w-[585px] mx-auto transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}>
            Estruturamos cada fluxo para trazer mais clareza, organização e consistência ao processo comercial.
          </p>
        </div>

        {/* 3 cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {points.map((pt, index) => (
            <motion.div
              key={pt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                isDarkMode 
                  ? "border-white/[0.05] bg-[#08080C] hover:border-brand-purple/35 hover:bg-[#0E0B16]" 
                  : "border-black/[0.05] bg-white shadow-sm hover:border-brand-purple/30 hover:shadow-md"
              }`}
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent group-hover:via-brand-bright/40 transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[9px] font-mono tracking-widest uppercase border px-2 py-0.5 rounded transition-colors duration-500 ${
                    isDarkMode 
                      ? "text-[#A1A1AA] bg-white/[0.02] border-white/[0.08]" 
                      : "text-[#555566] bg-black/[0.01] border-black/[0.06]"
                  }`}>
                    {pt.tag}
                  </span>
                  
                  <div className={`p-2.5 rounded-xl border transition-colors duration-500 ${
                    isDarkMode ? "bg-white/[0.02] border-white/[0.06]" : "bg-black/[0.01] border-black/[0.05]"
                  }`}>
                    {pt.icon}
                  </div>
                </div>

                <h3 className={`font-display font-semibold text-lg md:text-xl mb-3 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-[#131122]"
                }`}>
                  {pt.title}
                </h3>
                
                <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-500 ${
                  isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
                }`}>
                  {pt.desc}
                </p>
              </div>

              {/* Quality Seal */}
              <div className={`mt-8 pt-4 border-t flex items-center justify-between font-mono text-[9px] transition-colors duration-500 ${
                isDarkMode ? "border-white/[0.03] text-[#71717A]" : "border-black/[0.04] text-[#888899]"
              }`}>
                <span>INTEGRAÇÃO LR DIGITAL</span>
                <span className="text-[#D8B4FE] font-bold flex items-center gap-1 uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                  Homologado
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
