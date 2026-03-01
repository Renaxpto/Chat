import { useEffect, useState } from "react";
import type { ScreenProps } from "../types";

type ChatListItem = { id: string; title: string };

type Props = ScreenProps & {
  onOpenChat: (chatId: string) => void;
};

export default function ContactsScreen({ onOpenChat, goHome }: Props) {
  const [chats, setChats] = useState<ChatListItem[]>([]);

  useEffect(() => {
    fetch("/chat/index.json")
      .then((r) => r.json())
      .then(setChats);
  }, []);

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: 16 }}>
      <button
        onClick={goHome}
        style={{
          border: "1px solid #ddd",
          borderRadius: 10,
          padding: "6px 10px",
          background: "white",
          cursor: "pointer",
          marginBottom: 10,
        }}
      >
        ← Voltar
      </button>

      <h2>Chats</h2>

      <div style={{ display: "grid", gap: 10 }}>
        {chats.map((c) => (
          <button
            key={c.id}
            onClick={() => onOpenChat(c.id)}
            style={{
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 12,
              textAlign: "left",
              background: "white",
              cursor: "pointer",
            }}
          >
            {c.title}
          </button>
        ))}
      </div>
    </div>
  );
}