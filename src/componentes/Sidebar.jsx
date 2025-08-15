import React, { useState } from "react";
import { Link } from "react-router-dom";
// importamos el contexto
import { useAuth } from "../context/AuthContext.tsx";


// Styles
import "./styles/sidebar.css";

// IMG
import Logo from "../IMG/LogoOwlSTR.svg";
import TextLogo from "../IMG/Texto_Owl.png";
let profileImage = localStorage.getItem("profileImage");
const SideBar = () => {
  // Estado para controlar si el sidebar está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // importamos la funcion de logout
  const { logout } = useAuth();
  // Función para alternar el estado del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleProfilebar = () => {
    setIsClosed(!isClosed);
  };
  return (
    // Main Div
    <aside className="SideNav">
      {/* Button OpenSideBar */}

      <button className="toggleButton" data-descr="Click para abrir el sidebar" onClick={toggleSidebar}>
        <span tabIndex="0" data-descr="Click para abrir el sidebar"></span>
      

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="#00ff00"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <img
          src={Logo}
          alt="logoOwl"
          className={`Logo-Owl ${isOpen ? "open" : "closed"}`}
          id="btnOpen"
        />
       

        <img
          className="text-logo"
          id="textLogo"
          src={TextLogo}
          alt="TextLogo"
        />
      </button>

      {/* SideBar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* Sidebar Options */}
        <ul className="mainNav">
          {/* Boton Inicio */}
          <Link to="/home" className="nav-link active" aria-current="page">
            <li className="navItem" id="inicio">
              {/* Logo Inicio */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              Inicio
            </li>
          </Link>

          <Link to="/finanzas" className="nav-link">
            <li className="navItem" id="Finanzas">
              {/* Logo Finanzas */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bar-chart-line-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
              </svg>
              Finanzas
            </li>
          </Link>

          <Link to="/balances" className="nav-link">
            <li className="navItem" id="Balances">
              {/* Logo Inversiones */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
              </svg>
              inversiones
            </li>
          </Link>

          <Link to="/perfil" className="nav-link">
            <li className="navItem" id="Perfil">
              {/* Logo Perfil */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
              </svg>
              Perfil
            </li>
          </Link>

          <Link to="/ajustes" className="nav-link">
            <li className="navItem" id="Ajustes">
              {/* Logo Ajustes */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
              Ajustes
            </li>
          </Link>
        </ul>

        {/* Profile Nav */}

        <div className="profileBar">
          {/* Profile nav button */}
          <button className="toggleProfileNav" onClick={toggleProfilebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="person-cricle"
              viewBox="0 0 16 16"
            >
            <img src={profileImage} alt="sin imagen" width="80" height="80" />
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>

            <strong>
              <svg
                className={`Arrow ${isClosed ? "open" : "closed"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </strong>
          </button>

          {/* Lista Profile Nav */}
          <ul className={`dropDownProfile ${isClosed ? "open" : "closed"}`}>

            {/* Boton Ajustes de perfil */}

            <Link to="/homeN" className="dropdown-item">
              <li className="profileNavItem">
                  {/* Cambiar Empresa Logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-shuffle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
                    />
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                  </svg>
                  Cambiar a Empresa
              </li>
            </Link>
            

            <Link to="/" className="dropdown-item">
              <li className="profileNavItem"onClick={logout}>
                  {/* Sign Out Logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                    />
                  </svg>
                  Cerrar Sesión
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
