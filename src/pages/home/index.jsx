import { useState } from 'react'
import CardComponent from './components/card'
import Navbar from '../../components/navbar'
import ButtonSpinner from './components/button'
import Nosotros from '../../components/nosotros'
import './home.css'
import ShowComponent from '../../components/showComponent'

export default function Home({Nosotros, width}){

  const [components] = useState([
    {
      element: ButtonSpinner, 
      name:"Boton Spinner"
    }
  ])

  const [selectedComponent, setSelectedComponent] = useState(null);

  return(
    <>
      <div style={{ width: width }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <h2>Logos animados</h2>
        </div>
        <div>
          <Navbar variant="criollito" />
          <Navbar variant="black" />
          <Navbar variant="white" />
        </div>
        <div className="containerCards">
          {components.map((component, index) => (
            <CardComponent component={component} index={index} onclick={(component) => setSelectedComponent(component.name)} />
          ))}
        </div>
      </div>


      {selectedComponent && (
        <ShowComponent close={() => setSelectedComponent(null)}>
          {selectedComponent === "Boton Spinner" && (
            <ButtonSpinner />
          )}

          {selectedComponent === "Nosotros" && (
            Nosotros
          )}
        </ShowComponent>
      )}
    </>
  )
}