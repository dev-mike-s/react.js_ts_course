import PropertiesKind from "./PropertiesKind"

function Properties(props) {

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