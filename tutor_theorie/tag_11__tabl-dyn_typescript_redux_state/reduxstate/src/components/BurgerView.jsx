// connect() stellt die Verbindung zu Redux her
import { connect } from "react-redux"
// zum Lesen des Redux-States brauchen wir die mapStateToProps-Funktion
import mapStateToProps from "../redux/mapStateToProps"

function BurgerView(props) {

    return (
        <div>
            <h2>Burger</h2>
            Auf Lager: {props.numOfBurgers}
        </div>
    )
}

export default connect(mapStateToProps) (BurgerView)
// Higher Order Component (HOC)