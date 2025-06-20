import { useState } from "react";
import { Link } from 'react-router';
import spinner1 from './svg/spinner1.svg'

export default function Buttons(){
  return(
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%"}}>
      <ButtonSpinner />
      <div style={{width:"100%", display:"flex", justifyContent:"flex-end", padding:"0 1rem"}}>
        <Link to="/listas">
          <div style={{width:"50px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h3>Listas</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

const ButtonSpinner = () => {
  const [isClicked, setIsClicked] = useState(false);

  return(
    <div 
      style={{
        width:"100px",
        height:"fit-content",
        backgroundColor:"var(--green-tefi)", 
        padding:"1rem", 
        borderRadius:"0.5rem", 
        color:"white", 
        display:"flex", 
        justifyContent:"center",
        margin:"1rem"
      }} 
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked ? (
        <img src={spinner1} alt="Loading..." style={{height:"100%", transition: "height 1s"}} />
      ) : (
        <span style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Enter</span>
      )}
      
    </div>
  )
}