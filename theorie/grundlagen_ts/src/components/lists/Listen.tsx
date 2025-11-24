import ListenKind from "./ListenKind"

function Listen() {

    let namen = ["Diana", "Bruce", "Clark", "Herbert"]

    /* 
    let namen = [{
        id: 658461,
        name: "Diana"
    },
    {
        id: 658861,
        name: "Diana"
    }]
    */

    /* let ausgabe = [
        <div>{namen[0]}</div>,
        <div>{namen[1]}</div>,
        <div>{namen[2]}</div>
    ] */

    /*
    function returnValue(ele, index, arr) {
        if (index < arr.length - 1) {
            return ele + ", "
        } else {
            return ele + "."
        }
    }

    const AUSGABE_ARRAY = namen.map(returnValue)
    */

    let zahlen = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    return (
        <div>
            <h2>Listen</h2>

            {/* DIV's */}
            {
                namen.map((value, index) => {
                    // value = String
                    // return <div key={value.id}>{value.name}</div>
                    
                    // Falls kein geeigneter Wert vorhanden ist, 
                    // kann auch der Index für den Key verwendet werden.
                    return <div key={index}>{value}</div>
                })
            }

            {/* LI's in OL */}
            <ol>
            {
                namen.map((value) => {
                    // value = String
                    return <li>{value}</li>
                })
            }
            </ol>

            {/* DIV's in Unterkomponente */}
            {
                namen.map((value, index) => {
                    // value = String
                    return <ListenKind name={value} i={index} />
                })
            }

            {/* Verschachtelung: SPAN's in DIV's */}
            {
                zahlen.map((numArr) => {
                    // numArr = Array
                    return (<div>
                        {
                            numArr.map((num, i, arr) => {
                                // num = Zahl
                                return <span>{num}{i < arr.length - 1 && ", "}</span>
                            })
                        }
                    </div>)
                })
            }

        </div>
    )
}

export default Listen