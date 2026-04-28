import React from 'react'
import { useSelector } from 'react-redux';
import { totalPrice } from '../../redux/slices/cartSlice';
const Bill = () => {
  const cartData=useSelector((state)=>state.cart)
  const total=useSelector(totalPrice);
  const tax=total*0.0525;
  const grandTotal=total+tax;
  return (
    <>
    <div className='flex items-center justify-between px-5 mt-2'>
  <p className='text-xs text-[#888888] font-medium mt-2'>Items({cartData.length})</p>
  <h1 className='text-[#1a1a1a] text-md font-bold'>₹{tax.toFixed(2)}</h1>
</div>

<div className='flex items-center justify-between px-5 mt-2'>
  <p className='text-xs text-[#888888] font-medium mt-2'>Total Price with Tax</p>
  <h1 className='text-[#1a1a1a] text-md font-bold'>₹{grandTotal.toFixed(2)}</h1>
</div>

<div className='flex items-center  gap-3 px-5 mt-4'>
  <button className='px-4 py-2 w-full bg-[#f0f0f0] text-[#555555] font-semibold rounded-lg border border-[#e0e0e0] hover:bg-[#e8e8e8]'>Cash</button>
  <button className='px-4 py-2 w-full bg-[#f0f0f0] text-[#555555] font-semibold rounded-lg border border-[#e0e0e0] hover:bg-[#e8e8e8]'>Online</button>
</div>
<div className='flex items-center  gap-3 px-5 mt-4'>
  <button className='px-4 py-2 w-full bg-[#025cca] text-white font-semibold rounded-lg text-lg hover:bg-[#0248a0]'>print receipt</button>
  <button className='px-4 py-2 w-full bg-[#f6b100] text-white font-semibold rounded-lg text-lg hover:bg-[#d3a000]'>place Order</button>
</div>
    </>
  )
}

export default Bill