import React,{useContext} from 'react';
import {Countercontext} from '../App'


function UseRedwithContextHook() {
  const variable = useContext(Countercontext)

  return <div>
    
      Component{variable.countstate}
      <button onClick={()=>variable.countdispatch('increment')}>increment</button>
      <button onClick={()=>variable.countdispatch('decrement')}>decrement</button>
      <button onClick={()=>variable.countdispatch('reset')}>reset</button>
  </div>;
}

export default UseRedwithContextHook;
