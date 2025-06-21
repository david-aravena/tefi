import { useState } from "react";
import { Link } from 'react-router';
import spinner1 from './svg/spinner1.svg'

export default function Buttons({width}){
  return(
    <div style={{width: width, padding:"0 10px"}}>
      <div style={{
        width:"100%", 
        backgroundColor:"white", 
        boxShadow:"var(--shadow-tefi)", 
        borderRadius:"10px", 
        padding:"1rem 1rem", 
        margin:"1rem 0",
        display:"flex",
        justifyContent:"center"
      }}>
        <ButtonSpinner />
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