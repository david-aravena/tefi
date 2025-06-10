import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import Header from './components/header'
import './App.css'

const Home = lazy(() => import('./pages/home/'));
const Nosotros = lazy(() => import('./components/nosotros/'));

function App() {

  const isMobile = useIsMobile();
  const paddingHeaderFooter = isMobile ? "0 1rem" : "0 5rem";

  return (
    <BrowserRouter>
        <div>
          <Header padding={paddingHeaderFooter} />
        </div>
        <div style={{ flex: 1, overflow: 'auto', display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Suspense fallback={ <img src="/images/corazonTefi.png" alt="" /> }>
            <Routes>
              <Route path="/" element={<Home width={isMobile ? "90%" : "85%"} />} />
              <Route path="/quienes-somos" element={<Nosotros />} />
            </Routes>
          </Suspense>
        </div>
    </BrowserRouter>
  )
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

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default App
