/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Play, 
  RotateCcw, 
  MessageSquare, 
  BrainCircuit, 
  Database, 
  Bell, 
  Bot,
  Clock,
  Briefcase
} from "lucide-react";

interface StepDetail {
  id: number;
  label: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface AutomationDemoSectionProps {
  isDarkMode: boolean;
}

export default function AutomationDemoSection({ isDarkMode }: AutomationDemoSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [typingText, setTypingText] = useState("");
  const fullMessage = "Olá, Mariana! Obrigado pelo contato. Posso te ajudar com as opções disponíveis para essa semana. Você prefere atendimento pela manhã ou à tarde?";

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 5) {
            setIsPlaying(false);
            return 5;
          }
          return prev + 1;
        });
      }, 3500); // 3.5 seconds per step
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Handle typing effect for the generated message when step 4 is active
  useEffect(() => {
    let index = 0;
    if (activeStep >= 4) {
      setTypingText("");
      const typeTimer = setInterval(() => {
        if (index < fullMessage.length) {
          setTypingText((prev) => prev + fullMessage.charAt(index));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 20);
      return () => clearInterval(typeTimer);
    } else {
      setTypingText("");
    }
  }, [activeStep]);

  const handleStart = () => {
    if (activeStep === 5) {
      setActiveStep(0);
    }
    setIsPlaying(true);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStep(0);
    setTypingText("");
  };

  const getSimulationStatus = () => {
    if (isPlaying) return "Simulação ativa";
    if (activeStep === 5) return "Fluxo concluído";
    if (activeStep === 0) return "Simulação pronta";
    return "Simulação ativa";
  };

  const steps: StepDetail[] = [
    {
      id: 0,
      label: "Entrada",
      icon: <MessageSquare className="w-3.5 h-3.5" />,
      title: "Lead recebido",
      desc: "Mensagem unificada vinda do WhatsApp comercial."
    },
    {
      id: 1,
      label: "Extração",
      icon: <Database className="w-3.5 h-3.5" />,
      title: "Dados organizados",
      desc: "Os dados de contato do lead são organizados rapidamente."
    },
    {
      id: 2,
      label: "Qualificação",
      icon: <BrainCircuit className="w-3.5 h-3.5" />,
      title: "IA qualifica",
      desc: "A inteligência interpreta o nível de maturidade e urgência comercial."
    },
    {
      id: 3,
      label: "Sincronia",
      icon: <Briefcase className="w-3.5 h-3.5" />,
      title: "CRM atualizado",
      desc: "Negócio criado na coluna identificada do CRM de forma automática."
    },
    {
      id: 4,
      label: "Resposta",
      icon: <Bot className="w-3.5 h-3.5" />,
      title: "Resposta enviada",
      desc: "Primeiro contato de acompanhamento enviado à cliente."
    },
    {
      id: 5,
      label: "Alerta",
      icon: <Bell className="w-3.5 h-3.5" />,
      title: "Time acionado",
      desc: "Notificação urgente com resumo completo enviado ao time humano."
    }
  ];

  return (
    <section id="demo" className={`relative py-32 overflow-hidden px-4 border-t transition-colors duration-500 ${
      isDarkMode 
        ? "border-white/[0.04] bg-[#030304]" 
        : "border-black/[0.04] bg-[#FAF9F5]"
    }`}>
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA9DFE] bg-brand-purple/10 border border-brand-purple/15 mb-5">
            Demonstração
          </div>
          
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-none mb-6 transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-[#131122]"
          }`}>
            Fluxo de automação simulado em tempo real.
          </h2>
          
          <p className={`text-sm md:text-[15px] leading-relaxed max-w-[585px] mx-auto transition-colors duration-500 ${
            isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
          }`}>
            Abaixo, veja a simulação do trajeto completo de um lead, do primeiro contato ao handoff comercial estruturado.
          </p>
        </div>

        {/* Demo Stage */}
        <div className="max-w-4xl mx-auto">
          
          {/* Timeline Nodes Navigation */}
          <div className={`p-4 border rounded-2xl mb-6 overflow-x-auto transition-colors duration-500 ${
            isDarkMode ? "border-white/[0.05] bg-[#08080C]/80" : "border-black/[0.05] bg-white shadow-sm"
          }`}>
            <div className="flex items-center justify-between min-w-[650px] px-2">
              {steps.map((st, idx) => {
                const isSelected = activeStep >= idx;
                const isCurrent = activeStep === idx;
                
                return (
                  <div 
                    key={st.id} 
                    className="flex items-center flex-1 last:flex-initial"
                  >
                    <button
                      onClick={() => {
                        setActiveStep(idx);
                        setIsPlaying(false);
                      }}
                      className="flex flex-col items-center gap-2 cursor-pointer outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 rounded-full group animate-none"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        isCurrent 
                          ? "bg-brand-purple text-white border-brand-bright shadow-[0_0_15px_rgba(124,58,237,0.3)] scale-105" 
                          : isSelected 
                          ? "bg-brand-purple/20 text-brand-purple border-brand-purple/50" 
                          : isDarkMode 
                          ? "bg-[#040406] text-[#71717A] border-white/[0.05] group-hover:border-white/12"
                          : "bg-slate-100 text-slate-500 border-black/[0.05] group-hover:border-black/12"
                      }`}>
                        {st.icon}
                      </div>
                      
                      <div className="text-center">
                        <span className={`block text-[10px] font-mono font-semibold uppercase ${
                          isCurrent 
                            ? "text-brand-purple" 
                            : isSelected 
                            ? (isDarkMode ? "text-[#E4E4E7]" : "text-slate-800") 
                            : (isDarkMode ? "text-[#71717A]" : "text-slate-400")
                        }`}>
                          {st.label}
                        </span>
                      </div>
                    </button>

                    {/* Node connector line */}
                    {idx < steps.length - 1 && (
                      <div className={`h-[1px] flex-1 mx-3 relative overflow-hidden ${
                        isDarkMode ? "bg-white/[0.04]" : "bg-black/[0.04]"
                      }`}>
                        {isSelected && (
                          <div className={`absolute inset-0 bg-brand-purple transition-all duration-1000 ${
                            isCurrent ? "w-1/2 animate-pulse" : "w-full"
                          }`} />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simulated Screen Dashboard mockup */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl p-8 relative overflow-hidden min-h-[440px] border transition-all duration-500 ${
            isDarkMode 
              ? "shadow-2xl border-white/[0.05] bg-[#08080C]" 
              : "shadow-xl border-black/[0.05] bg-white text-slate-800"
          }`}>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-brand-purple/10 via-[#8B5CF6]/30 to-transparent" />
            
            {/* Interactive Control Sidebar Panel */}
            <div className={`lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 lg:pr-6 ${
              isDarkMode ? "border-white/[0.04]" : "border-black/[0.06]"
            }`}>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                    isPlaying ? "bg-brand-purple" : activeStep === 5 ? "bg-emerald-500" : "bg-amber-500"
                  }`} />
                  <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                    isDarkMode ? "text-[#71717A]" : "text-slate-400"
                  }`}>
                    {getSimulationStatus()}
                  </span>
                </div>

                <h3 className={`font-display font-semibold text-lg ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}>
                  {steps[activeStep].title}
                </h3>
                
                <p className={`text-xs leading-relaxed ${
                  isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"
                }`}>
                  {steps[activeStep].desc}
                </p>

                <div className={`py-2 px-3 border rounded-xl flex items-center gap-1.5 text-[9px] font-mono transition-colors duration-500 ${
                  isDarkMode 
                    ? "border-white/[0.04] bg-white/[0.01] text-[#71717A]" 
                    : "border-black/[0.05] bg-slate-50 text-slate-500"
                }`}>
                  <Clock className="w-3.5 h-3.5 text-brand-purple" />
                  <span>Próxima ação sugerida</span>
                </div>
              </div>

              {/* Simulation player control actions */}
              <div className="flex items-center gap-2 mt-8">
                <button
                  onClick={handleStart}
                  className={`flex-1 py-2.5 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 cursor-pointer ${
                    isPlaying 
                      ? isDarkMode 
                        ? "bg-brand-purple/20 text-[#D8B4FE] border border-brand-purple/30"
                        : "bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                      : "bg-[#7C3AED] text-white hover:bg-[#8B5CF6] shadow-lg shadow-brand-purple/10"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 animate-none" />
                  <span>{isPlaying ? "Simulando..." : activeStep === 5 ? "Reiniciar" : "Iniciar passo a passo"}</span>
                </button>

                <button
                  onClick={handleReset}
                  className={`p-2.5 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/50 cursor-pointer ${
                    isDarkMode 
                      ? "border-white/8 bg-white/[0.02] hover:bg-white/[0.06] text-[#A1A1AA]" 
                      : "border-black/10 bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                  aria-label="Reiniciar simulação"
                  title="Resetar"
                >
                  <RotateCcw className="w-3.5 h-3.5 animate-none" />
                </button>
              </div>

            </div>

            {/* Interactive Visual Stage panels */}
            <div className="lg:col-span-8 flex flex-col gap-4 justify-center">
              
              {/* Box Phase 1: Lead recebido */}
              <div className={`transition-all duration-300 rounded-2xl p-5 border text-xs flex flex-col gap-2 relative overflow-hidden ${
                activeStep >= 0 
                  ? isDarkMode 
                    ? "bg-[#100E17] border-brand-purple/20" 
                    : "bg-[#FAF8FF] border-brand-purple/20"
                  : "opacity-20 border-transparent bg-transparent"
              }`}>
                {/* Channel visual */}
                <div className="flex items-center justify-between text-[9px] font-mono text-[#71717A]">
                  <div className="flex items-center gap-2">
                    <span className={`font-sans font-medium ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>WhatsApp Comercial</span>
                  </div>
                  <span>14:32</span>
                </div>

                <div className="flex items-start gap-3 mt-1.5">
                  <div className="w-7 h-7 rounded-full bg-brand-purple/20 flex items-center justify-center text-[10px] font-bold text-[#D8B4FE] border border-brand-purple/30">
                    MC
                  </div>
                  <div className={`flex-1 p-3 rounded-xl border ${
                    isDarkMode ? "border-white/[0.04] bg-[#040406]/60" : "border-black/[0.05] bg-[#FFFFFF]"
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Mariana Costa</span>
                      <span className="text-[8px] text-[#71717A] font-mono">Lead</span>
                    </div>
                    <p className={`italic text-[11px] ${isDarkMode ? "text-[#E4E4E7]" : "text-slate-700"}`}>
                      “Olá, queria saber valores e disponibilidade para essa semana.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Box Phase 2 & 3: Dados & Inteligência Artificial de Qualificação */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Data Extraction */}
                <div className={`transition-all duration-300 rounded-2xl p-4 border text-xs flex flex-col gap-2 ${
                  activeStep >= 1 
                    ? isDarkMode 
                      ? "bg-[#0A0A0F] border-white/[0.05]" 
                      : "bg-[#F8F9FA] border-black/[0.05]"
                    : "opacity-20"
                }`}>
                  <div className={`flex items-center justify-between text-[9px] font-mono border-b pb-1 ${
                    isDarkMode ? "text-[#71717A] border-white/[0.04]" : "text-slate-500 border-black/[0.05]"
                  }`}>
                    <span>DADOS ESTRUTURADOS</span>
                    <span className="text-emerald-500 font-semibold">HIGIENIZADO</span>
                  </div>

                  <div className={`space-y-1.5 font-mono text-[9px] ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? "text-[#71717A]" : "text-slate-400"}>Nome:</span>
                      <span className={isDarkMode ? "text-white" : "text-slate-900"}>Mariana Costa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? "text-[#71717A]" : "text-slate-400"}>Canal:</span>
                      <span className={isDarkMode ? "text-white" : "text-slate-900"}>WhatsApp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? "text-[#71717A]" : "text-slate-400"}>Origem:</span>
                      <span className="text-brand-purple font-medium">Contato Direto</span>
                    </div>
                  </div>
                </div>

                {/* AI Classifier */}
                <div className={`transition-all duration-300 rounded-2xl p-4 border text-xs flex flex-col gap-2 ${
                  activeStep >= 2
                    ? isDarkMode 
                      ? "bg-[#0E0B16] border-brand-purple/30" 
                      : "bg-[#FAF5FF] border-brand-purple/25"
                    : "opacity-20"
                }`}>
                  <div className={`flex items-center justify-between text-[9px] font-mono border-b pb-1 ${
                    isDarkMode ? "border-white/[0.04] text-[#D8B4FE]" : "border-black/[0.05] text-brand-purple"
                  }`}>
                    <span>IA QUALIFICA</span>
                    <span className="text-brand-purple font-medium">ANÁLISE IA</span>
                  </div>

                  <div className="space-y-1.5 mt-1">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-red-950/20 text-red-500 border border-red-900/40 font-mono text-[8.5px]">
                        Qualidade: Lead quente
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-950/20 text-amber-500 border border-amber-900/40 font-mono text-[8.5px]">
                        Prioridade: Alta
                      </span>
                    </div>

                    <p className={`text-[9px] leading-tight ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
                      Intenção: Orçamento / Agendamento. Próxima ação: Responder com opções de horário.
                    </p>
                  </div>
                </div>

              </div>

              {/* Box Phase 4: CRM e Resposta Pronta de IA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* CRM pipeline synchronization */}
                <div className={`transition-all duration-300 rounded-2xl p-4 border text-xs flex flex-col gap-2 ${
                  activeStep >= 3
                    ? isDarkMode 
                      ? "bg-[#100E17] border-white/[0.05]" 
                      : "bg-[#F8FAF9] border-black/[0.05]"
                    : "opacity-20"
                }`}>
                  <div className={`flex items-center justify-between text-[9px] font-mono border-b pb-1 ${
                    isDarkMode ? "text-[#71717A] border-white/[0.04]" : "text-slate-500 border-black/[0.05]"
                  }`}>
                    <span>CRM ATUALIZADO</span>
                    <span className="text-emerald-500 font-semibold">SINCRONIZADO</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-[9.5px]">
                      <span className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Mariana Costa</span>
                      <span className="text-brand-purple font-mono font-medium">Novo Negócio</span>
                    </div>
                    <span className={`text-[8.5px] px-1.5 py-0.5 rounded border font-mono w-fit ${
                      isDarkMode ? "bg-[#040406] text-[#6DF0C2] border-white/[0.04]" : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}>
                      Funil de Vendas atualizado
                    </span>
                  </div>
                </div>

                {/* Intelligent reply formulation auto draft */}
                <div className={`transition-all duration-300 rounded-2xl p-4 border text-xs flex flex-col gap-2 relative ${
                  activeStep >= 4
                    ? isDarkMode 
                      ? "bg-[#0B0B11] border-brand-purple/20" 
                      : "bg-[#FAF9FF] border-brand-purple/15"
                    : "opacity-20"
                }`}>
                  <div className={`flex items-center justify-between text-[9px] font-mono border-b pb-1 ${
                    isDarkMode ? "border-white/[0.04]" : "border-black/[0.05]"
                  }`}>
                    <span className="text-brand-purple">RESPOSTA ENVIADA</span>
                    <span className="text-[#71717A]">AUTOMÁTICO</span>
                  </div>

                  <div className={`p-2 rounded text-[9px] font-sans border min-h-[46px] ${
                    isDarkMode 
                      ? "bg-[#040406]/60 text-zinc-300 border-white/[0.03]" 
                      : "bg-white text-slate-700 border-black/[0.05]"
                  }`}>
                    {activeStep >= 4 ? (
                      <p className="leading-relaxed">
                        {typingText}
                      </p>
                    ) : (
                      <span className="text-[#71717A] italic">Aguardando gatilho...</span>
                    )}
                  </div>
                </div>

              </div>

              {/* Box Phase 5: Handoff para o humano, Alertas do time comercial */}
              <div className={`transition-all duration-300 rounded-2xl p-4 border text-xs flex items-center justify-between ${
                activeStep >= 5
                  ? "bg-brand-purple/10 border-brand-purple/35 text-white" 
                  : "opacity-20"
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    activeStep >= 5 ? "bg-brand-purple text-white animate-pulse" : "bg-white/[0.01]"
                  }`}>
                    <Bell className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-white">
                      Time acionado
                    </h4>
                    <p className="text-[10px] text-[#A1A1AA] max-w-xl mt-0.5">
                      Lead quente recebido pelo WhatsApp. Priorizar contato e registrar interesse em orçamento/agendamento.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
