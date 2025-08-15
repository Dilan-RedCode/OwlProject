// importacion de estilos
import "../pagesStyles/index.css"

// importacion de imagenes


function LoadingScreen() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f0f0", // Fondo simple
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Ejemplo de SVG de spinner incrustado directamente */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style={{ animation: "spin 1s linear infinite" }}
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="#ccc"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M25 5 A20 20 0 0 1 45 25"
            stroke="#2ECC72"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Cargando su experiencia...
        </p>

        
      </div>
    );
}

export default LoadingScreen;
