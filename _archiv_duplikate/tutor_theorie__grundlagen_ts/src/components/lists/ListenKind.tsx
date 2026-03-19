type Props = {
    name: string,
    i: number
}

function ListenKind(props: Props) {

    /*
    *   props:
    *   - name: String
    *   - i: Zahl (Index)
    */

    return (
        <div>
            {props.i+1}. {props.name}
        </div>
    )
}

export default ListenKind