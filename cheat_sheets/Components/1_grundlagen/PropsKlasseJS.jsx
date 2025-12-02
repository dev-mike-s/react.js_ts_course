import { Component } from 'react'

export class PropsKlasseJS extends Component {
  render() {
    return (
        <div>
            <h4>Props (Klasse) JS</h4>
            <p>{this.props.name}</p>
        </div>
    )
  }
}

export default PropsKlasseJS