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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <h2>Componentes</h2>
          </div>

          <div className="containerListCards">
            {components.map((component, index) => (
              <CardComponent component={component} index={index} onclick={(component) => setSelectedComponent(component.name)} />
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <h2>Logos animados</h2>
          </div>
          <div className="containerAnimatedLogos">
            
            <div>
              <Navbar variant="criollito" />
              <Navbar variant="black" />
              <Navbar variant="white" />
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