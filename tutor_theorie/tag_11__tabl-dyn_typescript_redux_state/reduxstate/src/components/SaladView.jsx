// connect() stellt die Verbindung zu Redux her
import { connect } from "react-redux"
// zum Lesen des Redux-States brauchen wir die mapStateToProps-Funktion
import mapStateToProps from "../redux/mapStateToProps"
// zum Ändern des Redux-States brauchen wir die mapDispatchToProps-Funktion
import mapDispatchToProps from '../redux/mapDispatchToProps'

function SaladView(props) {
    return (
        <div>
            <h2>Salate</h2>
            Auf Lager: {props.numOfSalads}<br />
            <button onClick={() => {
                props.saladAdded(20)
            }}>Hinzufügen (20)</button><br />
            <button onClick={() => {
                props.saladRemoved(5)
            }}>Verringern (5)</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SaladView)