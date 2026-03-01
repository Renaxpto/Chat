import React, { useState } from "react";

interface LoginScreenProps {
  onLogin: () => void;
  
}

const FIXED_PASSWORD = "1212..";

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === FIXED_PASSWORD) {
      setError("");
      onLogin();
    } else {
      setError("Password inválida.");
    }
  };

  return (
    <div className="login-root">
      <div className="login-card">
        <h1 className="login-title">Chats Whatsapp</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="primary-btn" style={{ marginTop: 8 }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;