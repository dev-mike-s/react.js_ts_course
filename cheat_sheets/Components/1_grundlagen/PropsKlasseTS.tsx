import { Component } from 'react'

type Props = {
    name: string
}

type State = {}

class PropsKlasseTS extends Component<Props, State> {

  render() {
    return (
        <div>
            <h4>Props (Klasse) TS</h4>
            <p>{this.props.name}</p>
        </div>
    )
  }
}

export default PropsKlasseTS