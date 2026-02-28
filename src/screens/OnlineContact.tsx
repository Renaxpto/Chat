import React, { useState, useEffect } from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

export const OnlineContactScreen: React.FC<ScreenProps> = ({ goBack }) => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 2000);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <div className="screen">
      <HeaderTitle title="Contacto online" onBack={goBack} />

      <section className="card">
        <h3 className="card-title">Envio de pedido de contacto</h3>
        <p className="card-text">
          Utilize este formulário para colocar dúvidas, pedir esclarecimentos
          ou solicitar informações gerais sobre serviços municipais.
        </p>
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label>
            Nome <span className="required">*</span>
          </label>
          <input placeholder="Introduza o teu nome" required />
        </div>

        <div className="field">
          <label>
            Email <span className="required">*</span>
          </label>
          <input type="email" placeholder="exemplo@email.com" required />
        </div>

        <div className="field">
          <label>
            Assunto <span className="required">*</span>
          </label>
          <select required defaultValue="">
            <option value="">Seleciona um assunto</option>
            <option>Informações gerais</option>
            <option>Água e saneamento</option>
            <option>Urbanismo e obras</option>
            <option>Atendimento / marcações</option>
            <option>Reclamação / sugestão</option>
          </select>
        </div>

        <div className="field">
          <label>
            Mensagem <span className="required">*</span>
          </label>
          <textarea
            placeholder="Explica de forma simples o motivo do contacto"
            required
          />
        </div>

        <button type="submit" className="primary-btn">
          Enviar pedido de contacto (simulação)
        </button>
      </form>

      {showToast && (
        <div className="toast-overlay">
          <div className="toast">Pedido de contacto enviado com sucesso.</div>
        </div>
      )}
    </div>
  );
};

export default OnlineContactScreen;
