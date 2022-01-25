import React,{useReducer} from 'react';


const initialvalue = {
    firstcounter:0,
    secondcounter:10
}
const reducer = (currentvalue,action)=>{
    switch(action.type){
    case'increment':
        return {...currentvalue,firstcounter:currentvalue.firstcounter + action.value}
    case 'decrement':
        return {...currentvalue,firstcounter:currentvalue.firstcounter - action.value}
    case'increment2':
        return {...currentvalue,secondcounter:currentvalue.secondcounter + action.value}
    case 'decrement2':
        return {...currentvalue,secondcounter:currentvalue.secondcounter - action.value}
    case 'reset':
        return initialvalue    
    default:
        return currentvalue
    
    }
    
} 

function UseRedwithObj() {


    const [ newState,dispatch] = useReducer(reducer,initialvalue)

  return <div>
      <div>{newState.firstcounter}</div>
      <div>{newState.secondcounter}</div>
      <button onClick={()=>dispatch({type:'increment' ,value : 1})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement', value :1})}>decrement</button>
      <button onClick={()=>dispatch({type:'increment2' ,value : 5})}>increment5</button>
      <button onClick={()=>dispatch({type:'decrement2', value :5})}>decrement5</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
  </div>;
}

export default UseRedwithObj;
