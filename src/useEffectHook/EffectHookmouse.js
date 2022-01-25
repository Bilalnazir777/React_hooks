import React,{useState,useEffect} from 'react'

function EffectHookmouse() {
    
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const logmouseposition=(e)=>{
        console.log("this is mouse func call");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("this is effect hook call");
        window.addEventListener('mousemove',logmouseposition)

        return ()=>{
            window.removeEventListener('mousemove',logmouseposition)
        }
    },[])
    
    return (

        <div>
             Hooks X-{x} Y-{y}
        </div>
    )
}

export default EffectHookmouse
