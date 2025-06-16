import './card.css'

export default function CardComponent({component, index, onclick }) {
  return(
    <div key={index} className="card">
      <div className="containerCardUp">
        
      </div>

      <div style={{position:"absolute", top:0, left:0, width:"100%", height: "100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div 
          onClick={() => onclick(component)}
          style={{
            width:"50%", 
            aspectRatio: "1/1", 
            backgroundColor:"white", 
            borderRadius:"50%", 
            border:"8px solid var(--green-tefi)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            cursor: "pointer"
          }}>
          <img src={component.icon} alt="icon" />
        </div>
        <h3 style={{color:"var(--black-tefi)"}}>{component.name}</h3>
        <p style={{color:"var(--black-tefi)", fontSize:"14px", height:"3em"}}>{component.description}</p>
        
      </div>

      <div className="containerCardDown">
        <button 
          onClick={() => onclick(component)}
          style={{
            backgroundColor:"var(--green-tefi)", 
            border:"none", 
            color:"white", 
            padding:"8px 1rem", 
            borderRadius:"1rem", 
            fontSize:"1rem",
            zIndex:"9",
            cursor: "pointer"
          }}>
          ver
        </button>
      </div>

    </div>
  )
}