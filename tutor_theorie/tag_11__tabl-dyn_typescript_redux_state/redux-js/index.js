const redux = require("redux")
const createStore = redux.createStore

// Ausgangswert des State
const initialState = {
    numOfBurgers: 10,
    numOfSalads: 20
}

// Action Types
const BURGER_ADDED = "BURGER_ADDED"
const BURGER_REMOVED = "BURGER_REMOVED"
const SALAD_ADDED = "SALAD_ADDED"
const SALAD_REMOVED = "SALAD_REMOVED"

// Action Creator
const burgerAdded = (qty = 1) => {
    return {
        type: BURGER_ADDED,
        payload: qty
    }
}
const burgerRemoved = (qty = 1) => {
    return {
        type: BURGER_REMOVED,
        payload: qty
    }
}
const saladAdded = (qty = 1) => {
    return {
        type: SALAD_ADDED,
        payload: qty
    }
}
const saladRemoved = (qty = 1) => {
    return {
        type: SALAD_REMOVED,
        payload: qty
    }
}

// Reducer
const reducer = (state = initialState, action) => {
    /* 
    action = {
        type: "BURGER_ADDED", // Typ der Aktion
        payload: 50 // zusätzliche Daten
    }
    */

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

// Store erzeugen
const store = createStore(reducer)

console.log("initalState: ", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("updatedState: ", store.getState())
})

/*
store.dispatch({
    type: BURGER_ADDED,
    payload: 50
})
*/

store.dispatch(burgerAdded(50))
store.dispatch(burgerRemoved(5))
store.dispatch(saladAdded(20))
store.dispatch(saladRemoved())

unsubscribe()