import type { ClickHandlerType } from './PropsElter'

type Props = {
  klickfunktion: ClickHandlerType
}

function PropsKind(props: Props) {
  return (
    <button onClick={() => {
        props.klickfunktion("Hallo, Elter!")
    }}>Klick</button>
  )
}

export default PropsKind