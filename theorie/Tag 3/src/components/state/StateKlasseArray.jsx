import { Component } from 'react'

export class StateKlasseArray extends Component {

    constructor(props) {
        super(props)

        this.state = {
            zahlen: []
        }
    }

    neueZahl = () => {
        // Zufallszahl von einschließlich 1 bis 10
        const ZUFALLSZAHL = Math.floor(Math.random() * 10) + 1
        this.setState((currentState) => {
            return {
                zahlen: [...currentState.zahlen, ZUFALLSZAHL]
            }
        })
    }

    loescheZahl = (index) => {
        this.setState((currentState) => {
            /* 
            "filter" erzeugt ein neues Array, das mit den Elementen
            aus dem alten Array gefüllt wird; basierend auf dem
            Rückgabewert der Callback: Bei "true" wird das Element
            übernommen, bei "false" nicht.
            */
            const NEUES_ARRAY = currentState.zahlen.filter((ele, i) => {
                return index != i
            })
            return {
                zahlen: NEUES_ARRAY
            }
        })
    }

    render() {
        return (
        <div>
            <h2>State / Array</h2>
            <button onClick={this.neueZahl}>Zahl hinzufügen</button><br />
            <button onClick={() => {
                this.setState({
                    zahlen: []
                })
            }}>Alle löschen</button>
            {
                this.state.zahlen.length > 0 &&
                (<ul>
                {
                    this.state.zahlen.map((num, index) => {
                        // num = Zahl
                        return (<li>
                            <button onClick={() => {
                                this.loescheZahl(index)
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
}

export default StateKlasseArray