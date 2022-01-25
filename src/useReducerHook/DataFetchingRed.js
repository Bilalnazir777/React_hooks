import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initialvalues ={
    loading:true,
    error:"",
    Data:{}
}
const reducer=(curentstate,action)=>{
 
    switch(action.type){
    case "Successful":
        return{
           loading:false,
           error:"",
           Data:action.payload
        }
     case "failure":
         return{
             loading:false,
             error:"dubara kro sae sa",
             Data:{}
         }   
      default:
          return curentstate   
}
}
function DataFetchingRed() {

    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then(response=>{
          dispatch({type:"Successful",payload:response.data})

         })
         .catch(error=>{
            dispatch({type:"failure"})
         })
             
         
    },[])
    const [state,dispatch] = useReducer(reducer,initialvalues)
  return <div>
      {state.loading ? 'loading' : state.Data.title}
      {state.error ? '' :null}
  </div>;
}

export default DataFetchingRed;
