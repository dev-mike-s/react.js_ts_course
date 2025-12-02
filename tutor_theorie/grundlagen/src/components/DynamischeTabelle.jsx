import { useState } from 'react'

function DynamischeTabelle() {

    const DATA = [
        {
            "id": 1,
            "titel": "Donkey Kong",
            "jahr": 1981,
            "publisher": "Nintendo",
            "preis": 99.99
        },
        {
            "id": 2,
            "titel": "Pac-Man",
            "jahr": 1980,
            "publisher": "Namco",
            "preis": 89.99
        },
        {
            "id": 3,
            "titel": "Asteroids",
            "jahr": 1979,
            "publisher": "Atari",
            "preis": 79.99
        },
        {
            "id": 4,
            "titel": "Space Invaders",
            "jahr": 1978,
            "publisher": "Taito",
            "preis": 69.99
        },
        {
            "id": 5,
            "titel": "Pong",
            "jahr": 1972,
            "publisher": "Atari",
            "preis": 59.99
        }
    ]

    const COLUMN_DEFINITION = [
        {
            label: "Titel",
            key: "titel",
            action: (row) => {
                console.log(row)
            }
        },
        {
            label: "Jahr",
            key: "jahr",
            optional: true // nur in Vollansicht
        },
        {
            label: "Publisher",
            key: "publisher",
            optional: true // nur in Vollansicht
        },
        {
            label: "Preis",
            key: "preis",
            postfix: " EUR",
            action: (row) => {
                console.log(row.preis)
            }
        }
    ]

    // Vollansicht?
    const [fullView, setFullView] = useState(false)

    return (
        <div>
            <h2>Dynamische Tabelle</h2>
            <button onClick={() => {
                setFullView(c => !c)
            }}>Umschalten ({fullView ? "Vollansicht" : "Kurzansicht"})</button>
            <table border="1">
                <thead>
                    <tr>
                        {
                            COLUMN_DEFINITION.map((col) => {
                                // col = Objekt
                                if (fullView || !col.optional) {
                                    return <th>{col.label}</th>
                                }
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        DATA.map((row) => {
                            // row = Objekt
                            return (<tr key={row.id}>
                                {
                                    COLUMN_DEFINITION.map((col) => {
                                        // col = Objekt
                                        if (fullView || !col.optional) {
                                            return <td onClick={() => {
                                                if (col.action) {
                                                    col.action(row)
                                                }
                                            }}>{row[col.key]}{col.postfix}</td>
                                            // return <td>{row[col.key]}{col.key === "preis" && " EUR"}</td>
                                        }
                                    })
                                }
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DynamischeTabelle