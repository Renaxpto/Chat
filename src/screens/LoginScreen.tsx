import React, { useState } from "react";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("email@gmail.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "email@gmail.com" && password === "password") {
      setError("");
      onLogin();
    } else {
      setError("Credenciais inválidas (usa email@gmail.com / password).");
    }
  };

  return (
    <div className="login-root">
      <div className="login-card">
        <h1 className="login-title">Câmara Municipal</h1>
        <p className="login-subtitle">Aceda à sua área de município.</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="email@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="primary-btn" style={{ marginTop: 8 }}>
            Login
          </button>
        </form>

        <p className="login-hint">
          Para testar, usa <strong>email@gmail.com</strong> /{" "}
          <strong>password</strong>.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
