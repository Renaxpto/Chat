import React, { useState, useEffect } from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

interface FrequentPayment {
  id: number;
  label: string;
  entity: string;
  referenceExample: string;
}

interface RecentPayment {
  id: number;
  description: string;
  date: string;
  amount: string;
  status: "pago" | "pendente";
}

const FREQUENT_PAYMENTS: FrequentPayment[] = [
  {
    id: 1,
    label: "Água e saneamento",
    entity: "Entidade: 10001",
    referenceExample: "Ref. exemplo: 123 456 789",
  },
  {
    id: 2,
    label: "Taxas municipais",
    entity: "Entidade: 10002",
    referenceExample: "Ref. exemplo: 234 567 890",
  },
  {
    id: 3,
    label: "Resíduos sólidos",
    entity: "Entidade: 10003",
    referenceExample: "Ref. exemplo: 345 678 901",
  },
];

const RECENT_PAYMENTS: RecentPayment[] = [
  {
    id: 1,
    description: "Água e saneamento - Outubro",
    date: "05-11-2025",
    amount: "25,40 €",
    status: "pago",
  },
  {
    id: 2,
    description: "Taxa de ocupação de via pública",
    date: "28-10-2025",
    amount: "12,00 €",
    status: "pago",
  },
  {
    id: 3,
    description: "Resíduos sólidos - Novembro",
    date: "Por pagar",
    amount: "18,75 €",
    status: "pendente",
  },
];

export const PaymentsScreen: React.FC<ScreenProps> = ({ goBack }) => {
  const [entity, setEntity] = useState("");
  const [reference, setReference] = useState("");
  const [amountCents, setAmountCents] = useState(""); // 👈 só dígitos, representa cêntimos
  const [showToast, setShowToast] = useState(false);

  const handlePay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!entity || !reference || !amountCents) {
      return;
    }

    setShowToast(true);
    setEntity("");
    setReference("");
    setAmountCents("");
  };

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 2000);
    return () => clearTimeout(timer);
  }, [showToast]);

  const formatAmount = (centsStr: string): string => {
    if (!centsStr) return "";
    const digits = centsStr.replace(/\D/g, "");
    if (!digits) return "";

    const padded = digits.padStart(3, "0"); // pelo menos 3 dígitos (1 euro + 2 cêntimos)
    const eurosRaw = padded.slice(0, -2);
    const cents = padded.slice(-2);
    const euros = String(parseInt(eurosRaw, 10)); // remove zeros à esquerda

    return `${euros},${cents}`;
  };

  const formattedAmount = formatAmount(amountCents);

  return (
    <div className="screen">
      <HeaderTitle title="Pagamentos" onBack={goBack} />

      <section className="card">
        <h3 className="card-title">Pagamento por referência</h3>
        <form className="form" onSubmit={handlePay}>
          <div className="field">
            <label>
              Entidade <span className="required">*</span>
            </label>
            <input
              placeholder="Ex: 10001"
              inputMode="numeric"
              value={entity}
              onChange={(e) =>
                setEntity(e.target.value.replace(/\D/g, "")) // só números
              }
              required
            />
          </div>

          <div className="field">
            <label>
              Referência <span className="required">*</span>
            </label>
            <input
              placeholder="Ex: 123456789"
              inputMode="numeric"
              value={reference}
              onChange={(e) =>
                setReference(e.target.value.replace(/\D/g, "")) // só números
              }
              required
            />
          </div>

          <div className="field">
            <label>
              Valor <span className="required">*</span>
            </label>
            <input
              placeholder="Ex: 25,40"
              inputMode="decimal"
              value={formattedAmount}
              onChange={(e) => {
                // o utilizador vê "12,34", mas nós só guardamos dígitos
                const digits = e.target.value.replace(/\D/g, "");
                setAmountCents(digits);
              }}
              required
            />
          </div>

          <button className="primary-btn" type="submit">
            Efetuar pagamento  
          </button>
        </form>
      </section>

      <section className="card">
        <h3 className="card-title">Pagamentos frequentes</h3>
        <ul className="list">
          {FREQUENT_PAYMENTS.map((item) => (
            <li key={item.id}>
              {item.label}
              <br />
              <span className="card-text">{item.entity}</span>
              <br />
              <span className="card-text">{item.referenceExample}</span>
            </li>
          ))}
        </ul>
        <p className="card-text">
          Os dados apresentados são exemplos para efeitos de protótipo.
        </p>
      </section>

      <section className="card">
        <h3 className="card-title">Métodos de pagamento aceites</h3>
        <ul className="list">
          <li>Multibanco</li>
          <li>MB Way</li>
          <li>Pagamento presencial nos serviços municipais</li>
          <li>Débito direto (mediante adesão)</li>
        </ul>
      </section>

      <section className="card">
        <h3 className="card-title">Histórico recente</h3>
        {RECENT_PAYMENTS.map((pay) => (
          <div key={pay.id} style={{ marginBottom: 8 }}>
            <p className="card-text">
              <strong>{pay.description}</strong>
            </p>
            <p className="card-text">
              Data: {pay.date} • Valor: {pay.amount}
            </p>
            <p className="card-text">
              Estado:{" "}
              {pay.status === "pago" ? "Pago" : "Pendente de pagamento"}
            </p>
          </div>
        ))}
      </section>

      {showToast && (
        <div className="toast-overlay">
          <div className="toast">Pagamento efetuado com sucesso.</div>
        </div>
      )}
    </div>
  );
};

export default PaymentsScreen;
