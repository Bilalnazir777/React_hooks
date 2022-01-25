import React,{ useState } from 'react'

function useStateobj() {
    
    const [name,setName] = useState({FirstName:'',LastName:''})
    
    return (
        <div>
           <form>
              <input type='text' value={name.FirstName} onChange={e=>setName({...name,FirstName:e.target.value})}/>
              <input type='text' value={name.LastName} onChange={e=>setName({...name,LastName:e.target.value})}/> 
           </form>
                <h2>your FirstName is - {name.FirstName}</h2>
                <h2>your LastName is - {name.LastName}</h2>
                
        </div>
    )
}

export default useStateobj

