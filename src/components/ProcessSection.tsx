/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { processStepsData } from "../data/landingData";
import { motion } from "motion/react";

interface ProcessSectionProps {
  isDarkMode: boolean;
}

export default function ProcessSection({ isDarkMode }: ProcessSectionProps) {
  return (
    <section id="process" className={`relative py-32 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#F7F8FC]"
    }`}>
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] transition-colors duration-500 ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      
      {/* Decorative localized ambient glowing elements */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand-bright/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto">
        
        {/* Title area */}
        <div className="text-center max-w-[700px] mx-auto mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/15 mb-4">
            Metodologia
          </div>
          
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight mb-6 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}>
            Como construímos o seu processo de automação.
          </h2>
          
          <p className={`text-sm md:text-[15px] leading-relaxed max-w-[585px] mx-auto transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}>
            O projeto começa entendendo a operação da empresa, depois desenhamos a automação, implementamos com IA e ajustamos com base no uso real.
          </p>
        </div>

        {/* Process nodes implementation */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main glowing line connecting steps on desktop */}
          <div className={`hidden lg:block absolute top-[22px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r z-0 ${
            isDarkMode 
              ? "from-brand-purple/40 via-[#8B5CF6]/50 to-transparent" 
              : "from-brand-purple/20 via-[#8B5CF6]/30 to-transparent"
          }`} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processStepsData.map((step, index) => {
              const isCompleted = step.status === "completed";
              const isActive = step.status === "active";
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col group relative"
                >
                  {/* Step status connection line on mobile */}
                  <div className={`md:hidden absolute left-5.5 top-11 bottom-0 w-[1px] z-0 ${isDarkMode ? "bg-white/[0.04]" : "bg-black/[0.05]"}`} />

                  {/* Header visual bubble */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2 mb-4">
                    
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-mono text-xs font-semibold border transition-all duration-300 relative z-10 ${
                      isCompleted 
                        ? (isDarkMode 
                            ? "bg-[#09080E]/90 text-emerald-400 border-white/[0.06] shadow-[0_0_15px_rgba(34,197,94,0.1)]" 
                            : "bg-white text-emerald-600 border-black/10 shadow-sm") 
                        : isActive 
                        ? "bg-brand-purple/10 text-brand-bright border-brand-purple/40 shadow-[0_0_15px_rgba(124,58,237,0.15)] animate-[pulse_3s_ease-in-out_infinite]" 
                        : (isDarkMode 
                            ? "bg-[#09080E]/90 text-[#71717A] border-white/[0.06]" 
                            : "bg-white text-[#71717A] border-black/10 shadow-sm")
                    }`}>
                      {isCompleted ? (
                        <span className="text-[11px]">✓</span>
                      ) : isActive ? (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-bright opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-bright"></span>
                        </span>
                      ) : (
                        <span>0{step.id}</span>
                      )}
                    </div>

                    {/* Step tag */}
                    <div className="flex flex-col lg:mt-2">
                      <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-brand-soft">
                        {step.timeframe}
                      </span>
                      <span className={`text-[9px] font-mono font-medium ${
                        isCompleted ? "text-[#71717A]" : isActive ? "text-[#A855F7]" : "text-[#71717A]"
                      }`}>
                        {step.badge}
                      </span>
                    </div>

                  </div>

                  {/* Step Card Content */}
                  <div className={`ml-15 lg:ml-0 p-5 rounded-2xl border transition-all duration-300 flex-1 flex flex-col justify-between ${
                    isDarkMode 
                      ? "border-white/[0.04] bg-[#08080C] hover:border-brand-purple/20 hover:bg-[#0D0B12]" 
                      : "border-black/[0.05] bg-white hover:border-brand-purple/20 shadow-sm"
                  }`}>
                    <div>
                      <h3 className={`font-display font-semibold text-sm mb-2 transition-colors ${
                        isDarkMode ? "text-white group-hover:text-brand-soft" : "text-slate-900 group-hover:text-brand-purple"
                      }`}>
                        {step.title}
                      </h3>
                      
                      <p className={`text-xs leading-relaxed font-normal transition-colors duration-500 ${
                        isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Step Status Badging at Footer */}
                    <div className={`mt-5 pt-4 border-t flex items-center justify-between text-[9px] font-mono uppercase ${
                      isDarkMode ? "border-white/[0.03]" : "border-black/[0.04]"
                    }`}>
                      <span className="text-[#52525B]">FASE</span>
                      <span className={`font-semibold ${
                        isCompleted ? "text-emerald-500" : isActive ? "text-[#A855F7]" : "text-[#71717A]"
                      }`}>
                        {isCompleted ? "Concluído" : isActive ? "Em Execução" : "Próximo"}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
