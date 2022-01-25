//ref hook is also used to staore mutable value in generic container
import React,{useEffect,useRef,useState} from 'react';

function TimerusingRef() {

   const [timer,setTimer] = useState(0)
   const inputref = useRef(0)

   useEffect(()=>{
        inputref.current=setInterval(() => {
           setTimer(prevtimer=>prevtimer+1)
       }, 1000);
       return ()=>{
           clearInterval(inputref.current)
       }
   })
  return <div>
   hook timer-{timer}
   <button onClick={()=>clearInterval(inputref.current)}>stop timer</button>
  </div>;
}

export default TimerusingRef;
