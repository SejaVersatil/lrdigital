/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { benefitsData } from "../data/landingData";
import { 
  Zap, 
  BrainCircuit, 
  Target, 
  Workflow, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

interface BenefitsSectionProps {
  onOpenContactModal: () => void;
  isDarkMode: boolean;
}

export default function BenefitsSection({ onOpenContactModal, isDarkMode }: BenefitsSectionProps) {
  // Mapping string to lucide icons
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className={className} />;
      case "BrainCircuit":
        return <BrainCircuit className={className} />;
      case "Target":
        return <Target className={className} />;
      case "Workflow":
        return <Workflow className={className} />;
      case "CheckCircle2":
        return <CheckCircle2 className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="benefits" className={`relative py-32 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#FAF9F5]"
    }`}>
      {/* Decorative starry visual or noise background */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      
      {/* Glow highlight */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto">
        {/* Header content */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/15 mb-4">
            Aumento Operacional
          </div>
          
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-none mb-6 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}>
            Benefícios práticos para a operação comercial.
          </h2>
          
          <p className={`text-sm md:text-[15px] leading-relaxed max-w-[585px] mx-auto transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}>
            A automação não substitui o relacionamento humano. Ela organiza o processo técnico para que a sua equipe comercial atue com foco em quem realmente tem potencial de compra.
          </p>
        </div>

        {/* Individual refined card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`p-8 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between border ${
                isDarkMode 
                  ? "border-white/[0.04] bg-[#08080C] hover:border-brand-purple/30 hover:shadow-[0_4px_30px_rgba(124,58,237,0.04)]" 
                  : "border-black/[0.05] bg-white shadow-sm hover:border-brand-purple/20 hover:shadow-[0_4px_30px_rgba(124,58,237,0.02)]"
              }`}
            >
              {/* Inner subtle pointer aura */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-radial-gradient from-brand-purple/[0.02] via-transparent to-transparent pointer-events-none transition-all duration-500" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                    isDarkMode 
                      ? "bg-white/[0.02] border-white/[0.06] text-[#A1A1AA] group-hover:text-[#D8B4FE] group-hover:border-brand-purple/40 group-hover:bg-brand-purple/5" 
                      : "bg-slate-50 border-black/10 text-slate-500 group-hover:text-brand-purple group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5"
                  }`}>
                    {getIcon(benefit.iconName, "w-4 h-4")}
                  </div>
                  
                  {/* Miniature index badge */}
                  <span className="text-[10px] font-mono transition-colors font-medium text-[#71717A] group-hover:text-brand-soft">
                    0{index + 1}
                  </span>
                </div>

                <h3 className={`font-display font-semibold text-lg mb-2.5 transition-colors ${
                  isDarkMode ? "text-white group-hover:text-brand-soft" : "text-slate-900 group-hover:text-brand-purple"
                }`}>
                  {benefit.title}
                </h3>
                
                <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-500 ${
                  isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"
                }`}>
                  {benefit.text}
                </p>
              </div>

              {/* Progress indicator glow */}
              <div className={`pt-6 mt-6 border-t flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode ? "border-white/[0.03]" : "border-black/[0.03]"
              }`}>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#D8B4FE]">PROCESSO AUTOMATIZADO</span>
                <ChevronRight className="w-3 h-3 text-[#D8B4FE]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA prompt below grid */}
        <div className="mt-16 text-center">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-2 p-3 px-6 rounded-full border border-dashed ${
            isDarkMode 
              ? "bg-[#09090E] border-white/[0.06]" 
              : "bg-white border-black/10 shadow-sm"
          }`}>
            <span className={`text-xs ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>Quer entender quanto a sua operação pode economizar de tempo?</span>
            <button 
              onClick={onOpenContactModal}
              className="text-xs font-bold text-brand-purple hover:text-brand-bright focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 rounded-sm transition-colors outline-none cursor-pointer flex items-center gap-1.5"
            >
              <span>Fazer análise inicial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
