import type{ NewsItem, EventItem } from "./types";

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Obras de requalificação do centro histórico",
    date: "24-11-2025",
    summary: "Intervenção nas vias pedonais e iluminação pública da zona histórica.",
    content:
      "As obras de requalificação do centro histórico incluem a melhoria das vias pedonais, renovação da iluminação pública e criação de novas zonas de estadia.\n\nO objetivo é tornar o centro mais acessível, seguro e atrativo para residentes e visitantes.",
    imageUrl: "https://picsum.photos/seed/obras/400/200",
  },
  {
    id: 2,
    title: "Abertas inscrições para atividades de Natal",
    date: "20-11-2025",
    summary: "Programa para famílias e crianças com várias iniciativas culturais.",
    content:
      "Estão abertas as inscrições para o programa de atividades de Natal, com oficinas, espetáculos e iniciativas para famílias e crianças.\n\nAs inscrições podem ser efetuadas online ou presencialmente no Balcão Único.",
    imageUrl: "https://picsum.photos/seed/natal/400/200",
  },
  {
    id: 3,
    title: "Novo horário de atendimento do Balcão Único",
    date: "15-11-2025",
    summary: "Alargamento do horário em dias úteis e abertura ao sábado de manhã.",
    content:
      "O Balcão Único da Câmara passa a ter um horário alargado em dias úteis e a abrir ao sábado de manhã.\n\nPretende-se facilitar o atendimento a municipios com horários de trabalho mais rígidos.",
    imageUrl: "https://picsum.photos/seed/balcao/400/200",
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Feira do Livro Municipal",
    date: "12–18-12-2025",
    summary: "Largo principal com expositores e atividades culturais.",
  },
  {
    id: 2,
    title: "Concerto de Natal",
    date: "23-12-2025",
    summary: "Concerto no auditório municipal com entrada gratuita.",
  },
  {
    id: 3,
    title: "Caminhada Solidária",
    date: "10-01-2026",
    summary: "Percurso urbano com recolha de bens alimentares.",
  },
];
