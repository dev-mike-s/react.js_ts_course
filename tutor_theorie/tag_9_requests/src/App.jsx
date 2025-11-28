import { useState, useEffect } from 'react'
import { BASE_URL } from './assets/baseURL'
import axios from 'axios'
import './App.css'
import Post from './components/Post'
import Del from './components/Del'
import Put from './components/Put'

function App() {

  // Post-State
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // GET-Request nach Initialisierung
    // URL: Basis-URL + entsprechende Eigenschaft 
    axios.get(`${BASE_URL}/posts`)
      // then: Request erfolgreich beendet
      .then((response) => {
        // console.log(response.data)
        setPosts(response.data)
      })
      // catch: Request fehlerhaft beendet
      .catch((error) => {
        console.log(error.message)
      })

  }, [])

  return (
    <>
      <h1>Posts</h1>
      <Post setPosts={setPosts} />
      <ul>
        {
          posts.map((ele) => {
            // ele = Objekt
            return (<li key={ele.id}>
              <Del id={ele.id} setPosts={setPosts} />
              <Put id={ele.id} setPosts={setPosts} />
              Titel: {ele.title}, Views: {ele.views}
            </li>)
          })
        }
      </ul>
    </>
  )
}

export default App
