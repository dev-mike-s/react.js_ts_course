import PropsKind from './PropsKind'

function PropsElter() {

    function clickHandler(text) {
        console.log(text)
    }

    return (
        <div>
            <h2>Methoden als Props</h2>
            <PropsKind klickfunktion={clickHandler} />
        </div>
    )
}

export default PropsElter