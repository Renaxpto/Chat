import React, { useState, useEffect } from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

interface TransparencyDoc {
  id: number;
  title: string;
  year: number;
  type: "pdf" | "excel";
  category: string;
}

const DOCS: TransparencyDoc[] = [
  {
    id: 1,
    title: "Orçamento Municipal 2025",
    year: 2025,
    type: "pdf",
    category: "Orçamento",
  },
  {
    id: 2,
    title: "Relatório e Contas 2024",
    year: 2024,
    type: "pdf",
    category: "Relatório e Contas",
  },
  {
    id: 3,
    title: "Plano de Atividades 2025",
    year: 2025,
    type: "excel",
    category: "Plano de Atividades",
  },
  {
    id: 4,
    title: "Mapa de Execução Orçamental 2024",
    year: 2024,
    type: "excel",
    category: "Execução Orçamental",
  },
  {
    id: 5,
    title: "Atas de Reuniões de Câmara 2024",
    year: 2024,
    type: "pdf",
    category: "Atas",
  },
];

export const TransparencyScreen: React.FC<ScreenProps> = ({ goBack }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "pdf" | "excel">("all");
  const [yearFilter, setYearFilter] = useState<"all" | number>("all");
  const [toast, setToast] = useState<string | null>(null);

  const years = Array.from(new Set(DOCS.map((d) => d.year))).sort(
    (a, b) => b - a
  );

  const filteredDocs = DOCS.filter((doc) => {
    const matchesType = typeFilter === "all" || doc.type === typeFilter;
    const matchesYear = yearFilter === "all" || doc.year === yearFilter;

    const term = search.toLowerCase().trim();
    const matchesSearch =
      term === "" ||
      doc.title.toLowerCase().includes(term) ||
      doc.category.toLowerCase().includes(term);

    return matchesType && matchesYear && matchesSearch;
  });

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="screen">
      <HeaderTitle title="Transparência Municipal" onBack={goBack} />

      <section className="card">
        <div className="filters">
          <div className="field">
            <label>Pesquisar</label>
            <input
              type="text"
              placeholder="Procurar por nome ou categoria..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filters-row">
            <div className="field">
              <label>Tipo</label>
              <select
                value={typeFilter}
                onChange={(e) =>
                  setTypeFilter(e.target.value as "all" | "pdf" | "excel")
                }
              >
                <option value="all">Todos</option>
                <option value="pdf">PDF</option>
                <option value="excel">Excel</option>
              </select>
            </div>

            <div className="field">
              <label>Ano</label>
              <select
                value={yearFilter === "all" ? "all" : String(yearFilter)}
                onChange={(e) => {
                  const value = e.target.value;
                  setYearFilter(value === "all" ? "all" : Number(value));
                }}
              >
                <option value="all">Todos</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {filteredDocs.length === 0 ? (
        <p className="intro-text">
          Nenhum documento encontrado com os filtros atuais.
        </p>
      ) : (
        filteredDocs.map((doc) => (
          <article key={doc.id} className="card">
            <div className="card-header-row">
              <h3 className="card-title">{doc.title}</h3>
              <span className={`file-pill ${doc.type}`}>
                {doc.type === "pdf" ? "PDF" : "Excel"}
              </span>
            </div>
            <p className="card-text">
              Categoria: {doc.category} • Ano: {doc.year}
            </p>
            <button
              type="button"
              className="link-btn"
              onClick={() =>
                setToast(
                  `A abrir ficheiro ${
                    doc.type === "pdf" ? "PDF" : "Excel"
                  } (Simulação).`
                )
              }
            >
              Abrir ficheiro
            </button>
          </article>
        ))
      )}

      {toast && (
        <div className="toast-overlay">
          <div className="toast">{toast}</div>
        </div>
      )}
    </div>
  );
};

export default TransparencyScreen;
