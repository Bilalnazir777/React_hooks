import React,{useState,useEffect} from 'react'
import axios from 'axios'
function FetchdatainEffect() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [buttonforid,setbuttonforid]= useState(1)
    
    const Handleclick =()=>{
        setbuttonforid(id)
    }
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonforid}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[buttonforid])
    
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
            <button onClick={Handleclick}>click to fetch data</button>
             <div>title is = {post.title}</div>
            
            {/* <ul>
                {
                    post.map(variable=><li key={variable.id}>{variable.body}</li>)                                 for all list
                }
            </ul> */}
        </div>
    )
}

export default FetchdatainEffect
