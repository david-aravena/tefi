import Accordion from './components/accordion/'
import ListElements from "./components/listElements/"

export default function ListAccordion(){
  return(
    <Accordion title={"Mi lista"}>
      <ListElements />
    </Accordion>
  )
}