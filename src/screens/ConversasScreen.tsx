/*import { useEffect, useState } from "react";
import type { ScreenProps } from "../types";

type ChatListItem = { id: string; title: string };

type Props = ScreenProps & {
  onOpenChat: (chatId: string) => void;
};

export default function ContactsScreen({ onOpenChat, goHome }: Props) {
  const [chats, setChats] = useState<ChatListItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}chat/index.json`)
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
}*/


import { useEffect, useState } from "react";
import type { ScreenProps } from "../types";

type ChatListItem = { id: string; title: string };

type Props = ScreenProps & {
  onOpenChat: (chatId: string) => void;
};

export default function ContactsScreen({ onOpenChat, goHome }: Props) {
  const [chats, setChats] = useState<ChatListItem[]>([]);

  const PASSWORD = "..1212"; // muda aqui a password

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}chat/index.json`)
      .then((r) => r.json())
      .then(setChats);
  }, []);

  function handleOpenChat(chatId: string, index: number) {
    // primeiro chat livre
    if (index === 0) {
      onOpenChat(chatId);
      return;
    }

    // restantes pedem password
    const input = prompt("Escreva a password:");

    if (input === PASSWORD) {
      onOpenChat(chatId);
    } else {
      alert("Password incorreta");
    }
  }

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
        {chats.map((c, index) => (
          <button
            key={c.id}
            onClick={() => handleOpenChat(c.id, index)}
            style={{
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 12,
              textAlign: "left",
              background: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{c.title}</span>

            {index !== 0 && <span>🔒</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
