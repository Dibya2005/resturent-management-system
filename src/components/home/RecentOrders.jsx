import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderList from './OrderList'

const RecentOrders = () => {
  return (
    <div className='px-8 mt-6'>
      <div className='bg-white w-full h-[450px] rounded-lg p-4 shadow-sm border border-[#eaeaea] flex flex-col'>
        
        {/* Header */}
        <div className='flex items-center justify-between'>
          <h1 className='text-[#1a1a1a] text-lg font-semibold tracking-wide'>Recent Orders</h1>
          <a href="" className='text-[#025cca] text-sm font-semibold'>View all</a>
        </div>

        {/* Search bar */}
        <div className='flex items-center gap-4 bg-[#f5f5f5] rounded-[20px] px-5 py-2 mt-3'>
          <input 
            type="text" 
            placeholder='search recent orders' 
            className='bg-white text-[#1a1a1a] placeholder:text-[#a0a0a0] border border-[#d0d0d0] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[20px] px-4 py-2 w-full' 
          />
          <FontAwesomeIcon icon={faSearch} className='text-[#555555]' />
        </div>

        {/* Scrollable Order List */}
        <div className='mt-3 px-2 flex-1 overflow-y-auto'>
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>

      </div>
    </div>
  )
}

export default RecentOrders