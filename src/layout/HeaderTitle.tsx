import React from "react";

interface HeaderTitleProps {
  title: string;
  onBack: () => void;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, onBack }) => (
  <div className="header-page">
    <h2>{title}</h2>
    <button className="link-btn" onClick={onBack}>
      ← Voltar
    </button>
  </div>
);

export default HeaderTitle;
