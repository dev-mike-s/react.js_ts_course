import TableRowAudio from "./TableRowAudio"
import type { AudioType } from "./Main"

type Props = {
    data: AudioType[]
}

function TableAudio(props: Props) {

    /* 
    props:
     - data: Array (books/audio)
    */

    return (
        <table>
            <thead>
                <tr>
                    <th>Autor</th>
                    <th>Titel</th>
                    <th>Jahr</th>
                    <th>Länge</th>
                    <th>Verlag</th>
                </tr>
            </thead>
            <tbody>
                    {
                        props.data.map((ele, index) => {
                            // ele = Objekt
                            return <TableRowAudio audio={ele} i={index} />
                        })
                    }
            </tbody>
        </table>
    )
}

export default TableAudio