import { useState, useRef } from 'react'

function RefFunktionPersistent() {

    const [zaehler, setzeZaehler] = useState(0)

    // let besucher = 0

    // Rückgabewert von useRef ist ein Objekt.
    const besucher = useRef(0)

    const erhoeheZaehler = () => {  
        /*
        besucher++
        console.log(besucher)
        */
       
        // Der eigentliche Wert ist in "current" zu finden.
        besucher.current++
        console.log(besucher.current)

        setzeZaehler(c => c + 1)
    }

    return (
        <div>
            <h2>Ref / Funktion / persistente Variablen</h2>
            <button onClick={erhoeheZaehler}>Klick</button>
            <div>Zähler: {zaehler}</div>
        </div>
    )
}

export default RefFunktionPersistent