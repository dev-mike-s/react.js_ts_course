import { useNavigate } from "react-router"

function NoMatch() {

  const navigate = useNavigate()

  return (
    <div>
        <h2>404</h2>
        <button onClick={() => {
            // Erst anderen Code ausführen, dann weiterleiten!
            navigate("/")
        }}>zur Startseite</button><br />
        <button onClick={() => {
            navigate(-1)
        }}>zurück</button>
    </div>
  )
}

export default NoMatch