import FormularControlled from "./FormularControlled"
import FormularUncontrolled from "./FormularUncontrolled"

function Formular() {

    function submitHandler(e) {
        // Die preventDefault-Methode gehört zum Event-Objekt.
        e.preventDefault()

        // Die submit-Methode gehört zum betreffenden form-Element.
        // e.target.submit()
    }

    return (
        <div>
            <h2>Formular</h2>
            {/* <form onSubmit={(e) => {e.preventDefault()}}> */}
            <form onSubmit={submitHandler}>
                <input type="text" /><br />
                <button>Bestätigen</button>
            </form>

            <FormularUncontrolled />
            <FormularControlled />
        </div>
    )
}

export default Formular