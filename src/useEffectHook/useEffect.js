import React,{useState,useEffect}from 'react'

function useEffectBasic() {
    
    const [initialvalue,setCount]=useState(0)
    const [name,setName] = useState('')
    const count=initialvalue
    //useeffect will be applicable whenn value of count is changed
    useEffect(()=>{
        console.log("updating..");
        document.title =(`${count} times cliclked`)
    },[count])
    
    return (
        <div>
        {count}
        <input type='text' value ={name} onChange ={e=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(count+1)}>click to count</button>    
        </div>
    )
}

export default useEffectBasic
