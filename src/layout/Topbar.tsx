import React from "react";

interface TopbarProps {
  onToggleMenu: () => void;
  goHome: () => void;
  onProfileClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onToggleMenu, goHome, onProfileClick }) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onToggleMenu} aria-label="Menu">☰</button>
        <div className="topbar-title">
          <span className="logo-circle" onClick={goHome}>CM</span>
          <div>
            <div className="topbar-main">Câmara Municipal</div>
            <div className="topbar-sub">Protótipo App Móvel</div>
          </div>
        </div>
      </div>

      <button className="profile-btn" onClick={onProfileClick} aria-label="Perfil do utilizador">
        👤
      </button>
    </header>
  );
};

export default Topbar;
