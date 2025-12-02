import { BASE_URL } from '../assets/baseURL'
import axios from 'axios'

function Del(props) {

    /* 
    props:
     - id (String)
     - setPosts (Setter-Funktion für "posts")
    */

    const deletePost = () => {

        // URL: Basis-URL + entsprechende Eigenschaft + ID
        axios.delete(`${BASE_URL}/posts/${props.id}`)
            .then((res) => {
                // res.data = gelöschtes Objekt
                // console.log(res)
                props.setPosts((c) => {
                    return c.filter((ele) => {
                        return ele.id != props.id
                    })
                })
            })
            
    }

    return (
        <button onClick={deletePost}>Löschen</button>
    )
}

export default Del