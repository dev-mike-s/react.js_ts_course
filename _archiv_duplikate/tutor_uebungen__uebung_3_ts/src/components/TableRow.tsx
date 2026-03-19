import { Link } from 'react-router'
import type { Album } from './Table'

type Props = {
  i: number,
  album: Album
}

function TableRow(props: Props) {
  return (
    <tr className={props.i % 2 ? "odd" : undefined}>
      <td>{props.album.title}</td>
      <td><Link to={`/details/${props.album.title}/${props.album.year}`}>Details</Link></td>
    </tr>
  )
}

export default TableRow