// Action Types
import {
    BURGER_ADDED,
    BURGER_REMOVED,
    SALAD_ADDED,
    SALAD_REMOVED
} from './actionTypes'

// Ausgangswert des State
const initialState = {
    numOfBurgers: 10,
    numOfSalads: 20
}

// Reducer
const reducer = (state = initialState, action) => {

    switch (action.type) {

        // Burger hinzufügen
        case BURGER_ADDED:
            // action.payload = Anzahl
            return {
                ...state, // alle Properties auflisten
                numOfBurgers: state.numOfBurgers + action.payload
            }
        // Burger abziehen
        case BURGER_REMOVED:
            // action.payload = Anzahl
            if (action.payload >= 3) {
                return {
                    ...state,
                    numOfBurgers: state.numOfBurgers - action.payload,
                    numOfSalads: state.numOfSalads - 1
                }
            } else {
                return {
                    ...state,
                    numOfBurgers: state.numOfBurgers - action.payload
                }
            }

        // Salat hinzufügen
        case SALAD_ADDED:
            // action.payload = Anzahl
            return {
                ...state,
                numOfSalads: state.numOfSalads + action.payload
            }
        // Salat abziehen
        case SALAD_REMOVED:
            // action.payload = Anzahl
            return {
                ...state,
                numOfSalads: state.numOfSalads - action.payload
            }

        default:
            return state

    }

}

export default reducer