
function ListenKind(props) {

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