import React from 'react';
import './App.css';
// import UseMemoCounter from './useMemoHook/UseMemoCounter';
// import InputFocusRefHook from './UseRefHook/InputFocusRefHook';
import TimerusingRef from './UseRefHook/TimerusingRef';
// import DataFetchingRed from './useReducerHook/DataFetchingRed';
// import UsecontextHook from './UseContextHook/UsecontextHook';
// import UseReducerCounter from './useReducerHook/UseReducerCounter';
// import UseRedwithObj from './useReducerHook/UseRedwithObj';
// import UseEffectBasic from './useEffectHook/useEffect';
// import FetchdatainEffect from './useEffectHook/FetchdatainEffect';
//  import UseRedwithContextHook from './useReducerHook/UseRedwithContextHook';
// export const UserContext = React.createContext()
// export const PasswordContext = React.createContext()

// const initialvalue = 0
// const reducer = (currentvalue,action)=>{
//     switch(action){
//     case'increment':
//         return currentvalue + 1
//     case 'decrement':
//         return currentvalue-1
//     case 'reset':
//         return initialvalue    
//     default:
//         return currentvalue
    
//     }
    
// } 


// export const Countercontext = React.createContext () 
function App() {


  // const [ newState,dispatch] = useReducer(reducer,initialvalue)

  return (
    // <Countercontext.Provider value={{countstate:newState,countdispatch:dispatch}}>
    <div className="App">

      {/* count is {newState} */}
       {/* <InputFocusRefHook/> */}
       <TimerusingRef/>
      {/* <UseMemoCounter/> */}
          {/* <DataFetchingRed/> */}
          </div>
      // </Countercontext.Provider>
  )
}
    //   {/* <UserContext.Provider value={'bilalnazir'}>
    //     <PasswordContext.Provider value={"wahabandsatti"}>
    //       <UsecontextHook/>
    //     </PasswordContext.Provider>
    //   </UserContext.Provider> */}
    //     {/* <EffectHookmouse/>   */}
    //     {/* <UnmountEffectHook/> */}
    //      {/* <EffectHookTimer/>          */}
    // {/* <FetchdatainEffect/> */}
    
    //        {/* <UseRedwithObj/> */}
    //     {/* <UseReducerCounter/>     */}
    
  


export default App;

//usecall hook for performance optimization ..only those will rerender which u want
//usememo...use for chaced value