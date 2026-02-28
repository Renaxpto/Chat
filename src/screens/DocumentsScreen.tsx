import React, { useState, useEffect } from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

interface DocumentItem {
  id: number;
  title: string;
  area: string;
  type: "pdf" | "word";
}

const DOWNLOAD_DOCS: DocumentItem[] = [
  {
    id: 1,
    title: "Requerimento genérico",
    area: "Geral",
    type: "pdf",
  },
  {
    id: 2,
    title: "Pedido de certidão",
    area: "Geral",
    type: "pdf",
  },
  {
    id: 3,
    title: "Licenciamento de obras",
    area: "Urbanismo",
    type: "pdf",
  },
  {
    id: 4,
    title: "Inscrição em atividades municipais",
    area: "Educação / Juventude",
    type: "word",
  },
  {
    id: 5,
    title: "Pedido de ocupação de via pública",
    area: "Urbanismo",
    type: "pdf",
  },
];

export const DocumentsScreen: React.FC<ScreenProps> = ({ goBack }) => {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="screen">
      <HeaderTitle title="Documentos & Formulários" onBack={goBack} />

      <section className="card">
        <h3 className="card-title">Formulários mais utilizados</h3>
        <ul className="list">
          <li>Requerimento genérico</li>
          <li>Pedido de certidão</li>
          <li>Licenciamento de obras</li>
          <li>Inscrição em atividades municipais</li>
        </ul>
        <p className="card-text">
          Estes formulários podem ser preenchidos online ou descarregados em formato
          PDF/Word para entrega presencial.
        </p>
      </section>

      <section className="card">
        <h3 className="card-title">Formulários online (exemplo)</h3>
        <ul className="list">
          <li>Requerimento genérico</li>
          <li>Pedido de certidão</li>
          <li>Inscrição em atividade municipal</li>
        </ul>
        <button
          type="button"
          className="primary-btn"
          onClick={() =>
            setToast("A aceder a formulários online (simulação).")
          }
        >
          Aceder aos formulários online
        </button>
      </section>

      <section className="card">
        <h3 className="card-title">Downloads de documentos</h3>
        {DOWNLOAD_DOCS.map((doc) => (
          <div key={doc.id} style={{ marginBottom: 8 }}>
            <div className="card-header-row">
              <span className="card-title">{doc.title}</span>
              <span className={`file-pill ${doc.type === "pdf" ? "pdf" : "excel"}`}>
                {doc.type === "pdf" ? "PDF" : "Word"}
              </span>
            </div>
            <p className="card-text">Área: {doc.area}</p>
            <button
              type="button"
              className="link-btn"
              onClick={() =>
                setToast(
                  `A descarregar ficheiro ${
                    doc.type === "pdf" ? "PDF" : "Word"
                  } (simulação).`
                )
              }
            >
              Descarregar ficheiro
            </button>
          </div>
        ))}
      </section>

      {toast && (
        <div className="toast-overlay">
          <div className="toast">{toast}</div>
        </div>
      )}
    </div>
  );
};

export default DocumentsScreen;
