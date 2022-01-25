import React,{useState} from 'react'
import EffectHookmouse from './EffectHookmouse'

function UnmountEffectHook() {
    
    const [display,setDisplay] = useState(true)
    return (
        <div>
       <button onClick={()=>setDisplay(!display)}>toggle display</button>
       {display && <EffectHookmouse />}     
        </div>
    )
}

export default UnmountEffectHook
