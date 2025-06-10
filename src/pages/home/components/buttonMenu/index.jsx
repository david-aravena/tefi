import { useState } from "react";
import "./hamburguer.css"

export default function Hamburger({color}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`hamburger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") setOpen(!open);
      }}
    >
      <span className="line line1" style={{backgroundColor: color}}></span>
      <span className="line line2" style={{backgroundColor: color}}></span>
      <span className="line line3" style={{backgroundColor: color}}></span>
    </div>
  );
}
