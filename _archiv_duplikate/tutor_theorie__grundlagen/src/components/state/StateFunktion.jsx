import { useState } from 'react'

function StateFunktion() {

    // counter
    const [counter, setCounter] = useState(0)

    // error
    const [error, setError] = useState(false)

    const setToZero = () => {
        setCounter(0)
    }

    const incrementByOne = () => {
        setCounter((currentState) => {
            return currentState + 1
        })
        //setCounter(c=>c+1)
    }

    const incrementByFive = () => {
        incrementByOne()
        incrementByOne()
        incrementByOne()
        incrementByOne()
        incrementByOne()
    }

    const toggleError = () => {
        setError((currentState) => {
            return !currentState
        })
    }

    return (
        <div>
            <h2>State / useState</h2>

            <button onClick={toggleError}>"Fehler umschalten"</button>
            {
                error &&
                <div>Fehler!</div>
            }

            <div>Zähler: {counter}</div>
            <button onClick={setToZero}>Zurücksetzen auf 0</button><br />
            <button onClick={incrementByOne}>Hochzählen um 1</button><br />
            <button onClick={incrementByFive}>Hochzählen um 5</button>

        </div>
    )
}

export default StateFunktion