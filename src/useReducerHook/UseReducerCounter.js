import React,{useReducer} from 'react';


const initialvalue = 0
const reducer = (currentvalue,action)=>{
    switch(action){
    case'increment':
        return currentvalue + 1
    case 'decrement':
        return currentvalue-1
    case 'reset':
        return initialvalue    
    default:
        return currentvalue
    
    }
    
} 

function UseReducerCounter() {


    const [ newState,dispatch] = useReducer(reducer,initialvalue)

  return <div>
      <div>{newState}</div>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
  </div>;
}

export default UseReducerCounter;
