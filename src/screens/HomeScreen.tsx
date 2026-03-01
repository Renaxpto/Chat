import React from "react";
import type{ NavFn, NewsItem } from "../types";
 
interface HomeProps {
  goTo: NavFn;
  onSelectNews: (news: NewsItem) => void;
}

export const HomeScreen: React.FC<HomeProps> = ({ goTo }) => {
 
  return (
    <div className="screen">
      <section className="section">
       
        <div className="grid">
          <button onClick={() => goTo("contacts")}>
            <span>📞</span>
            <span>Conversas</span>
          </button>
         {/*  <button onClick={() => goTo("events")}>
            <span>📅</span>
            <span>Eventos</span>
          </button>
          <button onClick={() => goTo("news")}>
            <span>📰</span>
            <span>Notícias</span>
          </button>
          <button onClick={() => goTo("requestsList")}>
            <span>📝</span>
            <span>Pedidos</span>
          </button>
          <button onClick={() => goTo("payments")}>
            <span>💳</span>
            <span>Pagamentos</span>
          </button>
          <button onClick={() => goTo("report")}>
            <span>⚠️</span>
            <span>Reportar</span>
          </button> */}
        </div>
      </section>

      {/* <section className="section">
        <div className="section-header">
          <h2 className="section-title">Últimas notícias</h2>
          <button className="link-btn" onClick={() => goTo("news")}>
            Ver todas
          </button>
        </div>
        {latestNews.map((item: NewsItem) => (
          <article
            key={item.id}
            className="card clickable"
            onClick={() => onSelectNews(item)}
          >
            <div className="card-date">{item.date}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.summary}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Próximos eventos</h2>
          <button className="link-btn" onClick={() => goTo("events")}>
            Ver todos
          </button>
        </div>
        {upcomingEvents.map((event) => (
          <article key={event.id} className="card">
            <div className="card-date">{event.date}</div>
            <h3 className="card-title">{event.title}</h3>
            <p className="card-text">{event.summary}</p>
          </article>
        ))}
      </section> */}
    </div>
  );
};

export default HomeScreen;
