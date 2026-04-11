import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import logo from "../../assets/images/Logo.png";
import api from "../../constantes/api.js";

function Login() {
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
        setMsg("Erro ao effecting login. Tente mais tarde.");
      }
    } catch (error) {
      if (error.response?.data.error) setMsg(error.response.data.error);
      else setMsg("Erro ao effecting login. Tente mais tarde.");
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
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          />
        </div>

        <div className="mt-3">
          <input
            type="password"
            placeholder="Senha"
            required
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          />
        </div>

        <div className="mt-4 mb-4">
          <button
            onClick={executeLogin}
            type="button"
            className="btn-login"
          >
            Entrar
          </button>
        </div>

        {msg.length > 0 && (
          <div className="alert alert-danger" role="alert" style={{ backgroundColor: 'rgba(255,107,107,0.2)', border: '1px solid #FF6B6B', color: '#FF6B6B' }}>
            {msg}
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Não tenho uma conta. </span>
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