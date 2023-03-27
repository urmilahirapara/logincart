import React from 'react'
import Inputcontrols from '../Inputcontrols/Inputcontrols'
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className='grid-flow-col bg-purple-200 p-5'> 
     <h1 className='h-fit w-fit p-2 mx-[40%]  bg-white shadow-2xl border-[2px] border-black rounded-xl text-left text-4xl font-bold'>Login 
     <Inputcontrols label="Email" placeholder="Enter Email Address"/> 
     <Inputcontrols label="Password" placeholder="Enter Password"/> 
     
      <button className="m-2 h-[3rem] w-[25rem] text-xl text-center bg-purple-200">Login</button>
      <p className='text-xl p-2 text-center'>Already have an account?{" "}<span className='text-red-600'><Link to="/signup">Sign Up</Link></span></p>
    
    </h1>
    </div>
  )
}

export default Login

