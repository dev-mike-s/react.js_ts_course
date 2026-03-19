import PropsKind from './PropsKind'

export type ClickHandlerType = (text: string) => void

function PropsElter() {

    const clickHandler: ClickHandlerType = (text) => {
        console.log(text)
    }

    return (
        <div>
            <h2 className="gross">Methoden als Props</h2>
            <PropsKind klickfunktion={clickHandler} />
        </div>
    )
}

export default PropsElter