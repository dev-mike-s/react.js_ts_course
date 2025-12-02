
function FormularUncontrolled() {

    function submitHandler(e) {
        e.preventDefault()
    }

    function inputHandler(e) {
        console.log(e.target.value)
    }

    return (
        <div>
            <h4>Uncontrolled Forms</h4>
            <form onSubmit={submitHandler}>
                <input type="text" defaultValue="Fritz"
                onChange={inputHandler} /><br />
                <button>Bestätigen</button>
            </form>
        </div>
    )
}

export default FormularUncontrolled