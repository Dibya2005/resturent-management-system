import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className='mb-3 flex items-center gap-5'>
        <button className='bg-[#f6b100] p-4 text-xl font-bold rounded-lg text-white'>DJ</button>
        <div className='flex items-center justify-between w-[100%]'>
            <div className='flex flex-col items-start gap-1'>
                <h1 className='text-[#1a1a1a] text-lg font-semibold tracking-wide'>Dibyajyoti</h1>
                <p className='text-[#888888] text-sm'>8 items</p>
            </div>
            <div>
                <h1 className='text-[#d3a000] font-semibold border border-[#d3a000] rounded-lg p-1 '>Table 3</h1>
            </div>
            <div className='flex flex-col items-end gap-2'>
                <p className=' text-green-600 '><FaCheckDouble className='inline mr-2' />Ready</p>
                <p className='text-[#888888]'><FaCircle className='inline mr-2 text-green-600'/>Ready to serve</p>
            </div>

        </div>
    </div>
  )
}

export default OrderList