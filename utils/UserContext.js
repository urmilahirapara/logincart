import React,{createContext} from 'react'

const UserContext = createContext({
    user:{
        name:"dummy name",
        email:"dummy@gmail.com",
    }
   
})
UserContext.displayName = "USer Context";


export default UserContext
