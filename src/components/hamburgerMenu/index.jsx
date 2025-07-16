import { useState } from "react";
import { Link, useLocation } from 'react-router';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div style={{ position: "relative" }}>
      {/* Ícono hamburguesa */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          width: 40,
          height: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        aria-label="Abrir menú"
      >
        <div style={{
          width: 30, height: 8, background: "#ffffffff", margin: "4px 0", borderRadius: 2,
          transition: "0.3s"
        }} />
        <div style={{
          width: 30, height: 8, background: "#ffffffff", margin: "4px 0", borderRadius: 2,
          transition: "0.3s"
        }} />
        <div style={{
          width: 30, height: 8, background: "#ffffffff", margin: "4px 0", borderRadius: 2,
          transition: "0.3s"
        }} />
      </button>

      {/* Menú desplegable */}
      {open && (
        <div style={{
          position: "absolute",
          top: 45,
          right: 0,
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          borderRadius: 8,
          padding: "1rem",
          zIndex: 1000,
          minWidth: 120
        }}>
           {location.pathname === "/" ?
              <Link to="/quienes-somos" style={{ display: "block", margin: "8px 0", color: "#2a1e35", textDecoration: "none" }}>Quiénes somos</Link>
            :
              <Link to="/" style={{ display: "block", margin: "8px 0", color: "#2a1e35", textDecoration: "none" }}>Inicio</Link>
            }
        </div>
      )}
    </div>
  );
}