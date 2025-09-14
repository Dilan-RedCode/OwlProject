import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axiosInstance from "../axiosConfig.tsx";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Función logout expuesta por el contexto
  const logout = async () => {
    try {
      await axiosInstance.post("/usuario/logout", {}, {});
      sessionStorage.clear();
      setIsAuthenticated(false); // Cambia el estado global
      alert("Sesión cerrada");
      navigate("/login");
    } catch (error) {
      alert("Error cerrando sesión");
    }
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axiosInstance.get("http://localhost:3001/usuario/authToken"); // Asegúrate de enviar las cookies
        setIsAuthenticated(response.data.isAuthenticated); 
        
      } catch (error) {
        console.log("Error verificando autenticacion status:", error);
        
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [navigate, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
