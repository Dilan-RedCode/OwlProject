import React from 'react';

import './styles/profile.css';
// importamos el contexto
import { useAuth } from "../context/AuthContext.tsx";


const Perfil = () => {

  const { logout } = useAuth();

  // Datos del usuario (provienen de sessionStorage)
  const usuario = {
    nombres: sessionStorage.getItem("Nombres"),
    apellidos: sessionStorage.getItem("apellidos"),
    email: sessionStorage.getItem("email"),
    telefono: sessionStorage.getItem("telefono"),
    Movimientos: ["Movimiento 1", "Movimiento 2", "Movimiento 3"], // Ejemplo de movimientos
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        {/*  */}
        <h1>Bienvenido: {usuario.nombres}</h1>

        <h1 className="username">Nombre Completo:{usuario.nombres}</h1>
        

        <div className="bio">
          <h2>Biografía</h2>
          <p>{usuario.bio}</p>
        </div>
        <div className="contact-info">
          <p>Email: {usuario.email}</p>
          <p>Teléfono: {usuario.telefono}</p>
        </div>
        {/* botones de accion */}
        <div className="action-buttons">
          <button className="greenButton">Editar Perfil</button>
          <button onClick={logout} className="redButton">Cerrar Sesión</button>
        </div>
      </div>
      <div className="profile-content">
        <h2>Mis Últimos Movimientos</h2>
        <ul className="posts-list">
          {usuario.Movimientos && usuario.Movimientos.map((publicacion, index) => (
            <li key={index} className="post-item">{publicacion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Perfil;