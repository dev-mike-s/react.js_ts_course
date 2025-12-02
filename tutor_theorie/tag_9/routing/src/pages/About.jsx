import { useEffect } from 'react'
import { Link } from 'react-router'

function About(props) {

  useEffect(() => {
    // wird nur nach Hinzufügen der Komponente ausgeführt
    console.log("init")

    return () => {
      // wird vor dem Beenden der Komponente ausgeführt
      console.log("exit")
    }
  }, [])

  return (
    <div>
      Über {props.wen}<br />
      <Link to="/">zur Startseite</Link>
    </div>
  )
}

export default About