import React from "react";

// styles

// Componentes
import SideBar from '../componentes/Sidebar.jsx'
import Finanzas from '../componentes/Finanzas.jsx';

function finance() {
    return (
        <div className="finance page">
            <SideBar />
            <Finanzas />
        </div>
    );
}
export default finance;