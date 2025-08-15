import React from "react";

// styles
import "../pagesStyles/home.css"

// Componentes
import SideBar from '../componentes/Sidebar.jsx';
import Cursos from '../componentes/Cursos.jsx';
import Metas from '../componentes/Metas.jsx'
import Motivacion from "../componentes/Motivacion.jsx";
import Resumen from "../componentes/Resumen.jsx"

function Home() {
    return (
        <div className="Home-Login">
            <SideBar />
            <Cursos />
            <Metas />
            <Resumen />
            <Motivacion />

        </div>
    );
}
export default Home;