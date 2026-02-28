import React from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

export const RequestFormScreen: React.FC<ScreenProps> = ({ goBack }) => (
  <div className="screen">
    <HeaderTitle title="Formulário de Pedido" onBack={goBack} />

    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("No protótipo, este formulário simula o envio do pedido.");
      }}
    >
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
        <label>Data de nascimento</label>
        <input type="date" />
      </div>

      <div className="field">
        <label>
          Tipo de pedido <span className="required">*</span>
        </label>
        <select required>
          <option value="">Seleciona uma opção</option>
          <option>Licenciamento de obras</option>
          <option>Pedido de certidão</option>
          <option>Marcação de atendimento</option>
          <option>Reclamação / sugestão</option>
        </select>
      </div>

      <div className="field">
        <label>
          Descrição do pedido <span className="required">*</span>
        </label>
        <textarea placeholder="Explica o que pretendes" required />
      </div>

      <button type="submit" className="primary-btn">
        Submeter (simulação)
      </button>
    </form>
  </div>
);

export default RequestFormScreen;
