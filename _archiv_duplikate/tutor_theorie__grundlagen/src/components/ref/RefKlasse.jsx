import { Component, createRef } from 'react'

class RefKlasse extends Component {

    constructor(props) {
        super(props)

        this.headerRef = createRef() // H2
        this.inputRef = createRef() // INPUT
    }

    inputHandler = () => {
        /* 
        Die eigentliche Elementreferenz befindet
        sich in der Eigenschaft "current".
        */
        this.headerRef.current.innerHTML =
        this.inputRef.current.value
    }

    render() {
        return (
            <div>
                {/* Das "ref"-Attribut stellt die Verbindung zum Element her. */}
                <h2 ref={this.headerRef}>Ref / Klasse</h2>
                <input ref={this.inputRef} type="text"
                onChange={this.inputHandler} />
            </div>
        )
    }
}

export default RefKlasse