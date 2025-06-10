import { useState } from 'react'
import CardComponent from './components/card'
import Navbar from '../../components/navbar'
import ButtonSpinner from './components/button'
import Nosotros from '../../components/nosotros'
import './home.css'
import ShowComponent from '../../components/showComponent'

export default function Home({width}){

  const [components] = useState([
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
    },
    {
      element: ButtonSpinner, 
      name:"Botones interactivos",
      description:"Boton que despliega un loading o ejecuta cualquier funcionalidad al recibir un click."
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
          <Navbar variant="criollito" />
          <Navbar variant="black" />
          <Navbar variant="white" />
        </div>
      </div>


      {selectedComponent && (
        <ShowComponent close={() => setSelectedComponent(null)}>
          {selectedComponent === "Botones interactivos" && (
            <ButtonSpinner />
          )}
        </ShowComponent>
      )}
    </>
  )
}