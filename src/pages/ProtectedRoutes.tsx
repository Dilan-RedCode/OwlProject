import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx'; // Ajusta la ruta

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation(); // Para saber la ruta actual

    if (!isLoading) {
        if(!isAuthenticated) {
            // Si no está autenticado, redirige al registro.
            // Guardamos la ubicación actual para quizás redirigir de vuelta después del login.
            return <Navigate to="/register" state={{ from: location }} replace />;
        } else {
            // Si está autenticado, renderiza el componente hijo
            return <>{children}</>;
        }
        
    }

};

export default ProtectedRoute;