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
                Diseñamos y desarrollamos componentes personalizados para tu web o app, como botones, formularios o menús, entre otros elementos, pensados para adaptarse al estilo y personalidad de tu marca, con un enfoque responsivo y reutilizable.
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus dolorum ex iste explicabo sapiente nihil molestias magni, magnam impedit totam nobis ipsa nam at voluptatum similique nesciunt deleniti voluptate. Molestias?
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