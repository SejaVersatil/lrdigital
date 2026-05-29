/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  text: string;
  badge: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  text: string;
  iconName: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  timeframe: string;
  badge: string;
  status: "completed" | "active" | "pending";
}

export interface ProjectModel {
  id: string;
  name: string;
  tagline: string;
  scope: string;
  bullets: string[];
  ctaText: string;
  badge?: string;
  isRecommended?: boolean;
}

export const solutionsData: SolutionItem[] = [
  {
    id: "captacao",
    category: "Entrada de Leads",
    title: "Captação e organização de leads",
    text: "Centralize contatos vindos de WhatsApp, site, formulários, anúncios e redes sociais em um fluxo único, organizado de forma rápida.",
    badge: "Integração Multicanal"
  },
  {
    id: "qualificacao",
    category: "Inteligência Artificial",
    title: "Qualificação com IA",
    text: "A IA entra em ação segundos após a captação. Ela analisa a primeira mensagem do lead, extrai intenções de compra, urgência e contexto da empresa para indicar a prioridade máxima.",
    badge: "Processamento de Linguagem"
  },
  {
    id: "crm",
    category: "Sincronização",
    title: "CRM e rotina comercial",
    text: "Chega de digitação manual. Negócios, tarefas personalizadas e alertas de follow-up prioritários são criados com mais agilidade no CRM da sua empresa.",
    badge: "Menos trabalho manual"
  },
  {
    id: "followup",
    category: "Atendimento Inteligente",
    title: "Follow-up e handoff humano",
    text: "A IA prepara respostas iniciais inteligentes e alerta o vendedor com um resumo organizado do que o lead quer. Se necessário, mantém o acompanhamento até o handoff humano.",
    badge: "Handoff estruturado"
  }
];

export const benefitsData: BenefitItem[] = [
  {
    id: "beneficio-1",
    title: "Menos perda de oportunidades",
    text: "Todos os leads recebem uma primeira resposta mais rápida e consistente. Nenhuma mensagem cai no esquecimento comercial ou se perde no fim de semana.",
    iconName: "Zap"
  },
  {
    id: "beneficio-2",
    title: "Mais contexto para o time",
    text: "O vendedor inicia o contato sabendo exatamente qual é a dor, o histórico da análise inicial e as necessidades comerciais do lead organizadas de forma limpa pela IA.",
    iconName: "BrainCircuit"
  },
  {
    id: "beneficio-3",
    title: "Processo padronizado",
    text: "Cada oportunidade segue regras de negócio definidas, garantindo que o tom de voz e as etapas de passagem de bastão sejam mais consistentes.",
    iconName: "Target"
  },
  {
    id: "beneficio-4",
    title: "Menos tarefas manuais",
    text: "Cadastros redundantes, lembretes de agenda, movimentação de cards e envios e lembretes automatizados podem ser automatizados.",
    iconName: "Workflow"
  },
  {
    id: "beneficio-5",
    title: "Atendimento mais consistente",
    text: "Elimine gargalos operacionais e atenda leads em escala mantendo a mesma qualidade e agilidade técnica, mesmo com aumento no volume de contatos.",
    iconName: "CheckCircle2"
  },
  {
    id: "beneficio-6",
    title: "Melhor acompanhamento",
    text: "Contatos que demonstraram interesse morno recebem estímulos automatizados estruturados para reaquecer e retornar à mesa de negociação.",
    iconName: "TrendingUp"
  }
];

export const processStepsData: ProcessStep[] = [
  {
    id: 1,
    title: "Diagnóstico",
    description: "Mapeamos detalhadamente seus canais de leads, gargalos comerciais, rotina de atendentes e dores do CRM.",
    timeframe: "Semana 1",
    badge: "Análise inicial",
    status: "completed"
  },
  {
    id: 2,
    title: "Desenho do Fluxo",
    description: "Desenhamos o blueprint visual da automação: gatilhos, filtros de triagem humana, integrações e árvore de decisão.",
    timeframe: "Semana 2",
    badge: "Mapeamento do processo",
    status: "completed"
  },
  {
    id: 3,
    title: "IA com Limites Claros",
    description: "Configuramos prompts de IA, filtros de segurança, tom de voz e categorização para que o comportamento seja consultivo e seguro.",
    timeframe: "Semana 3",
    badge: "Arquitetura da automação",
    status: "active"
  },
  {
    id: 4,
    title: "Implementação e Testes",
    description: "Construímos as conexões reais, realizamos simulações rigorosas e homologamos todo o ecossistema com o seu CRM.",
    timeframe: "Semana 4-5",
    badge: "Testes e validação",
    status: "pending"
  },
  {
    id: 5,
    title: "Acompanhamento e Otimização",
    description: "Damos início à operação real, monitoramos o comportamento do time, afinamos os modelos de IA e otimizamos semanalmente.",
    timeframe: "Contínuo",
    badge: "Acompanhamento e otimização",
    status: "pending"
  }
];

export const projectModelsData: ProjectModel[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Para empresas que buscam estruturar seu primeiro canal automatizado.",
    scope: "Focado em um canal principal para reduzir atrasos no atendimento inicial.",
    bullets: [
      "Captação de leads de um canal principal (ex: WhatsApp)",
      "Estruturação e limpeza de dados recebidos",
      "Distribuição inteligente de leads para o time",
      "Alerta interno para o time comercial",
      "Integração automatizada com CRM, quando fizer sentido para a operação"
    ],
    ctaText: "Começar pelo essencial",
    badge: "Estruturação"
  },
  {
    id: "inteligente",
    name: "Comercial Inteligente",
    tagline: "Para operações comerciais que precisam qualificar leads antes do contato humano.",
    scope: "Une automação multicanal avançada com Inteligência Artificial generativa.",
    bullets: [
      "Multicanais de captação conectados simultaneamente",
      "Qualificação em tempo real por IA com extração de perfil",
      "Distribuição avançada por regras de prioridade",
      "Preparação automática da resposta de atendimento comercial",
      "Alertas do time com resumo organizado do lead",
      "Follow-up inteligente até a ativação humana (Handoff)"
    ],
    ctaText: "Solicitar análise comercial",
    badge: "Mais Procurado",
    isRecommended: true
  },
  {
    id: "avancado",
    name: "Projeto Avançado",
    tagline: "Para corporações com múltiplos fluxos, bases de dados legadas e customização de IA.",
    scope: "Arquitetura sob medida para operações com maior volume de leads e rotinas complexas.",
    bullets: [
      "Conexão de CRM corporativo próprio ou ERP legado",
      "Múltiplos fluxos com IA executando etapas paralelas",
      "Filtros finos de qualificação, score e regras e boas práticas de dados",
      "Painel analítico customizado em tempo real",
      "Sessões de treinamento dedicadas para a liderança comercial",
      "Suporte VIP de arquitetura e evolução mensal contínua"
    ],
    ctaText: "Falar sobre projeto",
    badge: "Enterprise"
  }
];

export const trustPills = [
  "Clínicas Médicas",
  "Imobiliárias de Alto Padrão",
  "Educação & Cursos",
  "Tecnologia e Serviços B2B",
  "Consultorias de Negócios"
];
