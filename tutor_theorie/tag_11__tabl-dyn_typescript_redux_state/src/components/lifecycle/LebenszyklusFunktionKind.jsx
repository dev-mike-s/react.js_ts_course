import { useEffect } from 'react'

function LebenszyklusFunktionKind() {

    useEffect(() => {
        // wird nur nach Hinzufügen der Komponente ausgeführt
        console.log("init")

        return () => {
            // wird vor dem Beenden der Komponente ausgeführt
            console.log("exit")
        }
    }, [])

    return (
        <div>Fehler!</div>
    )
}

export default LebenszyklusFunktionKind