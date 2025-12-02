import { BASE_URL } from '../assets/baseURL'
import axios from 'axios'

function Post(props) {

    /* 
    props:
     - setPosts (Setter-Funktion für "posts")
    */

    const addPost = () => {

        const NEW_POST = {
            "title": "another title",
            "views": 200
        }

        // URL: Basis-URL + entsprechende Eigenschaft, neues Objekt (ohne ID)
        axios.post(`${BASE_URL}/posts`, NEW_POST)
            .then((res) => {
                // res.data = neues Objekt (mit ID)
                // console.log(res)
                props.setPosts((c) => {
                    return [...c, res.data]
                })
            })
    }

    return (
        <button onClick={addPost}>Hinzufügen</button>
    )
}

export default Post