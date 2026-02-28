import React, { useState, useEffect } from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

export const ReportScreen: React.FC<ScreenProps> = ({ goBack }) => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <div className="screen">
      <HeaderTitle title="Reportar Problema" onBack={goBack} />

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label>
            Tipo de problema <span className="required">*</span>
          </label>
          <select required defaultValue="">
            <option value="">Seleciona uma opção</option>
            <option>Buraco na estrada</option>
            <option>Iluminação pública</option>
            <option>Resíduos / Limpeza</option>
            <option>Outro</option>
          </select>
        </div>

        <div className="field">
          <label>
            Descrição <span className="required">*</span>
          </label>
          <textarea placeholder="Explica o que se passa" required />
        </div>

        <div className="field">
          <label>
            Localização <span className="required">*</span>
          </label>
          <input placeholder="Rua / ponto de referência" required />
        </div>

        <div className="field">
          <label>Contacto (opcional)</label>
          <input placeholder="Email ou telefone para contacto" />
        </div>

        <button type="submit" className="primary-btn">
          Enviar
        </button>
      </form>

      {showToast && (
        <div className="toast-overlay">
          <div className="toast">
            Problema reportado com sucesso.
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportScreen;
