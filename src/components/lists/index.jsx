import ListFiles from './listFiles'
import { Link } from 'react-router';

export default function Lists({width}){
  return(
    <div style={{width: width, padding:"0 10px"}}>
      <div style={{
        width:"100%", 
        backgroundColor:"white", 
        boxShadow:"var(--shadow-tefi)", 
        borderRadius:"10px", 
        padding:"1rem 1rem", 
        margin:"1rem 0"
      }}>
        <ListFiles />
      </div>
    </div>
  )
}


