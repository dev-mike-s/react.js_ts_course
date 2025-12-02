import { useEffect, useState } from 'react'
import LebenszyklusFunktionKind from './LebenszyklusFunktionKind'

function LebenszyklusFunktion() {

    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(false)

    // wird nach Hinzufügen der Komponente
    // und wird nach jedem Update ausgeführt    
    useEffect(() => {
        //console.log("useEffect")
    })

    // wird nur nach Hinzufügen der Komponente ausgeführt
    useEffect(() => {
        // console.log("useEffect")
    }, [])

    // wird nach Hinzufügen der Komponente ausgeführt
    // wird nur nach Update von "counter" ausgeführt
    useEffect(() => {
        // console.log("useEffect")
    }, [counter])


    useEffect(() => {
        // wird nur nach Hinzufügen der Komponente ausgeführt

        return () => {
            // wird vor dem Beenden der Komponente ausgeführt
            // console.log("useEffect")
        }

    }, [])

    return (
        <div>
            <h2>Lebenszyklus / Funktion</h2>
            <div>Zähler: {counter}</div>
            <button onClick={() => {
                setCounter(c => c + 1)
            }}>Hochzählen</button><br />
            {
                error &&
                <LebenszyklusFunktionKind />
            }
            <button onClick={() => {
                setError(c => !c)
            }}>Umschalten</button>
        </div>
    )
}

export default LebenszyklusFunktion