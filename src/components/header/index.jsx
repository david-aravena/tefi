import { Link, useLocation } from 'react-router';
import './header.css'


export default function Header({ padding }) {

  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"flex-end", alignItems:"center", width:"100%", padding: padding, gap: "1rem", backgroundColor:"#4e2a6e", height:"150px"}}>

      <div style={{position:"absolute", top:15, left:15}}>
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

      {location.pathname !== "/contacto" && (
        <div>
          <Link to={"/contacto"}>
            <h3 style={{color:"white"}}>Contactanos</h3>
          </Link>
        </div>
      )}

    </div>
  );
}
