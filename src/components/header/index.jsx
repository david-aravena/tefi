import { Link, useLocation } from 'react-router';
import './header.css'


export default function Header({ padding }) {

  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems:"center", width:"100%", padding: padding, gap: "1rem", backgroundColor:"white"}}>

      <div>
        <div style={{width:"150px", height:"auto"}}>
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
            <h2>Quienes somos</h2>
          </Link>
        </div>
      )}

    </div>
  );
}
