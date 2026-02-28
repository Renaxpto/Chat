import React from "react";
import MessageBubble, { type Msg } from "./MessageBubble";

export default function ChatView({ chatId, messages }: { chatId: string; messages: Msg[] }) {
  return (
    <div style={chatStyles.viewport}>
      <div style={chatStyles.wallpaper} />
      <div style={chatStyles.list}>
        {messages.map((m) => (
          <MessageBubble key={m.id} chatId={chatId} msg={m} />
        ))}
      </div>
    </div>
  );
}

const chatStyles: Record<string, React.CSSProperties> = {
  viewport: {
    position: "relative",
    flex: 1,
    overflow: "auto",
    padding: 12,
    background: "#e5ddd5",
  },
  wallpaper: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
    backgroundSize: "18px 18px",
    pointerEvents: "none",
    opacity: 0.35,
  },
  list: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingBottom: 18,
  },
};
