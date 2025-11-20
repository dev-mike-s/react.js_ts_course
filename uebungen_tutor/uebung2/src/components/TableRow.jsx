
function TableRow(props) {

    /* 
    props:
     - product: Objekt
     - i: Zahl (Index)
    */

    const VALUES_ARRAY = Object.values(props.product)

    return (
        <tr className={props.i % 2 ? "odd" : undefined}>
            {
                VALUES_ARRAY.map((ele) => {
                    // ele = value (String / Zahl)
                    return <td>{ele}</td>
                })
            }
        </tr>
    )
}

export default TableRow