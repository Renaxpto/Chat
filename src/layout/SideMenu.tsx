/* import React from "react";
import type{ NavFn } from "../types";

interface SideMenuProps {
  menuOpen: boolean;
  goTo: NavFn;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ menuOpen, goTo, onClose }) => {
  const handleClick = (screen: Parameters<NavFn>[0]) => {
    goTo(screen);
    onClose();
  };

  return (
    <>
      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <button onClick={() => handleClick("home")}>
              <span>🏠</span> Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("news")}>
              <span>📰</span> Notícias
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("events")}>
              <span>📅</span> Agenda de Eventos
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("contacts")}>
              <span>📞</span> Contactos
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("services")}>
              <span>🏢</span> Serviços Municipais
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("requestsList")}>
              <span>📝</span> Pedidos / Requerimentos
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("payments")}>
              <span>💳</span> Pagamentos
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("documents")}>
              <span>📂</span> Documentos & Formulários
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("tourism")}>
              <span>📍</span> Informações Turísticas
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("transparency")}>
              <span>📊</span> Transparência
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("report")}>
              <span>⚠️</span> Reportar Problema
            </button>
          </li>
        </ul>
      </nav>

      {menuOpen && <div className="backdrop" onClick={onClose} />}
    </>
  );
};

export default SideMenu;
 */