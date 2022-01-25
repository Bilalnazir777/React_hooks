import React,{useState} from 'react'

function UseStateArr() {
    
    const [Items,setItems] = useState([])
    const [newvalue,setnewvalue] = useState('')
    
    const AddItem = ()=>{
        
        
        setItems([...Items,{
            id:Items.length,
            value:newvalue
        }])
    }
    return (
        <div>
            <input type='text' onChange={e=>setnewvalue (e.target.value)}></input>
            <button onClick={AddItem}>click to add</button>
            <ul>{
                Items.map(item => <li key={item.id}>{item.value}</li>)                
}</ul>
        </div>
    )
}

export default UseStateArr
