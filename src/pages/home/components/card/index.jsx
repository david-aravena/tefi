import './card.css'

export default function CardComponent({component, index, onclick }) {
  return(
    <div key={index} className="card">
      <div className="containerCardUp">
        
      </div>
      <div className="containerCardDown">
        <div>
          <p style={{color:"black"}}>{component.name}</p>
        </div>
        <div style={{width:"50%"}}>
          <button style={{width:"100%"}} onClick={() => onclick(component)}>ver</button>
        </div>
      </div>

      <div style={{
        width: "120px",
        height: "120px",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: "2px solid red",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>

      </div>
    </div>
  )
}