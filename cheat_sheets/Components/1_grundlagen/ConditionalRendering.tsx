
type Props = {}

function ConditionalRendering({}: Props) {

    let isLoggedIn = true

    /*
    * if
    */

    let message1
    if (isLoggedIn) {
        message1 = <p>Willkommen, Admin!</p>
    }

    /*
    * if/else
    */

    /* if (isLoggedIn) {
        return <div>Willkommen, Admin!</div>
    } else {
        return <div>Willkommen, Gast!</div>
    } */

    let message2
    if (isLoggedIn) {
        message2 = <p>Willkommen, Admin!</p>
    } else {
        message2 = <p>Willkommen, Gast!</p>
    }

    return (
        <div>
            {/* Expression Container */}
            <h4>Conditional Rendering</h4>

            <h5>if</h5>
            {message1}

            <h6>Kurzschluss-Operator (Short Circuit Operator)</h6>
            {
                isLoggedIn && <p>Willkommen, Admin!</p>
            }

            <h5>if/else</h5>
            {message2}
            
            <h6>Ternärer Operator (Ternary Operator)</h6>
            {
                isLoggedIn ? 
                <p>Willkommen, Admin!</p> :
                <p>Willkommen, Gast!</p>
            }
        </div>
    )
}

export default ConditionalRendering