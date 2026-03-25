
function EventsFunktion() {

    let zaehler = 0

    function clickHandler(e, text) {
        zaehler++
        console.log(zaehler, e, text)
    }

    return (
        <div>
            <h2>Events (Funktionskomponente)</h2>
            <div>Zähler: {zaehler}</div>

            <button onMouseOver={() => {
                    console.log("MouseOver")
                }}
                onMouseOut={() => {
                    console.log("MouseOut")
                }}>
                Hover
            </button>

            {/* <button onClick={clickHandler}>Klick</button> */}
            {/* <button onClick={() => {
                clickHandler("Hallo, Funktion!")
            }}>Klick</button> */}
            <button onClick={(e) => {
                clickHandler(e, "Hallo, Funktion!")
            }}>Klick</button>
        </div>
    )
}

export default EventsFunktion