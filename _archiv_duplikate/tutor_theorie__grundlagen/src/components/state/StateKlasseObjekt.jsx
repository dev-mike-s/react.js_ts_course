import { Component } from 'react'

class StateKlasseObjekt extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formular: {
                vorname: "",
                nachname: ""
            }
        }
    }

    inputHandler = (e) => {
        this.setState((currentState) => {
            return {
                formular: {
                    ...currentState.formular,
                    [e.target.name]: e.target.value
                }
            }
        },
        () => { console.log(this.state.formular) })
    }

    render() {
        return (
            <div>
                <h2>State / Objekt</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Vorname:
                        <input type="text" name="vorname"
                            value={this.state.formular.vorname}
                            onChange={this.inputHandler} />
                    </label><br />
                    <label>
                        Nachname:
                        <input type="text" name="nachname"
                            value={this.state.formular.nachname}
                            onChange={this.inputHandler} />
                    </label>
                </form>
            </div>
        )
    }
}

export default StateKlasseObjekt