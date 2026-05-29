/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQSectionProps {
  isDarkMode: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({ isDarkMode }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "A automação substitui minha equipe?",
      answer: "Não. A proposta central de nossas automações comerciais é reduzir tarefas redundantes e de digitação manual de leads em planilhas ou CRMs, liberando e organizando a rotina para que seu time humano atenda com foco estratégico, mais velocidade, consistência e contexto qualificado."
    },
    {
      question: "Preciso trocar meu CRM comercial?",
      answer: "Não necessariamente. Nosso time de soluções desenvolve integrações personalizadas diretamente com os sistemas que sua empresa já utiliza no dia a dia, como RD Station CRM, Pipedrive, HubSpot, Salesforce, etc., buscando uma sincronização mais organizada dos dados."
    },
    {
      question: "A inteligência artificial responde sozinha para todos os clientes?",
      answer: "Ela pode responder de forma autônoma dentro de parâmetros e regras de funil estritamente combinados e testados. Para contatos ou solicitações que demandem alta sensibilidade, complexidade contratual ou atendimento customizado, o sistema aciona de imediato o vendedor (handoff) fornecendo um resumo organizado do lead."
    },
    {
      question: "Quanto tempo leva para implementar um projeto customizado?",
      answer: "Por se tratar de uma implementação consultiva e sob medida, o prazo varia conforme canais, regras e integrações necessárias."
    },
    {
      question: "Essas automações funcionam para qualquer modelo de negócio?",
      answer: "Nossos projetos são ideais para empresas que já possuem uma captação de leads em andamento (via site, WhatsApp, anúncios no Meta, tráfego pago) e que enfrentam gargalos como demora física na primeira resposta, falta de follow-ups padronizados e relatórios de CRM desatualizados."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={`relative py-32 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#FDFDFD]"
    }`}>
      {/* Absolute overlay effects */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      
      {/* Localized subtle back glow */}
      <div className="absolute top-[40%] right-10 w-[300px] h-[300px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto">
        
        {/* Title details */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/15 mb-4">
            Perguntas Frequentes
          </div>
          
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-none mb-6 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}>
            Esclareça suas dúvidas técnicas.
          </h2>
          
          <p className={`text-sm md:text-[15px] mt-6 leading-relaxed max-w-[585px] mx-auto transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}>
            Entenda como operam as inteligências, suporte, prazos de entrega e boas práticas de dados de nossas soluções.
          </p>
        </div>

        {/* Clean Accordion list */}
        <div className="space-y-4 max-w-[760px] mx-auto">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? isDarkMode
                      ? "bg-[#0C0A15]/90 border-brand-purple/45 shadow-[0_0_15px_rgba(124,58,237,0.06)]" 
                      : "bg-[#FAF8FF] border-brand-purple/35 shadow-[0_0_15px_rgba(124,58,237,0.04)]"
                    : isDarkMode
                      ? "bg-[#07060B]/70 border-white/[0.04] hover:border-white/10"
                      : "bg-white border-black/[0.04] hover:border-slate-300 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between text-left p-6 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 outline-none group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-[#D8B4FE]" : "text-[#71717A]"}`} />
                    <span className={`font-display font-semibold text-sm md:text-base transition-colors ${
                      isOpen 
                        ? isDarkMode ? "text-brand-soft" : "text-brand-purple" 
                        : isDarkMode ? "text-white group-hover:text-[#D8B4FE]" : "text-[#131122] group-hover:text-brand-purple"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  <div className={`p-1 rounded-full border transition-all ${
                    isOpen 
                      ? "bg-brand-purple/30 text-white border-brand-purple/50 rotate-180" 
                      : isDarkMode 
                      ? "bg-[#0A0910] text-[#71717A] border-white/10"
                      : "bg-slate-50 text-slate-500 border-black/10"
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`px-6 pb-6 pt-0 border-t text-xs md:text-sm leading-relaxed font-sans ${
                        isDarkMode ? "border-white/[0.03] text-[#A1A1AA]" : "border-black/[0.03] text-slate-600"
                      }`}>
                        <p className="pt-4">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
