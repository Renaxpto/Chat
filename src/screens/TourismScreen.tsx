import React, { useState, useEffect } from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

export const TourismScreen: React.FC<ScreenProps> = ({ goBack }) => {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="screen">
      <HeaderTitle title="Informações Turísticas" onBack={goBack} />

      <section className="card">
        <h3 className="card-title">Pontos de interesse</h3>
        <ul className="list">
          <li>Centro histórico</li>
          <li>Zona ribeirinha</li>
          <li>Museus e espaços culturais</li>
          <li>Jardins e parques urbanos</li>
          <li>Miradouros e trilhos panorâmicos</li>
        </ul>
      </section>

      <section className="card">
        <h3 className="card-title">Posto de Turismo</h3>
        <p className="card-text">Horário: 09h30 - 18h00 (todos os dias)</p>
        <p className="card-text">Telefone: 000 000 222</p>
        <p className="card-text">Email: turismo@cm-exemplo.pt</p>
        <p className="card-text">Morada: Largo Central, nº 1</p>
        <button
          type="button"
          className="link-btn"
          onClick={() => setToast("A abrir mapa (simulação).")}
        >
          Ver no mapa
        </button>
      </section>

      <section className="card">
        <h3 className="card-title">Gastronomia típica</h3>
        <ul className="list">
          <li>Prato tradicional de carne</li>
          <li>Prato tradicional de peixe</li>
          <li>Doçaria regional</li>
          <li>Produtos locais (vinho, enchidos, queijos)</li>
        </ul>
        <p className="card-text">
        Informe-se no Posto de Turismo sobre restaurantes aderentes e roteiros
          gastronómicos.
        </p>
      </section>

      <section className="card">
        <h3 className="card-title">Percursos e atividades</h3>
        <ul className="list">
          <li>Percursos pedestres sinalizados</li>
          <li>Passeios de bicicleta</li>
          <li>Visitas guiadas ao centro histórico</li>
          <li>Atividades culturais e desportivas</li>
        </ul>
        <button
          type="button"
          className="link-btn"
          onClick={() => setToast("A descarregar folheto de percursos (simulação).")}
        >
          Descarregar folheto de percursos
        </button>
      </section>

      <section className="card">
        <h3 className="card-title">Alojamento</h3>
        <ul className="list">
          <li>Hotéis</li>
          <li>Alojamento local</li>
          <li>Turismo rural</li>
          <li>Parque de campismo</li>
        </ul>
        <p className="card-text">
          Lista completa de alojamentos disponível no Posto de Turismo ou no
          site oficial do município.
        </p>
      </section>

      <section className="card">
        <h3 className="card-title">Informação útil</h3>
        <ul className="list">
          <li>Emergência: 112</li>
          <li>Linha de apoio municipal: 000 000 333</li>
          <li>
            Transportes públicos: horários e percursos disponíveis no Posto de
            Turismo
          </li>
          <li>Estacionamento: parques gratuitos e pagos na zona central</li>
        </ul>
      </section>

      {toast && (
        <div className="toast-overlay">
          <div className="toast">{toast}</div>
        </div>
      )}
    </div>
  );
};

export default TourismScreen;
