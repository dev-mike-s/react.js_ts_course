import { Component } from 'react'

class LebenszyklusKlasse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    id
    // nach dem Hinzufügen
    componentDidMount() {
        // console.log("componentDidMount")
        this.id = setInterval(this.tick, 1000)
    } // kein this-Binding nötig in dieser Funktion

    // nach jedem Update
    componentDidUpdate() {
        //console.log("componentDidUpdate")
    } // kein this-Binding nötig in dieser Funktion

    // vor dem Beenden
    componentWillUnmount() {
        //console.log("componentWillUnmount")
        clearInterval(this.id)
    } // kein this-Binding nötig in dieser Funktion

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>Lebenszyklus / Klasse</h2>
                <div>Uhrzeit: {this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

export default LebenszyklusKlasse