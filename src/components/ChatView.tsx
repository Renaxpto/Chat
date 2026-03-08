import React, { useState } from "react";
import MessageBubble, { type Msg } from "./MessageBubble";

type PdfPreview = {
  src: string;
  fileName: string;
} | null;

export default function ChatView({ chatId, messages }: { chatId: string; messages: Msg[] }) {
  const [pdfPreview, setPdfPreview] = useState<PdfPreview>(null);

  return (
    <div style={chatStyles.viewport}>
      <div style={chatStyles.wallpaper} />

      <div style={chatStyles.list}>
        {messages.map((m) => (
          <MessageBubble
            key={m.id}
            chatId={chatId}
            msg={m}
            onOpenPdf={setPdfPreview}
          />
        ))}
      </div>

      {pdfPreview && (
        <div style={chatStyles.modalBackdrop} onClick={() => setPdfPreview(null)}>
          <div style={chatStyles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={chatStyles.closeBtn} onClick={() => setPdfPreview(null)}>
              ✕
            </button>

          
{/\.(jpe?g|png|gif|webp|bmp)$/i.test(pdfPreview.fileName) ? (
  <img
    src={pdfPreview.src}
    alt={pdfPreview.fileName}
    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", margin: "auto" }}
  />
) : (
  <iframe
    src={pdfPreview.src}
    title={pdfPreview.fileName}
    style={chatStyles.previewPdf}
  />
)}
          </div>
        </div>
      )}
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
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: 20,
  },
  modalContent: {
    position: "relative",
    width: "min(95vw, 1000px)",
    height: "min(92vh, 900px)",
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
  },
  closeBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
    border: "none",
    borderRadius: 999,
    width: 36,
    height: 36,
    cursor: "pointer",
    fontSize: 18,
  },
  previewPdf: {
    width: "100%",
    height: "100%",
    border: "none",
    background: "#fff",
  },
};