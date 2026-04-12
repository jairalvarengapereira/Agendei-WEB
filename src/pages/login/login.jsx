import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import logo from "../../assets/images/Logo.png";
import api from "../../constantes/api.js";

function Login() {
  console.log("Login component rendering");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function executeLogin() {
    setMsg("");
    try {
      const response = await api.post("/admin/login", {
        email,
        password,
      });

      if (response.data) {
        localStorage.setItem("sessionToken", response.data.token);
        localStorage.setItem("sessionId", response.data.id_admin);
        localStorage.setItem("sessionEmail", response.data.email);
        localStorage.setItem("sessionName", response.data.name);

        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;

        navigate("/appointments");
      } else {
        setMsg("Erro ao fazer login. Tente mais tarde.");
      }
    } catch (error) {
      if (error.response?.data.error) setMsg(error.response.data.error);
      else setMsg("Erro ao fazer login. Tente mais tarde.");
    }
  }

  return (
    <div className="background-login">
      <div className="login-card">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        
        <h5 className="login-title">Bem-vindo de volta</h5>
        <p className="login-subtitle">Gerencie seus agendamentos de forma descomplicada.</p>

        <div className="mt-4">
          <input
            type="email"
            placeholder="E-mail"
            required
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input
            type="password"
            placeholder="Senha"
            required
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-4 mb-4">
          <button
            onClick={executeLogin}
            type="button"
            className="btn-login"
          >
            <i className="bi bi-arrow-right-circle me-2"></i>
            Entrar
          </button>
        </div>

        {msg.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {msg}
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#64748b' }}>Não tenho uma conta. </span>
          <Link to="/register" className="login-link"> Criar conta agora.</Link>
        </div>

        <div className="copyright-login">
          <p>© 2026 Jair Alvarenga Pereira.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;