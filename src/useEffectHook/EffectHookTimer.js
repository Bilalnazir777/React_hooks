import React,{useState,useEffect} from 'react'

function EffectHookTimer() {
    
    const [count,setCount] = useState(0)
    const tick =()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[count])
    
    return (

        <div>
        couner is -{count}   
        </div>
    )
}

export default EffectHookTimer
