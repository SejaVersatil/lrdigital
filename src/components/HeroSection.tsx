/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, ArrowDownCircle } from "lucide-react";
import { motion } from "motion/react";
import { trustPills } from "../data/landingData";

const roboticHandHero = new URL("../assets/images/robotic_hand_hero_1780073012840.png", import.meta.url).href;
const roboticHandHeroLight = new URL("../assets/images/robotic_hand_hero_light.png", import.meta.url).href;

interface HeroSectionProps {
  onOpenContactModal: () => void;
  onScrollToDemo: () => void;
  isDarkMode: boolean;
}

// Static configuration of subtle background stars generated once
const BACKGROUND_STARS = Array.from({ length: 24 }, (_, i) => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const size = Math.random() * 1.2 + 0.6; // 0.6px to 1.8px
  const twinkle = Math.random() > 0.3;
  const duration = 5 + Math.random() * 6;
  const delay = Math.random() * 5;

  return {
    id: i,
    top,
    left,
    size,
    twinkle,
    duration,
    delay
  };
});

function HeroAtmosphere({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Glow Center container Behind Headline */}
      <motion.div
        animate={{
          scale: [0.96, 1.04, 0.96],
          opacity: [0.92, 1.08, 0.92],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
      >
        {isDarkMode ? (
          <>
            {/* Camada maior: roxo escuro super difuso (rgba(124, 58, 237, 0.14)) */}
            <div className="absolute w-[680px] md:w-[820px] h-[340px] md:h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14)_0%,transparent_70%)] blur-[90px] md:blur-[120px]" />
            {/* Camada média: violeta/lavanda suave (rgba(168, 85, 247, 0.16)) */}
            <div className="absolute w-[460px] md:w-[580px] h-[220px] md:h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.16)_0%,transparent_75%)] blur-[70px] md:blur-[90px]" />
            {/* Camada interna: brilho mais concentrado (rgba(192, 132, 252, 0.10)) */}
            <div className="absolute w-[280px] md:w-[380px] h-[140px] md:h-[200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.10)_0%,transparent_80%)] blur-[45px] md:blur-[60px]" />
          </>
        ) : (
          <>
            {/* Light Mode Glow Layers - subtle, soft pastel */}
            {/* Camada maior: roxo super suave */}
            <div className="absolute w-[600px] md:w-[740px] h-[300px] md:h-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06)_0%,transparent_70%)] blur-[80px] md:blur-[110px]" />
            {/* Camada média: lavanda sutil */}
            <div className="absolute w-[400px] md:w-[500px] h-[200px] md:h-[260px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_75%)] blur-[50px] md:blur-[70px]" />
          </>
        )}
      </motion.div>

      {/* Subtle Star/Dust Layer across the whole Hero */}
      <div className="absolute inset-0 opacity-40">
        {BACKGROUND_STARS.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute rounded-full ${isDarkMode ? "bg-white" : "bg-brand-purple/40"}`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={star.twinkle ? {
              opacity: [0.15, 0.85, 0.15],
            } : {}}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection({ onOpenContactModal, onScrollToDemo, isDarkMode }: HeroSectionProps) {
  // We align with the dark-only premium theme requested
  return (
    <section id="hero" className={`relative min-h-[820px] pt-40 pb-24 overflow-hidden flex flex-col justify-center items-center px-4 transition-colors duration-500 ${
      isDarkMode ? "bg-[#030304]" : "bg-[#F7F8FC]"
    }`}>
      {/* Visual reference direction: deep dark space with subtle noise / starfield */}
      <div className={`absolute inset-0 z-0 pointer-events-none opacity-[0.16] transition-colors duration-500 ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      
      {/* Premium HeroAtmosphere Glow and Starfield background layers behind content */}
      <HeroAtmosphere isDarkMode={isDarkMode} />
      
      {/* Vignette effect around the edge */}
      {isDarkMode && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030304_85%)] pointer-events-none z-10" />}

      {/* Premium Robotic Hand Visual Element - Beautifully blended and responsive */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none">
        {/* Refined glow layers near the hand area specifically for Light Mode */}
        {!isDarkMode && (
          <div className="absolute right-[-14%] bottom-[-16%] h-[620px] w-[720px] rounded-full pointer-events-none z-0 opacity-100 md:h-[840px] md:w-[980px] xl:h-[980px] xl:w-[1180px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_62%,rgba(124,58,237,0.13)_0%,rgba(124,58,237,0.06)_34%,transparent_66%)] blur-[78px]" />
            <div className="absolute inset-10 bg-[radial-gradient(circle_at_52%_64%,rgba(6,182,212,0.16)_0%,rgba(45,212,191,0.07)_38%,transparent_68%)] blur-[86px]" />
            <div className="absolute bottom-20 right-10 h-28 w-[72%] rounded-full bg-slate-400/20 blur-[46px]" />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.15 }}
          className={
            isDarkMode 
              ? "absolute right-[-15%] sm:right-[-8%] md:right-[-5%] lg:right-[-6%] xl:right-[-8%] bottom-[-10%] sm:bottom-[-4%] md:bottom-[-2%] lg:bottom-[-4%] xl:bottom-[-6%] w-[95vw] sm:w-[72vw] md:w-[68vw] lg:w-[64vw] xl:w-[58vw] max-w-[750px] md:max-w-[1050px] lg:max-w-[1200px] xl:max-w-[1350px]"
              : "absolute right-[-18%] sm:right-[-10%] md:right-[-7%] lg:right-[-7%] xl:right-[-8%] bottom-[-18%] sm:bottom-[-12%] md:bottom-[-10%] lg:bottom-[-12%] xl:bottom-[-14%] w-[108vw] sm:w-[76vw] md:w-[70vw] lg:w-[65vw] xl:w-[59vw] max-w-[780px] md:max-w-[1080px] lg:max-w-[1220px] xl:max-w-[1360px]"
          }
        >
          <img
            src={isDarkMode ? roboticHandHero : roboticHandHeroLight}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className={`w-full h-auto object-contain transition-all duration-700 ${
              isDarkMode 
                ? "opacity-[0.70] md:opacity-[0.82]" 
                : "opacity-[0.86] md:opacity-[0.96]"
            }`}
            style={
              isDarkMode
                ? {
                    mixBlendMode: "screen",
                    WebkitMaskImage: "radial-gradient(circle at 80% 80%, black 20%, transparent 75%)",
                    maskImage: "radial-gradient(circle at 80% 80%, black 20%, transparent 75%)",
                  }
                : {
                    filter:
                      "brightness(0.96) contrast(1.18) saturate(1.08) drop-shadow(0 28px 36px rgba(15,23,42,0.22)) drop-shadow(0 0 42px rgba(34,211,238,0.18))",
                    mixBlendMode: "normal",
                  }
            }
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-[1120px] w-full text-center flex flex-col items-center">
        {/* Animated tag bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-10 transition-colors group cursor-pointer ${
            isDarkMode 
              ? "bg-[#0C0B12] hover:bg-[#12101B] border-white/8" 
              : "bg-white hover:bg-slate-100 border-black/8 shadow-sm"
          }`}
          onClick={onScrollToDemo}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-soft" />
          <span className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
            Novo • Automação com IA aplicada ao comercial
          </span>
          <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] group-hover:translate-x-0.5 transition-transform" />
        </motion.div>

        {/* Primary display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`font-display font-extrabold text-[32px] sm:text-5xl md:text-[68px] tracking-tight leading-[1.05] max-w-[780px] transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}
        >
          Automação inteligente para empresas modernas.
        </motion.h1>

        {/* Muted subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-sm md:text-[15px] max-w-[620px] mt-6 leading-relaxed font-normal transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}
        >
          Implementamos fluxos que captam, organizam, qualificam e acompanham leads usando automação comercial, IA e integração com CRM — trazendo mais velocidade e consistência, mais contexto para o time e redução de tarefas manuais.
        </motion.p>

        {/* Buttons below with generous spacing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3.5 items-center justify-center mt-12 w-full sm:w-auto px-4 z-20"
        >
          <button
            onClick={onOpenContactModal}
            className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-semibold text-white bg-brand-purple hover:bg-brand-bright hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BA9DFE]/50 transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5">
              Solicitar análise
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bright to-[#C084FC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={onScrollToDemo}
            className={`w-full sm:w-auto px-7 py-3 rounded-full text-xs font-semibold active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 transition-all cursor-pointer flex items-center justify-center gap-1.5 group ${
              isDarkMode 
                ? "text-[#C4C4CC] bg-white/[0.03] border border-white/6 hover:bg-white/[0.07] hover:border-white/12" 
                : "text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 hover:border-slate-300 shadow-sm"
            }`}
          >
            Ver demonstração
            <ArrowDownCircle className="w-3.5 h-3.5 text-brand-soft group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Subtle trust pills positioned lower with balanced spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 md:mt-24 w-full flex flex-col items-center z-10"
        >
          <p className={`text-[10px] uppercase font-mono tracking-widest mb-4 ${isDarkMode ? "text-[#71717A]" : "text-slate-400"}`}>
            Parceiro de integração para negócios estruturados
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl px-4">
            {trustPills.map((pill, idx) => (
              <div 
                key={idx}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 border ${
                  isDarkMode 
                    ? "text-[#A1A1AA] bg-[#0A0910] border-white/[0.04]" 
                    : "text-slate-700 bg-white border-black/[0.05] shadow-sm"
                }`}
              >
                {pill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
