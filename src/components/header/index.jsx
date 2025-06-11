import { Link, useLocation } from 'react-router';
import './header.css'


export default function Header({ padding }) {

  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"flex-end", alignItems:"center", width:"100%", padding: padding, gap: "1rem", backgroundColor:"rgb(76, 8, 75)", height:"150px"}}>

      <div style={{position:"absolute", top:15, left:15}}>
        <div style={{
          width:"150px", 
          height:"auto", 
          background:"white", 
          borderRadius:"150px", 
          border:"15px solid rgb(76, 8, 75)",
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

      {location.pathname !== "/quienes-somos" && (
        <div>
          <Link to={"/quienes-somos"}>
            <h3 style={{color:"white"}}>Quienes somos</h3>
          </Link>
        </div>
      )}

    </div>
  );
}
