// ;) // Owl AppWrapper
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "../context/AuthContext.tsx"; // Importa el contexto de autenticación

// Importación de axiosInstance
// import axiosInstance from "../axiosConfig.tsx";
// Componentes

import Login from "../pages/Login.js";
import Registro from "../pages/Registro.js";
import Home from "../pages/Home.js";
import Perfil from "../pages/perfil.js";
import Finanzas from "../pages/Finanzas.js";
import Ajustes from "../pages/Ajustes.js";
import HomeN from "../pages/HomeNegocio.js";
import Managment from "../pages/Managment.js";
import PublicOnlyRoute from "../pages/PublicOnlyRoute.tsx";
import ProtectedRoute from "../pages/ProtectedRoutes.tsx";
import LoadingScreen from "../pages/LoadingScreen.js";



function App() {
  const { isLoading } = useAuth(); // Obtén isLoading del contexto; 
  // Verifica el estado de carga
  if (isLoading) {
    return <>
    <LoadingScreen />
    </> // Muestra la pantalla de carga si isLoading es true
  }
  return (
    <>
      <Routes>
            {/* // Rutas Públicas (solo accesibles si NO autenticado) */}
          <>
            <Route
              path="/login"
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>}
            />
            <Route
              path="/register"
              element={
                <PublicOnlyRoute>
                  <Registro />
                </PublicOnlyRoute>
              }
            />

            {/* Rutas Protegidas (accesibles solo si AUTENTICADO) */}
            <Route
              exact
              path="/finanzas"
              element={
                <ProtectedRoute>
                  <Finanzas />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/Perfil"
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/ajustes"
              element={
                <ProtectedRoute>
                  <Ajustes />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/homeN"
              element={
                <ProtectedRoute>
                  <HomeN />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/managment"
              element={
                <ProtectedRoute>
                  <Managment />
                </ProtectedRoute>
              }
            />
          </>

 
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}

export default AppWrapper;
