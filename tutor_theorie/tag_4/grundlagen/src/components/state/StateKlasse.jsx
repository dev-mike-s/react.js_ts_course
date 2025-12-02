import { Component } from 'react'

export class StateKlasse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            error: false
        }
    }

    setToZero = () => {
        // falsch: this.state.counter = 0

        // bei Vergabe von absoluten Werten genügt
        // die Übergabe des State-Objekts (Ausdruck)
        this.setState({
            counter: 0
        })
    }

    incrementByOne = () => {
        /* 
        falsch: this.state.counter++
        auch falsch:
        this.setState({
                counter: this.state.counter + 1
            })

        Bei Vergabe von relativen Werten braucht man
        die Übergabe einer Callback-Funktion, in der
        dann das State-Objekt als Rückgabewert
        erzeugt wird.
        */
        this.setState((currentState) => {
            return {
                counter: currentState.counter + 1
            }
        },
        /* Für Aufgaben, die explizit nach Änderung des
        state-Objektes ausgeführt werden sollen,
        gibt es optional eine weitere Callback-Funktion. */
        () => {
            console.log(this.state.counter)
        })
    }

    incrementByFive = () => {
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
    }

    toggleError = () => {
        this.setState((currentState) => {
            return {
                error: !currentState.error
            }
        })
    }

    render() {
        return (
        <div>
            <h2>State (Klassenkompnente)</h2>

            <button onClick={this.toggleError}>"Fehler umschalten"</button>
            {
                this.state.error &&
                <div>Fehler!</div>
            }

            <div>Zähler: {this.state.counter}</div>
            <button onClick={this.setToZero}>Zurücksetzen auf 0</button><br />
            <button onClick={this.incrementByOne}>Hochzählen um 1</button><br />
            <button onClick={this.incrementByFive}>Hochzählen um 5</button>
            
        </div>
        )
    }
}

export default StateKlasse