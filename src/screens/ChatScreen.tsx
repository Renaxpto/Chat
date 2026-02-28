import { useEffect, useMemo, useState } from "react";
import type { ScreenProps } from "../types";
import ChatView from "../components/ChatView";
import type { Msg } from "../components/MessageBubble";

type ChatJson = {
  schema: string;
  sourceFile: string;
  messageCount: number;
  messages: Msg[];
};

type Props = ScreenProps & { chatId: string };

export default function ChatScreen({ chatId, goBack }: Props) {
  const [chat, setChat] = useState<ChatJson | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}chat/${encodeURIComponent(chatId)}.json`)
  .then((r) => r.json())
  .then(setChat);
  }, [chatId]);

  const title = useMemo(() => chatId ?? "Chat", [chatId]);

  if (!chat) return <div style={{ padding: 16 }}>A carregar…</div>;

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={goBack} style={{ border: "1px solid #ddd", borderRadius: 10, padding: "6px 10px", background: "white", cursor: "pointer" }}>
          ←
        </button>
        <strong>{title}</strong>
      </header>

      <ChatView chatId={chatId} messages={chat.messages} />
    </div>
  );
}
