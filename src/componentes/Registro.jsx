import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig.tsx';

// Styles
import '../pagesStyles/login.css';

// IMG
import LogoOwlSTR from '../IMG/LogoOwlSTR.svg';
import TextLogo from '../IMG/Texto_Owl.svg';

function Register(props) {
  // Declaracion de variables
  const navigate = useNavigate();
  // Registro
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showPswrd, setShowPswrd] = useState(false);
  // Modal
  let [modalOpen, setModalOpen] = useState(false);

  let legalInfo =[
    { title: "Términos y Condiciones", content: "Al registrarte, aceptas nuestros términos y condiciones. Por favor, lee detenidamente antes de continuar." },
    { title: "Política de Privacidad", content: "Nos comprometemos a proteger tu privacidad. Consulta nuestra política de privacidad para entender cómo manejamos tus datos." },
    { title: "Uso de Datos", content: "Tus datos serán utilizados para mejorar tu experiencia en nuestra plataforma. No compartiremos tu información con terceros sin tu consentimiento." },
    { title: "Responsabilidades del Usuario", content: "Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Notifícanos inmediatamente si sospechas de un uso no autorizado." },
    { title: "Modificaciones", content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cualquier cambio significativo." }
  ]

  // Show/Hide Password
  let contraseña;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (password.length < 8) {
      setMensaje('La contraseña debe tener al menos 8 caracteres.');
    } else {
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
          alert('las contraseñas no coinciden');
        }
      } else {
        alert('crea una contraseña segura');
      }
      // enviar datos al servidor backend

      const response = await axiosInstance.post(
        'http://localhost:3001/usuario/registro',
        {
          nombres,
          apellidos,
          email,
          contraseña,
          telefono,
        },
        {}
      );
      navigate('/');
      setMensaje(response.data.message);
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.message);
        alert(mensaje);
      } else {
        setMensaje('Error al conectar con el servidor.');
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

        <h2 className="tittleLogin" id="RegisterTitle">
          REGISTRO
        </h2>

        {/* <!-- Formulario --> */}

        <form onSubmit={handleSubmit} className="formRegistroLogin" id="FormRegistro">
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
              type={showPswrd ? 'text' : 'password'}
              placeholder="Crea una Contraseña"
              value={password}
              onChange={handlePasswordChange}
              title="Inventa una contraseña segura"
              autoComplete="NuevaContraseña1# 9"
              required
            />
            <input id="showPswrd1" className="showInput" type="checkbox" onChange={ShowFunction} />
            <label className="pswrdLabel" htmlFor="showPswrd1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={showPswrd ? '#00ff00' : 'black'}
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
            <input id="showPswrd2" className="showInput" type="checkbox" onChange={ShowFunction} />
            <label className="pswrdLabel" htmlFor="showPswrd2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={showPswrd ? '#00ff00' : 'black'}
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
              type={showPswrd ? 'text' : 'password'}
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              autoComplete="ContraseñaRepetida"
              placeholder="Repite la Contraseña"
              title="Mantén tu contraseña segura"
              required
            />
          </div>
          {/* Politicas de privacidad */}
          <div className="selectBox">
            <label htmlFor="privacyPolitic" id="privacyLabel">
              <input type="checkbox" id="privacyPolitic" onclick="" required />
              Acepto los términos condiciones y políticas de privacidad
            </label>
            <button id="btnReadTerms" onClick={() => setModalOpen(true)} type="button">
              leer términos
            </button>
          </div>
          {/* <!-- Botones --> */}
          <div className="botonesBox">
            <button type="submit" className="btnLoginRegistro" id="registerBtn">
              Registrarme
            </button>
            <Link to="/login">
              <button className="btnLoginRegistro" id="loginBtn">
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
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/*  */}

            {/* Botones */}
            <div className="termsConditions">
              {legalInfo.map((item, index) => (
                <div key={index} className="termItem">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
            {/* Boton listo */}
            <button
              className="botonesModal"
              id="readTermsBtn"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Register;
