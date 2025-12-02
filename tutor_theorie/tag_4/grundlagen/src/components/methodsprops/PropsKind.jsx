
function PropsKind(props) {
  return (
    <button onClick={() => {
        props.klickfunktion("Hallo, Elter!")
    }}>Klick</button>
  )
}

export default PropsKind