import { Component } from 'react'

type Props = {}

type State = {}

class KomponentenKlasseTS extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return ( // gibt JSX zurück
      <div>Klassenkomponente TS</div>
    )
  }
}

export default KomponentenKlasseTS