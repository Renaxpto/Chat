import React from "react";
import type { ScreenProps, EventItem } from "../types";
import { EVENTS } from "../data";
import HeaderTitle from "../layout/HeaderTitle";

interface EventsScreenProps extends ScreenProps {
  onOpenDetail: (event: EventItem) => void;
}

export const EventsScreen: React.FC<EventsScreenProps> = ({
  goBack,
  onOpenDetail,
}) => (
  <div className="screen">
    <HeaderTitle title="Agenda de Eventos" onBack={goBack} />

    <section className="card">
      <h3 className="card-title">Sobre a agenda</h3>
      <p className="card-text">
        Consulte aqui os principais eventos promovidos ou apoiados pela Câmara
        Municipal, incluindo atividades culturais, desportivas e iniciativas
        solidárias.
      </p>
      <p className="card-text">
        Para mais informações detalhadas, consulte o site oficial ou o Posto de
        Turismo.
      </p>
    </section>

    {EVENTS.map((event) => (
      <article key={event.id} className="card">
        <h3 className="card-title">{event.title}</h3>
        <p className="card-date">{event.date}</p>
        <p className="card-text">{event.summary}</p>

        <button
          type="button"
          className="link-btn"
          onClick={() => onOpenDetail(event)}
        >
          Ver detalhes
        </button>
      </article>
    ))}
  </div>
);

export default EventsScreen;
