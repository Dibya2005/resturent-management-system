import React from 'react'
import { FaCheckDouble, FaCircle } from "react-icons/fa";
import { getBackgroundColor } from '../../utils'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTableNo } from '../../redux/slices/customerSlice';
const TableCard = ({name, status, initials, seats}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick =() => {
    if(status !== "Available"){
      return;
    }
    dispatch(setTableNo(name))
    navigate(`/menu`)
  }
  return (
    <div onClick={handleClick} className=' w-full md:w-[400px]  p-4 bg-white rounded-lg cursor-pointer hover:bg-[#f9f9f9] transition-all duration-200 shadow-sm border border-[#eaeaea]'>
        
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-[#1a1a1a] text-xl font-semibold tracking-wide'>
              {name}
            </h1>

            <p className={`${
              status === 'Available' ? 'text-green-600 bg-[#d4edda]' : 'text-red-600 bg-[#f8d7da]'
            } text-xs flex items-center gap-1 px-2 py-1 rounded-lg font-medium`}>
              ● {status}
            </p>                     
        </div>

        <div className='flex items-center justify-center mt-5 mb-3'>
            <h1   style={{ backgroundColor: getBackgroundColor() }} className=" text-[#1a1a1a] rounded-full w-[60px]  h-[60px] flex items-center justify-center text-lg font-bold shadow-md">
              {initials}
            </h1>
        </div>
<p className='text-xs text-[#555555] rounded-lg bg-[#f5f5f5] p-2'>Seats: <span className='font-semibold'>{seats}</span></p>
    </div>
  )
}

export default TableCard