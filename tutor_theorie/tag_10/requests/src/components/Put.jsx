import { BASE_URL } from '../assets/baseURL'
import axios from 'axios'

function Put(props) {

    /* 
    props:
     - post (Objekt)
     - setPosts (Setter-Funktion für "posts")
    */

    const UPDATED_POST = {
        "title": props.post.title,
        "views": 0
    }

    const updatePost = () => {

        // URL: Basis-URL + entsprechende Eigenschaft + ID,
        // aktualisiertes Objekt (ohne ID)
        axios.put(`${BASE_URL}/posts/${props.post.id}`, UPDATED_POST)
            .then((res) => {
                // res.data = geändertes Objekt (mit ID)
                // console.log(res)
                props.setPosts((c) => {
                    return c.map((ele) => {
                        return ele.id === props.post.id ? res.data : ele
                    })
                })
            })

    }

    return (
        <button onClick={updatePost}>Update (Put)</button>
    )
}

export default Put