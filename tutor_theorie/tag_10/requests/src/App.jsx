import { useState, useEffect } from 'react'
import { BASE_URL } from './assets/baseURL'
import axios from 'axios'
import './App.css'
import Post from './components/Post'
import Del from './components/Del'
import Put from './components/Put'
import Patch from './components/Patch'

function App() {

  // Post-State
  const [posts, setPosts] = useState([])

  // Request-State
  const [requestActive, setRequestActive] = useState(false)

  // Fehler-State
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    setRequestActive(true)
    // GET-Request nach Initialisierung
    // URL: Basis-URL + entsprechende Eigenschaft 
    axios.get(`${BASE_URL}/ereg`)
      // then: Request erfolgreich beendet
      .then((response) => {
        // console.log(response.data)
        setPosts(response.data)
        setErrorMessage("")
        // Ladevorgang beendet
        setRequestActive(false)
      })
      // catch: Request fehlerhaft beendet
      .catch((error) => {
        // console.log(error.message)
        setErrorMessage(error.message)
        // Ladevorgang beendet
        setRequestActive(false)
      })

  }, [])

  return (
    <>
      {
        requestActive ?
        // Ladevorgang
        <div>Lade...</div> :
        errorMessage ?
        // Fehlermeldung
        <div>{errorMessage}</div> :
        // kein Ladevorgang und kein Fehler
        posts.length > 0 &&
        // Posts-Array nicht leer
        (<>
          <h1>Posts</h1>
          <Post setPosts={setPosts} />
          {
            posts.map((ele) => {
              // ele = Objekt
              return (<div key={ele.id}>
                <Del id={ele.id} setPosts={setPosts} />
                <Put post={ele} setPosts={setPosts} />
                <Patch id={ele.id} setPosts={setPosts} />
                Titel: {ele.title}, Views: {ele.views}
              </div>)
            })
          }
        </>)
      }
    </>
    
    /*
    <>
      <h1>Posts</h1>
      <Post setPosts={setPosts} />
        {
          posts.map((ele) => {
            // ele = Objekt
            return (<div key={ele.id}>
              <Del id={ele.id} setPosts={setPosts} />
              <Put id={ele.id} setPosts={setPosts} />
              <Patch id={ele.id} setPosts={setPosts} />
              Titel: {ele.title}, Views: {ele.views}
            </div>)
          })
        }
    </>
    */
  )
}

export default App
