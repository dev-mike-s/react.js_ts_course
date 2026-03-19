import { useParams, Link } from 'react-router'

function Details() {

  const PARAMS = useParams()

  return (
      <>
        <div>
          <table>
            <thead>
              <tr>
                <th>Titel</th>
                <th>Jahr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{PARAMS.titel}</td>
                <td>{PARAMS.jahr}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="/">zur Startseite</Link>
      </>
  )
}

export default Details