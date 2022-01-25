import React,{useContext} from 'react'
import {UserContext,PasswordContext} from '../App'
function UsecontextHook() {
    
    const UserName = useContext(UserContext)
    const Password = useContext(PasswordContext)

    
    return (
        <div>
            {UserName} - {Password}
        </div>
    )
}

export default UsecontextHook
