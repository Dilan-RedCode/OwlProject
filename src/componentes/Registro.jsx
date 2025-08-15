import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig.tsx";
// Styles
import "../pagesStyles/login.css";

// IMG
import LogoOwlSTR from "../IMG/LogoOwlSTR.svg";
import TextLogo from "../IMG/Texto_Owl.png";

function Register(props) {
  const { setLoggedIn } = props;

  // Declaracion de variables
  const navigate = useNavigate();
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showPswrd, setShowPswrd] = useState(false);
  let [modalOpen, setModalOpen] = useState(false);
  
  
  // Carrusel
  let [prev, setPrev] = useState(true);
  let [next, setNext] = useState(false);

  // Seleccion de planes
  // Si Rol Id es 0, se muestra seleccionar plan
  let [rol_id, setRol_id] = useState(0);

  let contraseña;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (password.length < 8){
      setMensaje('La contraseña debe tener al menos 8 caracteres.');
    } else{
      setMensaje(''); // Limpiar el error al cambiar la contraseña
    }
    
  };

  let ShowFunction = () => {
    setShowPswrd(!showPswrd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // validar contraseña
      if (password.length >= 8) {
        if (password === passwordRepeat) {
          contraseña = passwordRepeat;
        } else {
          alert("las contraseñas no coinciden");
        }
      } else {
      alert('crea una contraseña segura')
    }
      // enviar datos al servidor backend

      const response = await axiosInstance.post(
        "http://localhost:3001/usuario/registro",
        {
          nombres,
          apellidos,
          email,
          contraseña,
          telefono,
          rol_id,
        },
        {}
      );
      navigate("/home");
      sessionStorage.setItem("token", response.data.accessToken);
      setLoggedIn(true);
      setMensaje(response.data.message);
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.message);
        alert(mensaje)
      } else {
        setMensaje("Error al conectar con el servidor.");
      }
    }
  };

  return (
    <div className="Login-Registro">
      <div className="content">

        <div className="tlogo">
        {/* switch Theme */}

        <input type="checkbox" name="Theme" id="dark-light" />
        <label id="switchTheme" htmlFor="dark-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="switchTheme"
            id="sun"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="switchTheme"
            id="moon"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
          </svg>
        </label>
        {/* <!-- TextLogo --> */}

          <Link to="/">
            <img src={TextLogo} alt="TextLogo" className="textlogo" />
          </Link>
        </div>

        <div className="Flogo" id="bgLogoLogin">
          <svg src={LogoOwlSTR} alt="Logo" fetchpriority="high" loading="eager" />
        </div>

        {/* <!-- Titulo --> */}

        <h2 className="Tittle" id="RegisterTitle">
          REGISTRO
        </h2>

        {/* <!-- Formulario --> */}

        <form
          onSubmit={handleSubmit}
          className="formRegistroLogin"
          id="FormRegistro"
        >
          {/* <!-- Inputs --> */}

          {/* <!-- Input Nombre de Usuario --> */}
          <input
            className="inputLogin"
            id="firstName"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            type="text"
            placeholder="Escribe tus Nombres"
            title="Escribe tu nombre"
            autoComplete="off"
            required
          />
          <input
            className="inputLogin"
            id="lastName"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            type="text"
            placeholder="Escribe tus Apellidos"
            title="Escribe tus Apellidos"
            autoComplete="off"
            required
          />

          {/* <!-- Input Correo --> */}
          <input
            className="inputLogin"
            id="UserEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            title="Ingresa tu correo electrónico"
            required
          />

          {/* <!-- Input Telefono --> */}

          <input
            className="inputLogin"
            id="UserContact"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Escribe tu numero de celular"
            title="Ingresa tu número de celular"
            required
          />

          {/* <!-- Input Contraseña --> */}

          <div className="inputLogin">
            <input
              className="pswrdInput"
              id="UserPasword"
              type={showPswrd ? "text" : "password"}
              placeholder="Crea una Contraseña"
              value={password}
              onChange={handlePasswordChange}
              title="Inventa una contraseña segura"
              autoComplete="NuevaContraseña1# 9"
              required
            />
            <input
              id="showPswrd1"
              className="showInput"
              type="checkbox"
              onChange={ShowFunction}
            />
            <label className="pswrdLabel" htmlFor="showPswrd1">
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
          </div>

          {/* <!-- Input Repetir Contraseña --> */}
          <div className="inputLogin">
            <input
              id="showPswrd2"
              className="showInput"
              type="checkbox"
              onChange={ShowFunction}
              />
            <label className="pswrdLabel" htmlFor="showPswrd2">
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
              id="userRepeatPswrd"
              type={showPswrd ? "text" : "password"}
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              autoComplete="ContraseñaRepetida"
              placeholder="Repite la Contraseña"
              title="Mantén tu contraseña segura"
              required
            />
          </div>

          {/* <!-- Botones --> */}
          <div className="botonesBox">
            <button
              type={rol_id === 0 ? "button" : "submit"}
              className="botonesLogin"
              id="RegisterUser-Btn"
              onClick={() => setModalOpen(true)}
            >
              {rol_id === 0 ? "Selecciona un plan" : "Registrarme"}
            </button>

            <Link to="/login">
              <button className="botonesLogin" id="LoginUser-Btn">
                Ya tengo una cuenta
              </button>
            </Link>
            <p>{mensaje}</p>
          </div>
        </form>


      </div>

      {/* <!-- Modal Planes--> */}

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modalPlan" onClick={(e) => e.stopPropagation()}>

            {/* Info Planes */}
            <div id="tittlePlanes">

              <h2>Selecciona un plan para continuar</h2>
              <p>
                en Owl App tenemos 2 distintas formas de acceder a nuestras
                principales funciones:
              </p>
              
            </div>
            <div className="infoBox">
              {/* Carrusel Info Planes */}

              <button id="btn-prev" className="btnCarrusel" onClick={() => {setNext(false); setPrev(true);}}> ❮ </button>

              <div id={prev?"activePrev":"plan1"} className="infoPlan">
                <h2>Plan Personal</h2>
                <p>
                  este es el plan perfecto para quien le encanta
                  mantener un control preciso de sus finanzas <br /> personales. puede acceder a las siguientes funciones:
                </p>

                  <ol className="liFunctions">
                    <li>Gestion de ingresos y gastos</li>
                    <li>Cursos sobre finanzas personales</li>
                    <li>Alcancía digital</li>
                    <li>Gestion de metas de ahorro e inversión</li>
                    
                  </ol>

              </div>

              <div id={next?"activeNext":"plan2"} className="infoPlan">
                <h2>Plan Empresarial</h2>

                <ol className="liFunctions">
                    <li>Gestión de nomina</li>
                    <li>Facturación electronica</li>
                    <li>Digitalización de facturas</li>
                </ol>


              </div>

              <button id="btn-next" className="btnCarrusel" onClick={() => {setNext(true); setPrev(false);}}> ❯ </button>

              {/* Select Planes*/}
                <select
                  id="SelectPlan"
                  className="planesSelect"
                  defaultValue={rol_id}
                  onChange={(e) => setRol_id(e.target.value)}
                >
                  Selecciona un plan:
                  <option value="0">Selecciona</option>
                  <option name="Plan Personal" value="1">
                    Plan Personal
                  </option>
                  <option name="Plan Empresarial" value="2">
                    Plan Empresarial
                  </option>
                </select>
            </div>


            <div className="selectPoliticsBox">
            {/* Politicas de privacidad */}
              <input
                type="checkbox"
                name="PrivacyPolitic"
                id="PrivacyPolitic"
                />
              <p id="politicsText">
                Declaro y acepto los terminos y politicas de privacidad
              </p>
                  {/* Botones */}
            {/*Boton Registrarse  */}
            <div className="modalBtnBox">

              <button
                className="botonesModal"
                type="submit"
                form="FormRegistro"
                onClick={() => handleSubmit}
                >
                Registrarse
              </button>
            {/* Boton Cancelar */}
              <button
                className="botonesModal"
                id="CancelPlan"
                onClick={() => {
                  setRol_id(0);
                  setModalOpen(false);
                }}
                >
                Cancelar
              </button>

            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Register;
