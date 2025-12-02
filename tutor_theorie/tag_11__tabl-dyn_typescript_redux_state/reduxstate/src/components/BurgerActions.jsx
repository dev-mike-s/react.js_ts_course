// connect() stellt die Verbindung zu Redux her
import { connect } from "react-redux"
// zum Ändern des Redux-States brauchen wir die mapDispatchToProps-Funktion
import mapDispatchToProps from "../redux/mapDispatchToProps"

function BurgerActions(props) {
    return (
        <div>
            <button onClick={() => {
                props.burgerAdded(10)
            }}>Hinzufügen (10)</button><br />
            <button onClick={() => {
                props.burgerRemoved()
            }}>Verringern (1)</button><br />
            <button onClick={() => {
                props.burgerRemoved(5)
            }}>Verringern (5)</button>
        </div>
    )
}

// mapDispatchToProps ist immer das 2. Argument für connect()
// Falls mapStateToProps nicht verwendet wird, als 1. Argument "null" übergeben
export default connect(null, mapDispatchToProps)(BurgerActions)