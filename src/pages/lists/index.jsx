import ListFiles from './components/listFiles/'
import ListAccordion from './components/listAccordion/'
import { Link } from 'react-router';

export default function Lists({width}){
  return(
    <div style={{width: width}}>
      <div className="containerList">
        <ListFiles />
      </div>

      <div className="containerList">
        <ListAccordion  />
      </div>
    </div>
  )
}


