import React,{useState} from 'react'

function UseStatehook() {
   const initialstate = 0
   const [counter,setCount] = useState(initialstate)
   const incrementFive = ()=>{
    for(let i =0;i<5;i++){
        setCount(prevstate=>prevstate+1)
    }
}
    return (
        <div> 
         count:{counter}
         <button onClick={()=>setCount(initialstate)}>reset </button>
         <button onClick={()=>setCount(prevstate=>prevstate+1)}>increment </button>  
         <button onClick={()=>setCount(prevstate=>prevstate-1)}>decrement </button>
         <button onClick={incrementFive}>increment by five </button>
         </div>
    )
}

export default UseStatehook
