import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Importación de axiosInstance
import axiosInstance from "../axiosConfig.tsx";

// Styles
import "../pagesStyles/login.css";
// IMG
import TextLogo from "../IMG/Texto_Owl.png";

const Iniciosesion = (props) => {

  const navigate = useNavigate();

  const [Contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [Email, setEmail] = useState("");
  const [showPswrd, setShowPswrd] = useState(false);
  

  let ShowFunction = () => {
    setShowPswrd(!showPswrd);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance
        .post(
          "http://localhost:3001/usuario/login",
          {
            Email,
            Contraseña,
          },
          {withCredentials: true} // Asegúrate de enviar las cookies
        )
        .then((response) => {
          navigate("/")
          sessionStorage.setItem("Nombres", response.data.nombres, { path: "/" });
          sessionStorage.setItem("apellidos", response.data.apellidos, { path: "/" });
          sessionStorage.setItem("email", response.data.email, { path: "/" });
          sessionStorage.setItem("telefono", response.data.telefono, { path: "/" });
          console.log(response.data.message);
        });
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.message);
        alert(mensaje);
      } else {
        setMensaje("Error al conectar con el servidor.");
      }
    }
  };
  return (
    <div className="Login-Registro">
      <div className="content">
        {/* Logos-Img */}

        <div className="Flogo" id="FLogo-login-registro">
        </div>
        <div className="tlogo">
          <img src={TextLogo} alt="TextLogo" className="textlogo" />
        </div>

        {/* <!-- Contenido --> */}

        <h2 className="Tittle" id="LoginTittle">
          INICIAR SESIÓN
        </h2>

        {/* <!-- Formulario --> */}

        <form
          className="formRegistroLogin"
          id="FormLogin"
          onSubmit={handleSubmit}
        >
          {/* Input Correo */}
          <input
            className="inputLogin"
            id="UserEmail"
            type="name"
            placeholder="Ingrese su email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            tittle="example@example.com"
            autoComplete="off"
            required
          />
          {/* Input Contraseña */}
          <div className="inputLogin">
            <input id="showPswrd3" className="showInput" type="checkbox" onChange={ShowFunction} />
            <label className="pswrdLabel" htmlFor="showPswrd3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={showPswrd ? "#00ff00" : "black"}
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </label>
            <input
              className="pswrdInput"
              id="UserPasword"
              type={showPswrd ? "text" : "password"}
              value={Contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Contraseña"
              tittle="No compartas tu contraseña"
              autoComplete="on"
              required
            />
          </div>
          {/* Botones */}
          <div className="botonesBox">
            <button
              type="submit"
              className="btnLoginRegistro"
              id="RegisterUser-Btn"
            >
              Iniciar Sesión
            </button>

            <Link to="/">
              <button
                type="submit"
                htmlFor="FormLogin"
                className="btnLoginRegistro"
                id="LoginUser-Btn"
              >
                Registrarme
              </button>
            </Link>

            <p>{mensaje}</p>
          </div>
        </form>
        {/* <!-- Fin Formulario --> */}
      </div>
    </div>
  );
};
export default Iniciosesion;
