import { useState, lazy, Suspense } from 'react'
import CardComponent from './components/card'
import Navbar from '../../components/navbar'
import './home.css'
import ShowComponent from '../../components/showComponent'

const ButtonSpinner = lazy(() => import('./components/button'))
const ListFiles = lazy(() => import('./../../components/list/'))

export default function Home({width}){

  const [components] = useState([
    {
      element: ButtonSpinner, 
      name:"Botones",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ListFiles, 
      name:"Listas",
      description:"Listas ordenadas de elementos."
    }
  ])

  const [selectedComponent, setSelectedComponent] = useState(null);

  return(
    <>
      <div style={{ width: width, backgroundColor:"#f4f3f5" }}>
        
        <div className="containerComponents">
          <div className="containerListCards">
            <div style={{padding:"8px 1rem"}}>
              <h3 style={{fontSize:"1.5rem"}}>Componentes</h3>
              <p style={{color:"black", margin:0, padding:"1rem 0"}}> 
                <span style={{ fontWeight: "bold" }}>¿Qué ofrecemos?:</span> Diseñamos y desarrollamos componentes a medida para tu sitio web o aplicación, como botones, formularios, menús y otros elementos visuales. Cada componente no solo reflejara el estilo y la personalidad de tu marca, sino que también van a ejecutar funciones específicas que mejoraran el uso y la experiencia dentro de tu página. Además, están hechos para reutilizarse fácilmente en distintas secciones, lo que te ahorra tiempo y esfuerzo.
              </p>
            </div>
            <div style={{display:"flex",  overflow: "auto", padding:"8px 0"}}>
              {components.map((component, index) => (
                <CardComponent component={component} index={index} onclick={(component) => setSelectedComponent(component.name)} />
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


      {selectedComponent && (
        <ShowComponent close={() => setSelectedComponent(null)}>
          <Suspense fallback={<img src="/images/corazonTefi.png" alt="" />}>
            {selectedComponent === "Botones" && <ButtonSpinner />}
            {selectedComponent === "Listas" && <ListFiles />}
          </Suspense>
        </ShowComponent>
      )}
    </>
  )
}