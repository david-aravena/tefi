import ListFiles from './listFiles'
import { Link } from 'react-router';

export default function Lists({isMobile}){
  return(
    <div style={isMobile ? {width:"90%"} : {width:"50%"}}>
      <ListFiles />
      <div style={{width:"100%", display:"flex", justifyContent:"flex-start", padding:"0 1rem"}}>
        <Link to="/botones">
          <div style={{width:"50px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h3>Botones</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}


