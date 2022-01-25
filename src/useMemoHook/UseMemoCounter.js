import React,{useState,useMemo} from 'react';

function UseMemoCounter() {
 

    const [counterOne,setcounterOne]= useState(0)
    const [counterTwo,setcounterTwo]= useState(0)

    const incrementOne = ()=>{
       setcounterOne(counterOne + 1)
    }

    const incrementTwo = ()=>{
        setcounterTwo(counterTwo+1)
    }
    const isEven =useMemo(()=>{
        let i=0
        while ( i<1200000000)i++
        return counterOne%2 ===0
    },[counterOne])
  return (
  <div>
      <div>
      <button onClick={incrementOne}>counterOne-{counterOne}</button>
      <span>{isEven? 'Even':'odd'}</span>
      </div>
      <div>
      <button onClick={incrementTwo}>incrementTwo-{counterTwo}</button> 
   </div>
   </div>
  );
}

export default UseMemoCounter;

