// src/types.ts

export type Screen =
  | "home"
  | "news"
  | "newsDetail"
  | "events"
  | "eventDetail"
  | "contacts"
  | "services"
  | "requestsList"
  | "requestForm"
  | "payments"
  | "transparency"
  | "documents"
  | "tourism"
  | "report"
  | "onlineContact"
  | "chat"
  | "profile";  


export type NavFn = (screen: Screen) => void;

export type ScreenProps = {
  goHome: () => void;
  goBack: () => void;
  goTo: (next: Screen) => void;
  setSelectedChatId?: (id: string) => void; // opcional, se preferires assim
};

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  imageUrl: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  summary: string;
}
