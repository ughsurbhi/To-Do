import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { ImRadioUnchecked } from "react-icons/im";

const Items = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>toggle(id)} className='flex flex-1 items-center cursor-pointer'>
      {isComplete ? <TiTick size={35} style={{color:"#222831", marginRight:"0.3rem"}} /> : <ImRadioUnchecked size={35} style={{color:"#222831", marginRight:"0.3rem"}} />} 

    <p className={`text-slate-800 ml-4 text-[17px] decoration-black ${isComplete? "line-through":""}`}>{text}</p>
      </div>
      <MdDelete onClick={()=>{deleteTodo(id)}} size={35} style={{color:"#222831", marginRight:"0.3rem"}} className='w-7 cursor-pointer'/>
    </div>
  )
}

export default Items
