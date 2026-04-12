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
    <div className="background-login" style={{ display: 'block', minHeight: '100vh', background: 'red' }}>
      <div className="login-card" style={{ background: 'white', padding: '20px' }}>
        <h1>LOGIN TEST</h1>
        <p>Test render</p>
      </div>
    </div>
  );
}

export default Login;