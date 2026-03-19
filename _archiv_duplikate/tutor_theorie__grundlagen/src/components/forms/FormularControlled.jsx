import { Component } from 'react'

class FormularControlled extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vorname: "",
            nachname: "",
            nachricht: "",
            framework: "",
            disclaimer: false,
            hobbies: [false, false],
            payment: [false, false]
        }
    }

    submitHandler(e) {
        e.preventDefault()
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    // inputCheckedHandler = (e, checked) => {
    inputCheckedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
        /* 
        if (checked === "checked") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        */
    }
    
    inputMultipleCheckedHandler = (e, index) => {
        this.setState((currentState) => {
            const NEW_ARRAY = currentState[e.target.name].map((ele, i) => {
                return index === i ? e.target.checked : ele
            })
            return {
                [e.target.name]: NEW_ARRAY
            }
        })
    }
    
    inputMultipleRadioHandler = (e, index) => {
        this.setState((currentState) => {
            const NEW_ARRAY = currentState[e.target.name].map((ele, i) => {
                return index === i ? true : false
            })
            return {
                [e.target.name]: NEW_ARRAY
            }
        })
    }

    render() {
        return (
            <div>
                <h4>Controlled Forms</h4>
                <form onSubmit={this.submitHandler}>

                    <label>
                        Vorname:
                        <input type="text" name="vorname"
                        value={this.state.vorname}
                        onChange={this.inputHandler} />
                        {/* 
                            !this.state.vorname &&
                            <div className="roter-text">Bitte Eingabefeld ausfüllen!</div>
                        */}
                    </label><br />

                    <label>
                        Nachname:
                        <input type="text" name="nachname"
                        value={this.state.nachname}
                        onChange={this.inputHandler} />
                    </label><br />

                    <label>
                        Nachricht:
                        <textarea name="nachricht"
                        value={this.state.nachricht}
                        onChange={this.inputHandler}></textarea>
                    </label><br />

                    <label>
                        Lieblingsframework:
                        <select name="framework"
                        value={this.state.framework}
                        onChange={this.inputHandler}>
                            <option value="">Bitte auswählen</option>
                            <option value="a">Angular</option>
                            <option value="r">React</option>
                            <option value="v">Vue</option>
                        </select>
                    </label><br />

                    <label>
                        Disclaimer:
                        <input type="checkbox" name="disclaimer"
                        checked={this.state.disclaimer}
                        onChange={this.inputCheckedHandler}
                        /*
                        onChange={(e) => {
                            this.inputCheckedHandler(e, "checked")
                        }}   
                        */
                        />
                    </label><br />

                    <label>
                        Hobbies:<br />
                        Essen <input type="checkbox" name="hobbies" value="essen"
                        checked={this.state.hobbies[0]}
                        onChange={(e) => {
                            this.inputMultipleCheckedHandler(e, 0)
                        }} /><br />
                        Schlafen <input type="checkbox" name="hobbies" value="schlafen"
                        checked={this.state.hobbies[1]}
                        onChange={(e) => {
                            this.inputMultipleCheckedHandler(e, 1)
                        }} />
                    </label><br />

                    <label>
                        Zahlungsart:<br />
                        GreenCard <input type="radio" name="payment" value="greencard"
                        checked={this.state.payment[0]}
                        onChange={(e) => {
                            this.inputMultipleRadioHandler(e, 0)
                        }}  /><br />
                        PayDude <input type="radio" name="payment" value="paydude"
                        checked={this.state.payment[1]}
                        onChange={(e) => {
                            this.inputMultipleRadioHandler(e, 1)
                        }} />
                    </label><br />

                    <button disabled={
                        !this.state.vorname ||
                        !this.state.nachname ||
                        !this.state.nachricht ||
                        !this.state.framework ||
                        !this.state.disclaimer ||
                        !this.state.hobbies.some((ele) => {
                            // ele = Boolean
                            return ele
                        }) ||
                        !this.state.payment.some((ele) => {
                            // ele = Boolean
                            return ele
                        })
                    }>Bestätigen</button>
                </form>
            </div>
        )
    }
}

export default FormularControlled