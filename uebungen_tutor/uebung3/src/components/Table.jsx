import TableRow from "./TableRow"

function Table() {

    const ALBUMS = [
        {
            "title": "Wretch",
            "year": 1991
        },
        {
            "title": "Blues for the Red Sun",
            "year": 1992
        },
        {
            "title": "Welcome to Sky Valley",
            "year": 1994
        },
        {
            "title": "...And the Circus Leaves Town",
            "year": 1995
        }
    ]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ALBUMS.map((ele, index) => {
                            // ele = Objekt
                            return (<TableRow
                                    album={ele}
                                    i={index}
                                />)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table