import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

function Navbar(){

  const navigate = useNavigate()

  function Logout(){
    navigate("/");
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('sessionId');
    localStorage.removeItem('sessionEmail');
    localStorage.removeItem('sessionName');
    
    api.defaults.headers.common['Autorization'] = "";
  }

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      style={{ backgroundColor: '#132B54', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/appointments">
          <img className="navbar-logo" src={logo} alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'rgba(255,255,255,0.3)' }}
        >
          <span className="navbar-toggler-icon" style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255,255,255,0.6%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e")' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/appointments" style={{ color: '#fff' }}>
                Agendamentos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctors" style={{ color: '#fff' }}>
                Médicos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services" style={{ color: '#fff' }}>
                Serviços
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/users" style={{ color: '#fff' }}>
                Pacientes
              </Link>
            </li>

          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="btn-group">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: '#0D6EFD', color: '#fff' }}
                >
                  {localStorage.getItem("sessionName")}
                </button>

                <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: '#132B54', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <li>
                    <Link className="dropdown-item" to="/profile" style={{ color: '#fff' }}>
                      Meu Perfil
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" style={{ borderColor: 'rgba(255,255,255,0.2)' }}></hr>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={Logout} style={{ color: '#fff' }}>
                      Desconectar
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;