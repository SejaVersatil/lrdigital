/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  CheckCircle2,
  Database,
  FileText,
  MessageSquare,
  MousePointer2,
  Play,
  RotateCcw,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type ScenarioKey = "whatsapp" | "ads" | "lp" | "instagram" | "site";

interface LeadData {
  nome: string;
  canal: string;
  msg: string;
}

interface AIAnalysis {
  qualidade: string;
  prioridade: string;
  intencao: string;
  acao: string;
  resumo: string;
}

interface Scenario {
  label: string;
  icon: React.ReactNode;
  lead: LeadData;
  ai: AIAnalysis;
  reply: string;
  internal: string;
}

interface AutomationDemoSectionProps {
  isDarkMode: boolean;
  onOpenContactModal?: () => void;
}

const SCENARIOS: Record<ScenarioKey, Scenario> = {
  whatsapp: {
    label: "WhatsApp",
    icon: <MessageSquare className="w-4 h-4" />,
    lead: {
      nome: "Mariana Costa",
      canal: "WhatsApp Business",
      msg: "Olá, gostaria de saber valores e disponibilidade para essa semana."
    },
    ai: {
      qualidade: "Lead quente",
      prioridade: "Alta",
      intencao: "Orçamento",
      acao: "Agendamento imediato",
      resumo: "Cliente demonstra interesse direto e urgência por disponibilidade."
    },
    reply: "Olá, Mariana! Recebemos seu contato. Para agilizar, você prefere atendimento pela manhã ou à tarde?",
    internal: "Prioridade alta: responder com opções de horários. Lead pronto para conversão."
  },
  ads: {
    label: "Anúncio",
    icon: <TrendingUp className="w-4 h-4" />,
    lead: {
      nome: "Rafael Martins",
      canal: "Campanha Meta Ads",
      msg: "Vi o anúncio e queria saber se conseguem automatizar meu comercial."
    },
    ai: {
      qualidade: "Lead qualificado",
      prioridade: "Alta",
      intencao: "Automação",
      acao: "Consultoria técnica",
      resumo: "Lead vindo de tráfego pago com dor específica em escala de atendimento."
    },
    reply: "Olá, Rafael! Consigo te mostrar como a IA pode organizar seus leads. Hoje seu volume é maior por WhatsApp ou site?",
    internal: "Lead de anúncio. Priorizar diagnóstico dos canais atuais de captação."
  },
  lp: {
    label: "Landing Page",
    icon: <FileText className="w-4 h-4" />,
    lead: {
      nome: "Camila Rocha",
      canal: "Landing Page B2B",
      msg: "Quero uma análise para entender onde aplicar IA na minha empresa."
    },
    ai: {
      qualidade: "Lead estratégico",
      prioridade: "Alta",
      intencao: "Diagnóstico",
      acao: "Agendar call",
      resumo: "Perfil tomador de decisão solicitando análise estratégica de processos."
    },
    reply: "Olá, Camila! Para preparar uma análise útil, qual sua maior dificuldade hoje: captação ou follow-up?",
    internal: "Lead estratégico pediu diagnóstico. Recomendar conversa consultiva com especialista."
  },
  instagram: {
    label: "Instagram",
    icon: <Users className="w-4 h-4" />,
    lead: {
      nome: "Lucas Silva",
      canal: "Instagram DM",
      msg: "Oi, queria entender melhor como funciona o serviço."
    },
    ai: {
      qualidade: "Lead em descoberta",
      prioridade: "Média",
      intencao: "Informação",
      acao: "Nutrição",
      resumo: "Lead buscando entender escopo e metodologia da solução."
    },
    reply: "Oi, Lucas! Que bom seu interesse. Vou te enviar um breve resumo de como ajudamos empresas a escalar...",
    internal: "Prioridade média: enviar material de apoio e agendar follow-up em 48h."
  },
  site: {
    label: "Site",
    icon: <MousePointer2 className="w-4 h-4" />,
    lead: {
      nome: "Anônimo",
      canal: "Formulário Site",
      msg: "Tenho interesse."
    },
    ai: {
      qualidade: "Lead incompleto",
      prioridade: "Baixa",
      intencao: "Indefinida",
      acao: "Qualificação",
      resumo: "Dados insuficientes. Necessário triagem automática antes do comercial."
    },
    reply: "Olá! Recebemos seu interesse. Para que eu te direcione ao consultor certo, qual o tamanho da sua equipe?",
    internal: "Aguardando enriquecimento de dados via automação. Não acionar comercial ainda."
  }
};

