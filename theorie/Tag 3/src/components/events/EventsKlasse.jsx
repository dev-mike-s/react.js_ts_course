import { Component } from 'react'

export class EventsKlasse extends Component {

    constructor(props) {
        super(props)

        // Event-Binding-Lösung 1a:
        // this.clickHandler = this.clickHandler.bind(this)
    }

    zaehler = 0

    /*
    Event-Binding-Lösung 2a:
    clickHandler = (e, text) => {
        this.zaehler++
        console.log(this.zaehler, e, text)
    }
    */
    clickHandler(e, text) {
        this.zaehler++
        console.log(this.zaehler, e, text)
    }

    render() {
        return (
            <div>
                <h2>Events (Klassenkomponente)</h2>
                <div>Zähler: {this.zaehler}</div>

                <button onMouseOver={() => {
                        console.log("MouseOver")
                    }}
                    onMouseOut={() => {
                        console.log("MouseOut")
                    }}>
                    Hover
                </button>

                {/* <button onClick={this.clickHandler}>Klick</button> */}

                {/*
                Event-Binding-Lösung 1b:
                <button onClick={this.clickHandler.bind(this)}>Klick</button>
                 */}

                 {/* Event-Binding-Lösung 2b: */}
                <button onClick={(e) => {
                    this.clickHandler(e, "Hallo, Funktion!")
                }}>Klick</button>
            </div>
        )
    }
}

export default EventsKlasse