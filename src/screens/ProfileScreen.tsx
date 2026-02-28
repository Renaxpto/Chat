import React, { useState, useEffect } from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

interface ProfileScreenProps extends ScreenProps {
  onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ goBack, onLogout }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (photoUrl) URL.revokeObjectURL(photoUrl);
    };
  }, [photoUrl]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotoUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  };

  return (
    <div className="screen">
      <HeaderTitle title="Perfil do utilizador" onBack={goBack} />

      <section className="card">
        <h3 className="card-title">Dados pessoais</h3>
        <p className="card-text">
          <strong>Nome:</strong> Município Exemplo
        </p>
        <p className="card-text">
          <strong>Email:</strong> email@gmail.com
        </p>
        <p className="card-text">
          <strong>Morada:</strong> Rua Exemplo 123, Ponte de Lima
        </p>
      </section>

      <section className="card">
        <h3 className="card-title">Fotografia</h3>
        <div className="profile-photo-wrapper">
          <div className="profile-photo">
            {photoUrl ? (
              <img src={photoUrl} alt="Fotografia de perfil" />
            ) : (
              <span>👤</span>
            )}
          </div>
        </div>
        <div className="field">
          <label>Atualizar fotografia</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
      </section>

      <section className="card">
        <h3 className="card-title">Sessão</h3>
        <p className="card-text">
          Pode terminar sessão nesta aplicação. No protótipo, o logout leva-o
          novamente ao ecrã de login.
        </p>
        <button
          type="button"
          className="primary-btn"
          onClick={onLogout}
        >
          Terminar sessão
        </button>
      </section>
    </div>
  );
};

export default ProfileScreen;
