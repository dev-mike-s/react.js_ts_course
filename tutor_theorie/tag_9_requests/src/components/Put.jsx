import { BASE_URL } from '../assets/baseURL'
import axios from 'axios'

function Put(props) {

    const UPDATED_POST = {
        "title": "no title",
        "views": 0
    }

    /* 
    props:
     - id (String)
     - setPosts (Setter-Funktion für "posts")
    */

    const updatePost = () => {

        // URL: Basis-URL + entsprechende Eigenschaft + ID,
        // aktualisiertes Objekt (ohne ID)
        axios.put(`${BASE_URL}/posts/${props.id}`, UPDATED_POST)
            .then((res) => {
                // res.data = geändertes Objekt (mit ID)
                // console.log(res)
                props.setPosts((c) => {
                    return c.map((ele) => {
                        return ele.id === props.id ? res.data : ele
                    })
                })
            })

    }

    return (
        <button onClick={updatePost}>Update</button>
    )
}

export default Put