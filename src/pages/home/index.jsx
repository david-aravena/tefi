import { useState, Suspense } from 'react'
import { Link } from 'react-router';
import CardComponent from './components/card'
import Navbar from '../../components/navbar'
import './home.css'

export default function Home({width}){

  const [components] = useState([
    {
      url: "/botones", 
      name:"Botones",
      icon:"/svg/button.svg"
    },
    {
      url: "/listas", 
      name:"Listas",
      icon: "/svg/list.svg"
    }
  ])

  return(
    <>
      <div style={{ width: width, backgroundColor:"#f4f3f5" }}>
        
        <div className="containerComponents">
          <div className="containerListCards">
            <div style={{padding:"8px 1rem"}}>
              <h3 style={{fontSize:"1.5rem"}}>Componentes</h3>
              <p style={{color:"black", margin:0, padding:"1rem 0"}}> 
                <span style={{ fontWeight: "bold" }}>¿Qué ofrecemos?:</span> Diseñamos y desarrollamos componentes a medida para tu sitio web o aplicación, como botones, formularios, menús, listas de elementos, manejadores de bases de datos y otros elementos visuales.
                Cada componente puede incluir su propia logica, ejecutar funciones y estar conectado a servicios externos. Todo esto para mejorar la interaccion y experiencia de usuario en tu sitio web o app.
              </p>
            </div>
            <div style={{display:"flex",  overflow: "auto", padding:"8px 0"}}>
              {components.map((component, index) => (
                <Link to={`${component.url}`}>
                  <CardComponent component={component} index={index} />
                </Link>
              ))}
            </div>
          </div>
        </div>




        <div className="containerComponents">
          <div className="containerListCards">
            <div style={{padding:"8px 1rem"}}>
              <h3 style={{fontSize:"1.5rem"}}>Logos animados</h3>
              <p style={{color:"black", margin:0, padding:"1rem 0"}}> 
                <span style={{ fontWeight: "bold" }}>¿Que ofrecemos?: </span> Animamos el logo de tu proyecto para resaltar la identidad de marca con movimiento y estilo. El logo puede integrarse en secciones clave de tu web o app, siempre optimizado para no afectar la velocidad ni el rendimiento del sitio.
              </p>
            </div>
            <div className="containerAnimatedLogos">
            
            <div>
              <Navbar variant="black" />
              <Navbar variant="criollito" />
              <Navbar variant="white" />
            </div>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}

