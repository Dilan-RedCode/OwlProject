import React from "react";

// componentes
import Perfil from '../componentes/Profile.jsx';
import SideBar from '../componentes/Sidebar.jsx';

// styles
import '../pagesStyles/perfil.css'

function perfil() {
    return (
        <div className='perfil page'>
            <SideBar />
            <Perfil />

        </div>
    );
}
export default perfil;