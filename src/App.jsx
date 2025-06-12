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
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Suspense fallback={ <div style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}><img src="/images/corazonTefi.png" alt="" /> </div> }>
            <Routes>
              <Route path="/" element={<Home width={isMobile ? "100%" : "85%"} />} />
              <Route path="/quienes-somos" element={<Nosotros />} />
            </Routes>
          </Suspense>
        </div>
    </BrowserRouter>
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
