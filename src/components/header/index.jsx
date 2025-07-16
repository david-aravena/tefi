import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import HamburgerMenu from './../hamburgerMenu/';
import './header.css'


export default function Header({ padding }) {

  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"flex-end", alignItems:"center", width:"100%", padding: padding, gap: "1rem", backgroundColor:"#4e2a6e", height:"150px"}}>

      <div style={{ position:"absolute", top:15, left:15 }}>
        <div style={{
          width:"150px", 
          height:"auto", 
          background:"white", 
          borderRadius:"150px", 
          border:"15px solid #4e2a6e",
          padding:"10px",
        }}>
          <Link to={"/"}>
            <img
              src="/icons/LogoTefi.png"
              alt="Logo tefi"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
          </Link>
        </div>  
      </div> 

      <div style={{width:"50%", display:"flex", justifyContent:"flex-end"}}>
        {/* <Typewriter text={"Tefi es animación, diseño y desarrollo web."} speed={70} /> */}
        <HamburgerMenu />
      </div>

    </div>
  );
}

function Typewriter({ text, speed = 50 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <p style={{paddingTop:"1rem", color:"white", fontSize:"16px", fontStyle:"italic"}}>{text.slice(0, index)}</p>;
}

