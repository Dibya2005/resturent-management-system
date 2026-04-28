import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const BackButton = () => {
    const navigate=useNavigate()
  return (
    <button onClick={()=> navigate(-1)} className='bg-[#025cca] p-3 text-xl font-bold rounded-lg text-white hover:bg-[#0248a0]'>
        <IoMdArrowBack size={20} />
    </button>
  )
}

export default BackButton