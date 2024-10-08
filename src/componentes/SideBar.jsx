import React from "react";
import { Link } from "react-router-dom";

// Styles


// IMG
import Logo from '../IMG/LogoOwlSTR.svg';

function Header() {
  return (
    <main className="Registro-Login">

      {/*Logo*/}


        <Link to="/" className="sideBar-to-Inicio">
          <svg src={Logo} className="bi pe-none me-2"></svg>
          <span className="Side Name">OwlStrategy</span>
        </Link>
        <hr />

      {/*Nav*/}
        <ul className="main-Nav">

          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Home
            </Link>
          </li>

          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Orders
            </Link>
          </li>
          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Products
            </Link>
          </li>
          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Customers
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile Nav */}

        <div className="profile-dropdown-Nav">
          <Link to='/perfil' className="Profile-boton" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>OwlUser</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link to='/' className="dropdown-item">New project...</Link></li>
            <li><Link to='/' className="dropdown-item">Settings</Link></li>
            <li><Link to='/' className="dropdown-item">Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to='/' className="dropdown-item">Sign out</Link></li>
          </ul>
        </div>

    </main>
  );
}
export default Header;