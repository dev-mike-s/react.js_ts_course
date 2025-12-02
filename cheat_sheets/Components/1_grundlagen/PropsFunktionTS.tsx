
type Props = {
    name: string
}

function PropsFunktionTS(props: Props) {
  return (
    <div>
        <h4>Props (Funktion) TS</h4>
        <p>{props.name}</p>
    </div>
  )
}

export default PropsFunktionTS