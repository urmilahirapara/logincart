import React, { useState } from 'react'
import Inputcontrols from '../Inputcontrols/Inputcontrols'
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const Signup = () => {
   const [values,setValues]=useState({
name:"",
email:"",
pass:"",

   });
   const handleSubmit=()=>{
    if(!values.name || !values.email || !values.pass )
    { 
        alert("Fill All Fields");
        return;
    }
    createUserWithEmailAndPassword(auth,values.email,values.password).then(
        (res)=>{console.log(res);}).catch(err=>{console.log(err)});
        
   }
      return (
        <div className='grid-flow-col bg-purple-200 p-5'> 
         <h1 className='h-fit w-fit p-2 mx-[40%]  bg-white shadow-2xl border-[2px] border-black rounded-xl text-left text-4xl font-bold'>Signup
         <Inputcontrols label="Name" placeholder="Enter Your Name" onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))}/> 
         <Inputcontrols label="Email" placeholder="Enter Email Address" onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/> 
         <Inputcontrols label="Password" placeholder="Enter Password" onChange={(e)=>setValues((prev)=>({...prev,pass:e.target.value}))}/> 
         
          <button
          onClick={handleSubmit}
           className="m-2 h-[3rem] w-[25rem] text-xl text-center bg-purple-200">Login</button>
          <p className='text-xl p-2 text-center'>Already have an account?{""}<span className='text-red-600'><Link to="/login">Login</Link></span></p>
        
        </h1>
        </div>
      )
    
    
    
    
    
}

export default Signup
