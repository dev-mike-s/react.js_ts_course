import { Component } from 'react'

class FormularControlled extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vorname: ""
        }
    }

    submitHandler(e) {
        e.preventDefault()
    }

    inputHandler = (e) => {
        this.setState({
            vorname: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Controlled Forms</h4>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Vorname:
                        <input type="text" value={this.state.vorname}
                        onChange={this.inputHandler} />
                    </label><br />
                    <button disabled={
                        !this.state.vorname
                    }>Bestätigen</button>
                </form>
            </div>
        )
    }
}

export default FormularControlled