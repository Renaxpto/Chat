import React from "react";
import type { ScreenProps, EventItem } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

interface EventDetailScreenProps extends ScreenProps {
  event: EventItem;
}

const EventDetailScreen: React.FC<EventDetailScreenProps> = ({ goTo, event }) => (
  <div className="screen">
    <HeaderTitle
      title="Detalhe do Evento"
      onBack={() => goTo("events")}   // 👈 agora volta sempre à lista de eventos
    />
    <section className="card">
      <h3 className="card-title">{event.title}</h3>
      <p className="card-date">{event.date}</p>
      <p className="card-text">
        Este é um exemplo de descrição detalhada do evento. O conteúdo pode ser
        o mesmo para todos os eventos neste protótipo.
      </p>
      <p className="card-text">
        Aqui poderias incluir informação sobre:
      </p>
      <ul className="list">
        <li>Programa completo do evento;</li>
        <li>Horário de início e fim;</li>
        <li>Local exato e como chegar;</li>
        <li>Se é necessária inscrição prévia;</li>
        <li>Contactos para mais informações.</li>
      </ul>
      <p className="card-text">
        Para mais detalhes, e o site oficial da Câmara Municipal ou o
        Posto de Turismo.
      </p>
    </section>
  </div>
);

export default EventDetailScreen;
