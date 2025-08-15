import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx'; // Ajusta la ruta

interface PublicOnlyRouteProps {
    children: ReactNode;
}

const PublicOnlyRoute = ({ children }: PublicOnlyRouteProps) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (!isLoading) {
        if (isAuthenticated) {
            // Si está autenticado, redirige a la página de inicio (Home)
            return <Navigate to="/" replace />;
        }else {
        // Si no está autenticado, permite el acceso a la ruta pública
        return <>{children}</>;
        }
    
    }
};

export default PublicOnlyRoute;