import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router';
import { Suspense, lazy } from 'react';
import Header from './components/header'
import './App.css'

const Home = lazy(() => import('./pages/home/'));
const Nosotros = lazy(() => import('./components/nosotros/'));
const Buttons = lazy(() => import('./components/buttons/'));
const Lists = lazy(() => import('./components/lists/'));

export default function App() {

  const isMobile = useIsMobile();
  const paddingHeaderFooter = isMobile ? "0 1rem" : "0 5rem";
  const mainWidth = isMobile ? "100%" : "85%";

  return (
    <>
      <div>
        <Header padding={paddingHeaderFooter} />
      </div>

      <Navbar width={mainWidth} />
  
      <div style={{
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        marginBottom:"5rem"
      }}>
        <Suspense fallback={ <div style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}><img src="/images/corazonTefi.png" alt="" /> </div> }>
          <Routes>
            <Route path="/" element={<Home width={mainWidth} />} />
            <Route path="/quienes-somos" element={<Nosotros />} />
            <Route path="/botones" element={<Buttons width={mainWidth} />} />
            <Route path="/listas" element={<Lists width={mainWidth} />} />
          </Routes>
        </Suspense>
      </div>

      <div style={{position:"fixed", bottom:0, width:"100vw", background:"#4e2a6e",zIndex:"99999999"}}>
        <div style={{margin:"auto", width: isMobile ? "100%" : "85%", display:"flex", justifyContent:"flex-end"}}>
          <ContactIcons marginIcons="8px" />
        </div>
      </div>
    </>
  )
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

const ContactIcons = ({marginIcons}) => {
  return(
    <>
      <div style={{margin: marginIcons}}>
        <a href="mailto:tefi@tefi.cl?subject=Me%20interesa%20su%20servicio%20de%20logotipos&body=Hola" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/290/994/small/line-art-mail-button-icon-in-flat-style-vector.jpg"
            alt="email"
            style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: "50px" }}
          />
        </a>
      </div>
        
      <div style={{margin: marginIcons}}>
        <a href="https://wa.me/56990059578?text=Hola%20quiero%20informacion%20sobre%20el%20servicio%20que%20ofrecen" target="_blank" rel="noopener noreferrer">
          <img
            src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
            alt="WhatsApp"
            style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: "50px" }}
          />
        </a>
      </div>
    </>
  )
}

function Navbar({width}) {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/quienes-somos") return null;

  return(
    <div style={{width: width, backgroundColor:"white", borderBottom:"2px solid #e9e9e9", margin:"0 auto", padding:"8px", display:"flex"}}>
      <div style={{display:"flex", alignItems:"center"}}>
        <img src="/svg/arrow.svg" alt="" style={{ transform:"rotate(180deg)" }} />
      </div>
      
      <div style={{width:"100%", display:"flex", alignItems:"center"}}>
        
        <Link to="/botones">
          <p style={{
            backgroundColor: location.pathname === "/botones" ? "#e9e9e9" : "transparent",
            padding:"8px", 
            width:"fit-content", 
            borderRadius:"4px",
            color:"var(--black-tefi)",
            margin:"0 8px"
          }}>
            Botones
          </p>
        </Link>

        <Link to="/listas">
          <p style={{
            backgroundColor: location.pathname === "/listas" ? "#e9e9e9" : "transparent",
            padding:"8px", 
            width:"fit-content", 
            borderRadius:"4px",
            color:"var(--black-tefi)",
            margin:"0 8px"
          }}>
            Listas
          </p>
        </Link>
      </div>

      <div style={{display:"flex", alignItems:"center"}}>
        <img src="/svg/arrow.svg" alt="" />
      </div>
    </div>
  )
}