const FLOW_STEPS = [
  "Captação",
  "Dados",
  "IA",
  "CRM",
  "Resposta",
  "Alerta"
];

export default function AutomationDemoSection({ isDarkMode, onOpenContactModal }: AutomationDemoSectionProps) {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("whatsapp");
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [aiRevealed, setAiRevealed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scenario = SCENARIOS[activeScenario];
  const totalSteps = FLOW_STEPS.length;

  const clearAllTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = null;
  }, []);

  const resetDemo = useCallback(() => {
    clearAllTimers();
    setStep(0);
    setIsAnimating(false);
    setAiRevealed(false);
  }, [clearAllTimers]);

  const handleScenarioChange = (key: ScenarioKey) => {
    resetDemo();
    setActiveScenario(key);
  };

  const startDemo = () => {
    resetDemo();
    setStep(1);
    setIsAnimating(true);
  };

  const handleOpenAnalysis = () => {
    if (onOpenContactModal) {
      onOpenContactModal();
      return;
    }

    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToProjects = () => {
    document.getElementById("project-models")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!isAnimating || step <= 0) {
      return;
    }

    if (step < totalSteps) {
      if (step === 3) {
        setAiRevealed(false);
        timerRef.current = setTimeout(() => {
          setAiRevealed(true);
          timerRef.current = setTimeout(() => setStep((current) => current + 1), 1900);
        }, 1500);
      } else {
        const delay = step === 5 ? 2800 : 1700;
        timerRef.current = setTimeout(() => setStep((current) => current + 1), delay);
      }
    } else {
      setIsAnimating(false);
    }

    return () => clearAllTimers();
  }, [clearAllTimers, isAnimating, step, totalSteps]);

  return (
    <section
      id="demo"
      className={`relative overflow-hidden border-t px-4 py-28 md:py-32 transition-colors duration-500 ${
        isDarkMode ? "border-white/[0.04] bg-[#030304]" : "border-black/[0.04] bg-[#F7F8FC]"
      }`}
    >
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] ${isDarkMode ? "noise-overlay" : "noise-overlay-light"}`} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_18%,rgba(124,58,237,0.10),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="mx-auto mb-14 max-w-[740px] text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-purple/15 bg-brand-purple/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#BA9DFE]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Demonstração interativa
          </motion.div>

          <h2
            className={`font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-[48px] ${
              isDarkMode ? "text-white" : "text-[#131122]"
            }`}
          >
            Veja a IA organizando um lead do primeiro contato ao handoff.
          </h2>

          <p
            className={`mx-auto mt-6 max-w-[650px] text-sm leading-relaxed md:text-[15px] ${
              isDarkMode ? "text-[#A1A1AA]" : "text-[#555566]"
            }`}
          >
            Escolha um canal de entrada e acompanhe como a automação coleta dados, interpreta intenção,
            atualiza o CRM, responde o lead e aciona o time comercial.
          </p>
        </div>

        <div
          className={`mb-8 flex flex-col gap-4 rounded-[28px] border p-3 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between ${
            isDarkMode ? "border-white/[0.06] bg-white/[0.025]" : "border-black/[0.05] bg-white shadow-sm"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-1.5">
            {(Object.keys(SCENARIOS) as ScenarioKey[]).map((key) => {
              const isActive = activeScenario === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleScenarioChange(key)}
                  className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/60 ${
                    isActive
                      ? "bg-brand-purple text-white shadow-[0_0_24px_rgba(124,58,237,0.22)]"
                      : isDarkMode
                        ? "text-[#80808a] hover:bg-white/[0.05] hover:text-white"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {SCENARIOS[key].icon}
                  <span>{SCENARIOS[key].label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={startDemo}
              disabled={isAnimating}
              className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-purple px-6 py-3 text-xs font-bold text-white shadow-[0_0_24px_rgba(124,58,237,0.18)] transition-all hover:bg-brand-bright active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55 lg:flex-none"
            >
              <Play className="h-3.5 w-3.5" fill="currentColor" />
              {isAnimating ? "Simulando..." : "Iniciar simulação"}
            </button>

            <button
              type="button"
              onClick={resetDemo}
              className={`min-h-11 rounded-2xl border px-3.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/60 ${
                isDarkMode
                  ? "border-white/10 bg-white/[0.03] text-[#A1A1AA] hover:bg-white/[0.07] hover:text-white"
                  : "border-black/10 bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
              aria-label="Reiniciar simulação"
              title="Reiniciar"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          className={`mb-8 overflow-x-auto rounded-2xl border p-4 ${
            isDarkMode ? "border-white/[0.05] bg-[#08080C]/75" : "border-black/[0.05] bg-white"
          }`}
        >
          <div className="flex min-w-[720px] items-center">
            {FLOW_STEPS.map((label, index) => {
              const stepNumber = index + 1;
              const isCurrent = step === stepNumber;
              const isDone = step > stepNumber;
              const isActive = step >= stepNumber;

              return (
                <React.Fragment key={label}>
                  <button
                    type="button"
                    onClick={() => {
                      clearAllTimers();
                      setStep(stepNumber);
                      setAiRevealed(stepNumber > 3);
                      setIsAnimating(false);
                    }}
                    className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/60"
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-bold transition-all ${
                        isCurrent
                          ? "border-brand-soft bg-brand-purple text-white shadow-[0_0_18px_rgba(124,58,237,0.28)]"
                          : isDone
                            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                            : isActive
                              ? "border-brand-purple/40 bg-brand-purple/10 text-brand-soft"
                              : isDarkMode
                                ? "border-white/[0.06] bg-[#040406] text-[#71717A]"
                                : "border-black/[0.06] bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="h-3.5 w-3.5" /> : stepNumber}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${
                        isCurrent
                          ? "text-brand-soft"
                          : isActive
                            ? isDarkMode ? "text-[#E4E4E7]" : "text-slate-700"
                            : isDarkMode ? "text-[#71717A]" : "text-slate-400"
                      }`}
                    >
                      {label}
                    </span>
                  </button>

                  {index < FLOW_STEPS.length - 1 && (
                    <div className={`mx-3 h-px flex-1 overflow-hidden ${isDarkMode ? "bg-white/[0.06]" : "bg-black/[0.06]"}`}>
                      <div
                        className={`h-full bg-gradient-to-r from-brand-purple to-cyan-400 transition-all duration-500 ${
                          step > stepNumber ? "w-full" : isCurrent ? "w-1/2" : "w-0"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="relative mb-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <WorkflowCard
            step={1}
            activeStep={step}
            title="Captação de lead"
            status="Recebido"
            icon={<MessageSquare className="h-5 w-5" />}
            isDarkMode={isDarkMode}
          >
            <div className={`rounded-2xl border p-4 ${isDarkMode ? "border-white/[0.05] bg-black/20" : "border-black/[0.05] bg-slate-50"}`}>
              <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#71717A]">
                <span>{scenario.lead.canal}</span>
                <span className="text-cyan-400">Agora</span>
              </div>
              <p className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>{scenario.lead.nome}</p>
              <p className={`mt-2 text-xs italic leading-relaxed ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
                "{scenario.lead.msg}"
              </p>
            </div>
          </WorkflowCard>

          <WorkflowCard
            step={2}
            activeStep={step}
            title="Dados organizados"
            status="Processado"
            icon={<Database className="h-5 w-5" />}
            isDarkMode={isDarkMode}
          >
            <div className="space-y-2 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4 font-mono text-[11px] text-emerald-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3" />
                Lead normalizado
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3" />
                Origem identificada
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Pronto para análise IA
              </div>
            </div>
          </WorkflowCard>

          <WorkflowCard
            step={3}
            activeStep={step}
            title="Inteligência artificial"
            status={aiRevealed ? "Classificado" : "Analisando"}
            icon={<Brain className="h-5 w-5" />}
            isDarkMode={isDarkMode}
          >
            <AnimatePresence mode="wait">
              {!aiRevealed && step === 3 ? (
                <motion.div
                  key="ai-loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  <div className="h-8 w-full animate-shimmer rounded-xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] bg-[length:200%_100%]" />
                  <div className="h-16 w-full animate-shimmer rounded-xl bg-[linear-gradient(90deg,transparent,rgba(124,58,237,0.18),transparent)] bg-[length:200%_100%]" />
                </motion.div>
              ) : (
                <motion.div
                  key="ai-content"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: step >= 3 ? 1 : 0.42, scale: 1 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <SignalTile label="Score" value={scenario.ai.qualidade} tone="cyan" />
                    <SignalTile label="Prioridade" value={scenario.ai.prioridade} tone="amber" />
                  </div>
                  <div className={`rounded-xl border p-3 ${isDarkMode ? "border-white/[0.05] bg-white/[0.035]" : "border-black/[0.05] bg-slate-50"}`}>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-brand-soft">Intenção: {scenario.ai.intencao}</p>
                    <p className={`text-[11px] leading-relaxed ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>{scenario.ai.resumo}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </WorkflowCard>

          <WorkflowCard
            step={4}
            activeStep={step}
            title="Pipeline de vendas"
            status="Sincronizado"
            icon={<TrendingUp className="h-5 w-5" />}
            isDarkMode={isDarkMode}
          >
            <div className={`flex items-center gap-4 rounded-2xl border p-4 ${isDarkMode ? "border-white/[0.05] bg-[#06060A]" : "border-black/[0.05] bg-slate-50"}`}>
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 text-emerald-300">
                  <Database className="h-5 w-5" />
                </div>
                <div className="absolute -right-1 -top-1 rounded-full bg-emerald-400 p-0.5 text-[#030304]">
                  <CheckCircle2 className="h-3 w-3" />
                </div>
              </div>
              <div>
                <p className={`text-xs font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Card de negócio</p>
                <p className={`mt-1 text-[10px] ${isDarkMode ? "text-[#71717A]" : "text-slate-500"}`}>{scenario.ai.acao}</p>
              </div>
            </div>
          </WorkflowCard>

          <WorkflowCard
            step={5}
            activeStep={step}
            title="Resposta inteligente"
            status="Enviada"
            icon={<Send className="h-5 w-5" />}
            isDarkMode={isDarkMode}
          >
            <div className="rounded-2xl rounded-tl-sm border border-brand-purple/20 bg-brand-purple/10 p-4">
              <p className={`min-h-[58px] text-xs leading-relaxed ${isDarkMode ? "text-[#E4E4E7]" : "text-slate-700"}`}>
                <TypingText text={scenario.reply} start={step >= 5} />
              </p>
            </div>
          </WorkflowCard>

          <WorkflowCard
            step={6}
            activeStep={step}
            title="Ação recomendada"
            status="Time alertado"
            icon={<Bell className="h-5 w-5" />}
            isDarkMode={isDarkMode}
          >
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.045] p-4">
              <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-amber-300">Atenção comercial</p>
              <p className={`text-xs leading-relaxed ${isDarkMode ? "text-[#D4D4D8]" : "text-slate-700"}`}>{scenario.internal}</p>
            </div>
          </WorkflowCard>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <BenefitCard
            icon={<Zap className="h-5 w-5 text-cyan-300" />}
            title="Respostas mais rápidas"
            description="Leads recebem uma primeira resposta organizada em poucos segundos, sem depender da disponibilidade imediata do time."
            isDarkMode={isDarkMode}
          />
          <BenefitCard
            icon={<Target className="h-5 w-5 text-brand-soft" />}
            title="Contexto para o time"
            description="O comercial recebe intenção, prioridade, origem e próxima ação sugerida antes de assumir a conversa."
            isDarkMode={isDarkMode}
          />
          <BenefitCard
            icon={<BarChart3 className="h-5 w-5 text-emerald-300" />}
            title="Processo padronizado"
            description="Cada canal segue o mesmo critério de qualificação, reduzindo ruído e perda de oportunidade."
            isDarkMode={isDarkMode}
          />
        </div>

        <div
          className={`flex flex-col items-center justify-between gap-5 rounded-[28px] border p-6 text-center md:flex-row md:text-left ${
            isDarkMode ? "border-white/[0.06] bg-[#08080C]" : "border-black/[0.05] bg-white shadow-sm"
          }`}
        >
          <div>
            <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
              Esse fluxo pode ser adaptado aos seus canais, CRM e rotina comercial.
            </p>
            <p className={`mt-1 text-xs leading-relaxed ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>
              A demo mostra a lógica. A implementação real é desenhada em cima do processo da sua operação.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={handleOpenAnalysis}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-xs font-bold text-white transition-all hover:bg-brand-bright focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/60"
            >
              Solicitar análise
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={handleScrollToProjects}
              className={`inline-flex min-h-11 items-center justify-center rounded-full border px-6 py-3 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-purple/60 ${
                isDarkMode ? "border-white/10 bg-white/[0.03] text-[#E4E4E7] hover:bg-white/[0.07]" : "border-black/10 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Ver modelos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalTile({ label, value, tone }: { label: string; value: string; tone: "cyan" | "amber" }) {
  const classes = tone === "cyan"
    ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
    : "border-amber-400/20 bg-amber-400/10 text-amber-300";

  return (
    <div className={`rounded-xl border p-3 ${classes}`}>
      <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-[#71717A]">{label}</p>
      <p className="text-xs font-bold">{value}</p>
    </div>
  );
}

function WorkflowCard({
  children,
  step,
  activeStep,
  title,
  status,
  icon,
  isDarkMode
}: {
  children: React.ReactNode;
  step: number;
  activeStep: number;
  title: string;
  status: string;
  icon: React.ReactNode;
  isDarkMode: boolean;
}) {
  const isCurrent = activeStep === step;
  const isCompleted = activeStep > step;
  const isPending = activeStep > 0 && activeStep < step;
  const isInitial = activeStep === 0;

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isPending ? 0.56 : 1,
        scale: isCurrent ? 1.015 : 1,
        borderColor: isCurrent
          ? "rgba(192, 132, 252, 0.44)"
          : isCompleted
            ? "rgba(52, 211, 153, 0.22)"
            : isDarkMode
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(15, 23, 42, 0.08)"
      }}
      className={`relative flex min-h-[248px] flex-col rounded-[28px] border p-5 backdrop-blur-sm transition-shadow duration-500 ${
        isDarkMode ? "bg-white/[0.025]" : "bg-white"
      } ${isCurrent ? "z-20 shadow-[0_0_42px_rgba(124,58,237,0.12)]" : "z-10"} ${
        isInitial && step === 1 ? "ring-1 ring-brand-purple/30" : ""
      }`}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors ${
            isCurrent
              ? "bg-brand-purple text-white shadow-[0_0_22px_rgba(124,58,237,0.22)]"
              : isCompleted
                ? "bg-emerald-400/10 text-emerald-300"
                : isDarkMode
                  ? "bg-white/[0.04] text-[#A1A1AA]"
                  : "bg-slate-100 text-slate-500"
          }`}
        >
          {icon}
        </div>

        <div className="text-right">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#71717A]">Etapa 0{step}</p>
          <div
            className={`flex items-center justify-end gap-1.5 text-[10px] font-black uppercase tracking-wider ${
              isCompleted ? "text-emerald-300" : isCurrent ? "text-brand-soft" : "text-[#71717A]"
            }`}
          >
            {isCompleted && <CheckCircle2 className="h-3 w-3" />}
            {status}
          </div>
        </div>
      </div>

      <h4 className={`mb-4 font-display text-lg font-bold leading-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        {title}
      </h4>

      <div className="flex-grow">{children}</div>
    </motion.div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
  isDarkMode
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDarkMode: boolean;
}) {
  return (
    <div
      className={`rounded-[24px] border p-6 transition-all ${
        isDarkMode
          ? "border-white/[0.05] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
          : "border-black/[0.05] bg-white hover:border-black/10"
      }`}
    >
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${isDarkMode ? "bg-white/[0.04]" : "bg-slate-100"}`}>
        {icon}
      </div>
      <h4 className={`mb-2 text-base font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>{title}</h4>
      <p className={`text-xs leading-relaxed ${isDarkMode ? "text-[#A1A1AA]" : "text-slate-600"}`}>{description}</p>
    </div>
  );
}

function TypingText({ text, start }: { text: string; start: boolean }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!start) {
      setContent("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setContent(text.slice(0, index));
      index += 1;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [start, text]);

  return (
    <span className="relative">
      {content}
      {start && content.length < text.length && (
        <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-brand-soft align-middle" />
      )}
    </span>
  );
}
