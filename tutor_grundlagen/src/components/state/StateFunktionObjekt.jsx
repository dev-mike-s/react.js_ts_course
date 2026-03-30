import { useState } from 'react'

function StateFunktionObjekt() {

    const [formular, setzeFormular] = useState({
        vorname: "",
        nachname: ""
    })

    const inputHandler = (e) => {
        setzeFormular((currentState) => {
            return {
                ...currentState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div>
            <h2>State / useState / Objekt</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    Vorname:
                    <input type="text" name="vorname"
                        value={formular.vorname}
                        onChange={inputHandler} />
                </label><br />
                <label>
                    Nachname:
                    <input type="text" name="nachname"
                        value={formular.nachname}
                        onChange={inputHandler} />
                </label>
            </form>
        </div>
    )
}

export default StateFunktionObjekt