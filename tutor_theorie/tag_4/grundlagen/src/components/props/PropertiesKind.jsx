
function PropertiesKind(props) {

  /* 
  props:
   - datum: String
  */

  return (
    <div>
        <h4 className={props.datum ? "blauer-text" : undefined}>Properties / Kind</h4>
        {
            props.datum &&
            <>Geburtsdatum: {props.datum}</>
        }
    </div>
  )
}

export default PropertiesKind