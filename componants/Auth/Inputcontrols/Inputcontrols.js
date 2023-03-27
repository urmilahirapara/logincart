import React from 'react'

const Inputcontrols = (props) => {
  return (
    <div className='container flex flex-col gap-1'>
    {props.label && <label className='p-2 text-xl font-bold text-left'>{props.label}</label>}
    <input className='h-10 w-[25rem] p-2 border-4 border-solid text-sm border-white outline-none text-zinc-800 hover:border-purple-200' type="text" {...props}/>
    
    </div>
  )
}

export default Inputcontrols
