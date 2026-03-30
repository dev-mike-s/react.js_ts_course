import type { AudioType } from "./Main"

type Props = {
    audio: AudioType,
    i: number
}

function TableRowAudio(props: Props) {

    /* 
    props:
     - audio: Objekt
     - i: Zahl (Index)
    */

    return (
            <tr className={props.i % 2 ? "odd" : undefined}>
                <td>{props.audio.Autor}</td>
                <td>{props.audio.Titel}</td>
                <td>{props.audio.Jahr}</td>
                <td>{props.audio["Länge"]}</td>
                <td>{props.audio.Verlag}</td>
            </tr>
    )
}

export default TableRowAudio