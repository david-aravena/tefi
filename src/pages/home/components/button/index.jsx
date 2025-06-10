import { useState } from 'react';
import spinner1 from './svg/spinner1.svg'

export default function ButtonSpinner(){
  const [isClicked, setIsClicked] = useState(false);

  return(
    <div 
      style={{
        width:"100px",
        backgroundColor:"blue", 
        padding:"1rem", 
        borderRadius:"0.5rem", 
        color:"white", 
        display:"flex", 
        justifyContent:"center",
        margin:"3rem"
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