/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, ArrowUpRight, Cpu, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenContactModal: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

export default function Header({ onOpenContactModal, onToggleTheme, isDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { label: "Início", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Soluções", action: () => scrollToSection("solutions") },
    { label: "Processo", action: () => scrollToSection("process") },
    { label: "Benefícios", action: () => scrollToSection("benefits") },
    { label: "Demonstração", action: () => scrollToSection("demo") },
    { label: "Projetos", action: () => scrollToSection("project-models") }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 pointer-events-none">
      <div 
        className={`mx-auto w-full max-w-[980px] rounded-full pointer-events-auto transition-all duration-500 ${
          isDarkMode 
            ? "bg-[#050508]/85 backdrop-blur-xl border border-white/8 shadow-lg shadow-black/50" 
            : "bg-white/85 backdrop-blur-xl border border-black/8 shadow-md"
        } py-2.5 px-5 md:px-6`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className={`relative w-7 h-7 rounded-lg flex items-center justify-center border overflow-hidden transition-all duration-300 ${
              isDarkMode 
                ? "border-white/10 bg-[#08080C] group-hover:border-brand-purple/50" 
                : "border-black/10 bg-white group-hover:border-brand-purple/50"
            }`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 to-brand-bright/10 opacity-70 group-hover:opacity-100 transition-opacity" />
              <Cpu className={`w-3.5 h-3.5 relative z-10 group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? "text-white" : "text-brand-purple"}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-extrabold text-xs tracking-wider transition-colors duration-300 ${
                isDarkMode 
                  ? "text-white group-hover:text-brand-soft" 
                  : "text-slate-900 group-hover:text-brand-purple"
              }`}>
                LR DIGITAL
              </span>
              <span className="text-[8px] tracking-widest font-mono uppercase text-[#71717A] -mt-1 leading-none">
                Automação & IA
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className={`hidden md:flex items-center gap-1.5 rounded-full px-2 py-1 ${isDarkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"}`}>
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 ${
                  isDarkMode 
                    ? "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]" 
                    : "text-slate-600 hover:text-slate-950 hover:bg-black/[0.04]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA, Toggle & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenContactModal}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-semibold text-white bg-brand-purple hover:bg-brand-bright active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BA9DFE]/50 transition-all duration-200 shadow-[0_4px_12px_rgba(124,58,237,0.25)] relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Solicitar análise</span>
              <ArrowUpRight className="w-3 h-3 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-bright to-[#D8B4FE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              type="button"
              onClick={onToggleTheme}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 ${
                isDarkMode
                  ? "border-white/10 bg-white/[0.04] text-[#D8B4FE] hover:bg-white/[0.08] hover:text-white"
                  : "border-black/10 bg-slate-100 text-brand-purple hover:bg-white hover:text-slate-950 shadow-sm"
              }`}
              aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
              title={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-full md:hidden border active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 transition-transform ${
                isDarkMode 
                  ? "text-[#C4C4CC] hover:text-white bg-white/[0.04] border-white/10" 
                  : "text-slate-600 hover:text-slate-900 bg-slate-100 border-black/10"
              }`}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-brand-purple" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-20 left-4 right-4 backdrop-blur-xl border rounded-2xl p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto ${
              isDarkMode 
                ? "bg-[#08080C]/98 border-white/10 shadow-black/80" 
                : "bg-white/95 border-slate-200 shadow-xl"
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  className={`w-full text-left py-2.5 px-4 rounded-xl text-xs font-medium transition-all ${
                    isDarkMode 
                      ? "text-[#C4C4CC] hover:text-white hover:bg-white/[0.04]" 
                      : "text-slate-700 hover:text-brand-purple hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <hr className={`my-1 ${isDarkMode ? "border-white/5" : "border-black/5"}`} />

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-brand-purple hover:bg-brand-bright shadow-lg shadow-brand-purple/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Solicitar análise do processo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
