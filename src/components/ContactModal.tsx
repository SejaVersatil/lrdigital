/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  X, 
  Send, 
  CheckCircle, 
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
  isDarkMode: boolean;
}

export default function ContactModal({ isOpen, onClose, selectedTier = "Comercial Inteligente", isDarkMode }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    canalPrincipal: "WhatsApp",
    volumeLeads: "Comercial Inteligente",
    crm: "RD_Station",
    mensagemExtra: ""
  });

  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, volumeLeads: selectedTier }));
    }
  }, [isOpen, selectedTier]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.empresa) {
      return;
    }
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  const handleBackToIdle = () => {
    setFormState("idle");
    setFormData({
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      canalPrincipal: "WhatsApp",
      volumeLeads: "Comercial Inteligente",
      crm: "RD_Station",
      mensagemExtra: ""
    });
    onClose();
  };

  const selectClass = `w-full text-xs outline-none focus:border-brand-purple transition-all duration-300 rounded-xl px-3.5 py-3 border pointer-events-auto cursor-pointer ${
    isDarkMode 
      ? "bg-[#13121A] text-white border-white/10" 
      : "bg-white text-slate-800 border-black/10"
  }`;
  const inputClass = `w-full text-xs outline-none focus:border-brand-purple transition-all duration-300 rounded-xl px-3.5 py-2.5 border ${
    isDarkMode 
      ? "bg-[#13121A] text-white border-white/10" 
      : "bg-white text-slate-800 border-black/10"
  }`;
  const textareaClass = `w-full h-20 text-xs outline-none focus:border-brand-purple transition-all duration-300 rounded-xl px-3.5 py-2.5 border resize-none ${
    isDarkMode 
      ? "bg-[#13121A] text-white border-white/10" 
      : "bg-white text-slate-800 border-black/10"
  }`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop glassmorphism blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ cubicBezier: [0.16, 1, 0.3, 1], duration: 0.5 }}
          className={`relative w-full max-w-xl border rounded-2xl overflow-hidden shadow-2xl z-10 transition-all duration-500 ${
            isDarkMode 
              ? "bg-[#09080E] border-white/10 text-white" 
              : "bg-white border-slate-200 text-slate-800"
          }`}
        >
          {/* Header Glow accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-bright to-[#A855F7]" />

          {/* Close Action Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 ${
              isDarkMode ? "text-[#80808a] hover:text-white hover:bg-white/[0.04]" : "text-slate-400 hover:text-slate-800 hover:bg-black/[0.04]"
            }`}
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 md:p-8">

            {formState === "idle" && (
              <div>
                {/* Heading details */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
                  <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-500"}`}>
                    Análise inicial de processo
                  </span>
                </div>

                <h3 className={`font-display font-bold text-2xl mb-2 ${isDarkMode ? "text-white" : "text-slate-950"}`}>
                  Mapear processo sob medida
                </h3>
                
                <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
                  Preencha os dados da sua operação comercial abaixo. Nossa equipe de arquitetura iniciará um diagnóstico para o desenho da sua automação personalizada.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select target Implementation */}
                  <div>
                    <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 font-bold ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                      Modelo de projeto desejado
                    </label>
                    <select
                      value={formData.volumeLeads}
                      onChange={(e) => setFormData({ ...formData, volumeLeads: e.target.value })}
                      className={selectClass}
                    >
                      <option value="Essencial">Essencial — Foco em 1 canal principal</option>
                      <option value="Comercial Inteligente">Comercial Inteligente — IA aplicada e qualificações</option>
                      <option value="Projeto Avançado">Projeto Avançado — Múltiplos CRM e Customizações complexas</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Input name */}
                    <div>
                      <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                        Seu nome completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: Pedro Silva"
                        className={inputClass}
                      />
                    </div>

                    {/* Input empresa */}
                    <div>
                      <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                        Nome da empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ex: LR Digital Ltda"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Input email */}
                    <div>
                      <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                        E-mail corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: pedro@empresa.com.br"
                        className={inputClass}
                      />
                    </div>

                    {/* Phone/WhatsApp */}
                    <div>
                      <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                        WhatsApp corporativo *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="Ex: (11) 98765-4321"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Main intake channel */}
                    <div>
                      <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 font-bold ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                        Canal principal de leads
                      </label>
                      <select
                        value={formData.canalPrincipal}
                        onChange={(e) => setFormData({ ...formData, canalPrincipal: e.target.value })}
                        className={selectClass}
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Site / Landing Page">Site / Landing Page</option>
                        <option value="Anúncios Meta (Instagram)">Anúncios Meta (Instagram)</option>
                        <option value="Tráfego Google Ads / Outros">Google Ads / Outros</option>
                      </select>
                    </div>

                    {/* CRM Integration */}
                    <div>
                      <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 font-bold ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                        Qual CRM utilizam hoje?
                      </label>
                      <select
                        value={formData.crm}
                        onChange={(e) => setFormData({ ...formData, crm: e.target.value })}
                        className={selectClass}
                      >
                        <option value="RD_Station">RD Station CRM</option>
                        <option value="HubSpot">HubSpot CRM</option>
                        <option value="Pipedrive">Pipedrive CRM</option>
                        <option value="Salesforce">Salesforce CRM</option>
                        <option value="Nenhum / Planilhas">Não utilizamos CRM (Planilhas)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Extra */}
                  <div>
                    <label className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 font-bold ${isDarkMode ? "text-[#80808a]" : "text-slate-500"}`}>
                      Observações ou Gargalos do Processo Comercial (Opcional)
                    </label>
                    <textarea
                      value={formData.mensagemExtra}
                      onChange={(e) => setFormData({ ...formData, mensagemExtra: e.target.value })}
                      placeholder="Identifique brevemente quais integrações ou dores de atendimento busca solucionar..."
                      className={textareaClass}
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-brand-purple hover:bg-brand-bright text-white text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BA9DFE]/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <span>Solicitar análise inicial</span>
                      <Send className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    
                    <span className={`block text-[10px] text-center mt-3 ${isDarkMode ? "text-[#80808a]" : "text-slate-400"}`}>
                      Ao enviar, você concorda em compartilhar seus dados de forma confidencial.
                    </span>
                  </div>
                </form>
              </div>
            )}

            {/* Simulated server processing step */}
            {formState === "loading" && (
              <div className="py-24 flex flex-col items-center justify-center text-center">
                <Loader2 className="w-10 h-10 text-brand-purple animate-spin mb-4" />
                <h4 className={`font-display font-semibold text-lg mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  Recebendo dados da operação...
                </h4>
                <p className={`text-xs max-w-xs ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
                  Alocando canais de solicitação e iniciando o mapeamento de integridade de CRM.
                </p>
              </div>
            )}

            {/* Completed Diagnostic success screen */}
            {formState === "success" && (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <h3 className={`font-display font-bold text-2xl mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  Solicitação recebida com sucesso!
                </h3>
                
                <p className={`text-xs max-w-md leading-relaxed mb-6 ${isDarkMode ? "text-[#C4C4CC]" : "text-slate-600"}`}>
                  Olá <strong>{formData.nome.split(' ')[0]}</strong>, o mapeamento inicial dos seus canais de leads e barreira de CRM para a empresa <strong>{formData.empresa}</strong> foi encaminhado ao nosso time comercial.
                </p>

                <div className={`border p-5 rounded-2xl w-full max-w-sm mb-6 text-left space-y-3 font-mono text-[11px] ${
                  isDarkMode ? "bg-[#12111A] border-white/[0.05]" : "bg-slate-50 border-black/[0.05]"
                }`}>
                  <p className={`font-bold text-center border-b pb-2 font-display text-xs mb-1 ${
                    isDarkMode ? "text-white border-white/[0.04]" : "text-slate-900 border-black/[0.04]"
                  }`}>
                    DADOS RECEBIDOS
                  </p>
                  <p className="flex justify-between">
                    <span className={isDarkMode ? "text-[#80808a]" : "text-slate-500"}>Empresa:</span>
                    <span className={isDarkMode ? "text-white" : "text-slate-900 truncate max-w-[200px]"}>{formData.empresa}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className={isDarkMode ? "text-[#80808a]" : "text-slate-500"}>Canal Mapeado:</span>
                    <span className={isDarkMode ? "text-white" : "text-slate-900"}>{formData.canalPrincipal}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className={isDarkMode ? "text-[#80808a]" : "text-slate-500"}>CRM Atual:</span>
                    <span className="text-brand-purple font-bold">{formData.crm.replace('_', ' ')}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className={isDarkMode ? "text-[#80808a]" : "text-slate-500"}>Projeto Desejado:</span>
                    <span className="text-emerald-500 font-bold">{formData.volumeLeads}</span>
                  </p>
                </div>

                <p className={`text-xs max-w-sm mb-8 leading-relaxed ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-500"}`}>
                  Nossos especialistas farão uma <strong>análise inicial</strong> cuidadosa do seu cenário operacional e entrarão em contato via WhatsApp no número <strong>{formData.telefone}</strong> para apresentar sugestões pré-desenhadas de arquitetura e agendar o seu diagnóstico comercial completo.
                </p>

                <button
                  onClick={handleBackToIdle}
                  className="px-8 py-3 rounded-full bg-brand-purple hover:bg-brand-bright hover:shadow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BA9DFE]/50 hover:shadow-brand-purple/20 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Concluir e fechar
                </button>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
