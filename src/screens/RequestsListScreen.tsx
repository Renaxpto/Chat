import React from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

interface RequestItem {
  id: number;
  title: string;
  area: string;
  description: string;
}

const REQUESTS: RequestItem[] = [
  {
    id: 1,
    title: "Licenciamento de obras",
    area: "Urbanismo",
    description: "Pedidos relacionados com obras particulares, alterações e demolições.",
  },
  {
    id: 2,
    title: "Pedido de certidão",
    area: "Geral",
    description: "Certidões de residência, plantas, registos e outros documentos oficiais.",
  },
  {
    id: 3,
    title: "Marcação de atendimento",
    area: "Atendimento",
    description: "Agendamento de atendimento presencial nos serviços municipais.",
  },
  {
    id: 4,
    title: "Reclamações e sugestões",
    area: "Geral",
    description: "Envio de reclamações, elogios ou sugestões sobre serviços municipais.",
  },
];

export const RequestsListScreen: React.FC<ScreenProps> = ({ goBack, goTo }) => (
  <div className="screen">
    <HeaderTitle title="Pedidos / Requerimentos" onBack={goBack} />

    <section className="card">
      <h3 className="card-title">Como funciona</h3>
     <p className="card-text">
  Nesta área pode iniciar pedidos e requerimentos dirigidos à Câmara Municipal.
  O formulário seguinte é apenas um exemplo para efeitos de protótipo.
</p>
<ul className="list">
  <li>Selecione o tipo de pedido mais adequado.</li>
  <li>Preencha os seus dados e a descrição do pedido.</li>
  <li>Submeta o formulário (simulação neste protótipo).</li>
</ul>

    </section>

    <section className="card">
      <h3 className="card-title">Tipos de pedido disponíveis</h3>
      <ul className="list">
        {REQUESTS.map((req) => (
          <li key={req.id}>
            <strong>{req.title}</strong>
            <br />
            <span className="card-text">Área: {req.area}</span>
            <br />
            <span className="card-text">{req.description}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="card">
      <h3 className="card-title">Iniciar pedido</h3>
      <p className="card-text">
        O formulário seguinte é genérico e serve apenas para demonstrar como seria o envio
        de um pedido online.
      </p>
      <button
        className="primary-btn"
        type="button"
        onClick={() => goTo("requestForm")}
      >
        Preencher formulário de pedido
      </button>
    </section>
  </div>
);

export default RequestsListScreen;
