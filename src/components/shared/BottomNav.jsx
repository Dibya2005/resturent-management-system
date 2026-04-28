import React from 'react'
import { House, Logs, UtensilsCrossed, MoreHorizontal } from 'lucide-react';
import { BiDish } from "react-icons/bi";
import { useNavigate, useLocation } from 'react-router-dom';
import Model from './Model';
import { setCustomer } from '../../redux/slices/customerSlice';
import { useDispatch } from 'react-redux';

const BottomNav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation(); // to track current route
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const [name , setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [guestCount, setGuestCount] = React.useState(0);
  
const handleCreateOrder = () => {
  //here we have to sent the data to the store
  dispatch(setCustomer({name, phone, guests: guestCount}));

  navigate("/tables")
}
  const increaseGuest = () => {
    if (guestCount >= 6) return;
    setGuestCount(guestCount + 1);
  }

  const decreaseGuest = () => {
    if (guestCount > 0) {
      setGuestCount(guestCount - 1);
    }
  }

  const openModel = () => setIsModelOpen(true);
  const closeModel = () => setIsModelOpen(false);

  //  helper for active state
  const isActive = (path) => location.pathname === path;

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] flex justify-around items-center p-2 h-16 text-[#555555] shadow-lg'>
      
      <button onClick={()=>{navigate("/")}} className='flex flex-col items-center text-[10px]'>
        <House size={20} className={isActive("/") ? "text-[#d3a000]" : ""} />
        Home
      </button>

      <button onClick={()=>{navigate("/orders")}} className='flex flex-col items-center text-[10px]'>
        <Logs size={20} className={isActive("/orders") ? "text-[#d3a000]" : ""} />
        Orders
      </button>

      <button onClick={()=>{navigate("/tables")}} className='flex flex-col items-center text-[10px]'>
        <UtensilsCrossed size={20} className={isActive("/tables") ? "text-[#d3a000]" : ""} />
        Tables
      </button>

      {/* ✅ More button with Lucide icon */}
      <button className='flex flex-col items-center text-[10px]'>
        <MoreHorizontal size={20} className={isActive("/more") ? "text-[#d3a000]" : ""} />
        More
      </button>

      <button disabled={isActive("/tables") || isActive("/menu")} onClick={openModel} className='absolute -top-6 left-1/2 -translate-x-1/2 bg-[#d3a000] text-white rounded-full p-4 shadow-lg flex flex-col items-center text-[10px]'>
        <BiDish size={22} />
        Create
      </button>

      <Model isOpen={isModelOpen} onClose={closeModel} title="Create Order">
        
        <div>
          <label className='block text-[#555555] mb-2 text-sm font-medium'>Customer Name</label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-[#f5f5f5]'>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Customer Name' className='bg-transparent flex-1 text-[#1a1a1a] focus:outline-none '/>
          </div>
        </div>

        <div>
          <label className='block text-[#555555] mb-2 mt-2 text-sm font-medium'>Customer Phone</label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-[#f5f5f5]'>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Enter Customer Phone' className='bg-transparent flex-1 text-[#1a1a1a] focus:outline-none '/>
          </div>
        </div>

        <div>
          <label className='block mb-2 mt-3 text-sm font-medium text-[#555555] '>Guest</label>
          <div className='flex items-center justify-between bg-[#f5f5f5] px-4 py-3 rounded-lg'>
            
            <button onClick={decreaseGuest} className='text-[#d3a000] text-2xl'>&minus;</button>
            
            <span className='text-[#1a1a1a] '>{guestCount}</span>
            
            <button onClick={increaseGuest} className='text-[#d3a000] text-2xl'>&#43;</button>
          
          </div>
        </div>

        <button onClick={handleCreateOrder} className='w-full bg-[#d3a000] text-white rounded-lg py-3 mt-6 hover:bg-[#b88e00]'>
          Create Order
        </button>

      </Model>

    </div>
  )
}

export default BottomNav;