import PropertiesKind from "./PropertiesKind"
import type { Biografie } from "../../App"

type Props = {
  vorname: string,
  nachname: string,
  bio: Biografie
}


function Properties(props: Props) {

  /* 

  props = Objekt

  props:
   - vorname: String
   - nachname: String
   - bio: Objekt
   
  */
  
  return (
    <div>
      <h2>Properties</h2>
      Vorname: {props.vorname}<br />
      Nachname: {props.nachname}<br />
      Geburtsort: {props.bio.geburtsort}
      <PropertiesKind datum={props.bio.geburtsdatum} />
      <PropertiesKind />
    </div>
  )
}

export default Properties