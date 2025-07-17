import { Link } from 'react-router';
import HamburgerMenu from './../hamburgerMenu/';
import './header.css'


export default function Header({ padding }) {

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
        <HamburgerMenu />
      </div>

    </div>
  );
}

