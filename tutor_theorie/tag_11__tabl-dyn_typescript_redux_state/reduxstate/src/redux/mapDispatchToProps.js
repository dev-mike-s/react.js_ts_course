// Action Types
import {
    BURGER_ADDED,
    BURGER_REMOVED,
    SALAD_ADDED,
    SALAD_REMOVED
} from './actionTypes'

const mapDispatchToProps = (dispatch) => {
    return {
        // Burger hinzufügen
        burgerAdded: (qty = 1) => {
            dispatch({
                type: BURGER_ADDED,
                payload: qty
            })
        },
        // Burger verringern
        burgerRemoved: (qty = 1) => {
            dispatch({
                type: BURGER_REMOVED,
                payload: qty
            })
        },
        // Salat hinzufügen
        saladAdded: (qty = 1) => {
            dispatch({
                type: SALAD_ADDED,
                payload: qty
            })
        },
        // Salat verringern
        saladRemoved: (qty = 1) => {
            dispatch({
                type: SALAD_REMOVED,
                payload: qty
            })
        }
    }
}

export default mapDispatchToProps