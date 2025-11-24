import TableRow from './TableRow'

function Table(props) {

    /* 
    props:
     - data: Array (books/audio)
    */

    const KEYS_ARRAY = Object.keys(props.data[0])

    return (
        <table>
            <thead>
                <tr>
                    {
                        KEYS_ARRAY.map((ele) => {
                            // ele = String
                            return <th>{ele}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((ele, index) => {
                        // ele = Objekt
                        return <TableRow product={ele} i={index} />
                    })
                }
            </tbody>
        </table>
    )
}

export default Table