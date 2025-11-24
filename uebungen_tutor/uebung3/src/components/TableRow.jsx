import { Link } from 'react-router'

function TableRow(props) {
  return (
    <tr className={props.i % 2 ? "odd" : undefined}>
      <td>{props.album.title}</td>
      <td><Link to={`/details/${props.album.title}/${props.album.year}`}>Details</Link></td>
    </tr>
  )
}

export default TableRow