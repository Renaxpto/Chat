import React from "react";

export type Msg = {
  id: string;
  timestamp?: string;
  date?: string;
  time?: string;
  author?: string;
  type:
    | "text"
    | "image"
    | "photo"
    | "video"
    | "audio"
    | "system"
    | "call"
    | "deleted"
    | "raw"
    | "file"
    | "document";
  content?: string;
  raw?: string;
  attachment?: { fileName: string };
};

const MY_NAME = "Elita";

const PALETTE = [
  "#e91e63",
  "#3f51b5",
  "#009688",
  "#ff9800",
  "#9c27b0",
  "#2196f3",
  "#4caf50",
  "#795548",
];

function hashColor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

function mediaUrl(chatId: string, fileName: string) {
  return `${import.meta.env.BASE_URL}media/${encodeURIComponent(chatId)}/${encodeURIComponent(fileName)}`;
}

function extractAttachmentName(text?: string) {
  if (!text) return undefined;
  const m = text.match(/<anexo:\s*([^>]+)>/i);
  return m?.[1]?.trim();
}

function isPdf(fileName?: string) {
  return !!fileName && /\.pdf$/i.test(fileName);
}

export default function MessageBubble({
  chatId,
  msg,
  onOpenPdf,
}: {
  chatId: string;
  msg: Msg;
  onOpenPdf?: (pdf: { src: string; fileName: string } | null) => void;
}) {
  const isSystem = msg.type === "system" || msg.type === "call";
  if (isSystem) {
    return <div style={styles.systemPill}>{msg.content ?? msg.raw ?? ""}</div>;
  }

  const author = (msg.author ?? "").trim();
  const mine = author.toLowerCase() === MY_NAME.toLowerCase();

  const rowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: mine ? "flex-end" : "flex-start",
  };

  const bubbleStyle: React.CSSProperties = {
    maxWidth: "78%",
    background: mine ? "#dcf8c6" : "#ffffff",
    borderRadius: 16,
    borderTopRightRadius: mine ? 6 : 16,
    borderTopLeftRadius: mine ? 16 : 6,
    padding: "8px 10px 6px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
  };

  const fileName =
    msg.attachment?.fileName ||
    extractAttachmentName(msg.content) ||
    extractAttachmentName(msg.raw);

  const src = fileName ? mediaUrl(chatId, fileName) : "";

  return (
    <div style={rowStyle}>
      <div style={bubbleStyle}>
        {!mine && !!author && (
          <div style={{ ...styles.author, color: hashColor(author) }}>{author}</div>
        )}

        {(msg.type === "image" || msg.type === "photo") && fileName ? (
          <img
            src={src}
            alt=""
            style={styles.image}
            loading="lazy"
          />
        ) : msg.type === "audio" && fileName ? (
          <audio controls src={src} style={styles.audio} />
        ) : msg.type === "video" && fileName ? (
          <video
            controls
            src={src}
            style={styles.video}
            onError={() => {
              console.log("ERRO VIDEO:", src);
            }}
          />
        ) : fileName && isPdf(fileName) ? (
  <div
    style={styles.pdfCard}
    onClick={() => onOpenPdf?.({ src, fileName })}
  >
            <div style={styles.pdfIcon}>📄</div>
            <div style={styles.pdfName}>{fileName}</div>
          </div>
        ) : (
          <div style={styles.text}>{msg.content ?? msg.raw ?? ""}</div>
        )}

        <div style={styles.meta}>{msg.time ?? ""}</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  author: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 4,
    lineHeight: 1.1,
  },

  text: {
    fontSize: 14,
    lineHeight: 1.35,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },

  meta: {
    marginTop: 6,
    fontSize: 11,
    opacity: 0.55,
    textAlign: "right",
  },

  image: {
    width: 260,
    maxWidth: "100%",
    borderRadius: 12,
    display: "block",
  },

  audio: {
    width: 260,
    maxWidth: "100%",
  },

  video: {
    width: 260,
    maxWidth: "100%",
    borderRadius: 12,
    display: "block",
  },

  pdfCard: {
    width: 260,
    maxWidth: "100%",
    minHeight: 120,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
    border: "1px solid rgba(0,0,0,0.08)",
    cursor: "pointer",
    padding: 12,
    textAlign: "center",
  },

  pdfIcon: {
    fontSize: 36,
    marginBottom: 8,
  },

  pdfName: {
    fontSize: 13,
    wordBreak: "break-word",
  },

  systemPill: {
    margin: "6px auto",
    fontSize: 12,
    opacity: 0.75,
    background: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(0,0,0,0.06)",
    padding: "6px 10px",
    borderRadius: 999,
  },
};