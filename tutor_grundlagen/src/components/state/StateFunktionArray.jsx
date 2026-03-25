import { useState } from 'react'

function StateFunktionArray() {

    const [zahlen, setzeZahlen] = useState([])

    const neueZahl = () => {
        // Zufallszahl von einschließlich 1 bis 10
        const ZUFALLSZAHL = Math.floor(Math.random() * 10) + 1
        setzeZahlen((currentState) => {
            return [...currentState, ZUFALLSZAHL]
        })
    }

    const loescheZahl = (index) => {
        setzeZahlen((currentState) => {
            const NEUES_ARRAY = currentState.filter((ele, i) => {
                return index != i
            })
            return NEUES_ARRAY
        })
    }

    return (
        <div>
            <h2>State / useState / Array</h2>
            <button onClick={neueZahl}>Zahl hinzufügen</button><br />
            <button onClick={() => {
                setzeZahlen([])
            }}>Alle löschen</button>
            {
                zahlen.length > 0 &&
                (<ul>
                    {
                        zahlen.map((num, index) => {
                            // num = Zahl
                            return (<li>
                                <button onClick={() => {
                                    loescheZahl(index)
                                }}>
                                    Löschen
                                </button>
                                {num}
                            </li>)
                        })
                    }
                </ul>)
            }
        </div>
    )
}

export default StateFunktionArray