import React from 'react'
import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className='mt-6 pr-6 '>
        <div className='flex justify-between p-2'>
            <h1 className='text-[#1a1a1a]  text-lg font-semibold  tracking-wide'>Popular Dishes</h1>
            <a href="" className='text-[#025cca] text-sm font-semibold'>view all</a>
          </div>
            <div className='w-full rounded-lg bg-white overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem)] shadow-sm border border-[#eaeaea]'>
              {
                popularDishes.map((dish)=>{
                  return(
                    <div key={dish.id} className='flex items-center gap-4 p-4 border-b border-[#eaeaea] hover:bg-[#f9f9f9]'>
                      <img src={dish.image} alt={dish.name} className='w-16 h-16 rounded-lg object-cover'/>
                      <div className='flex flex-col gap-1'> 
                        <h1 className='text-[#1a1a1a] text-sm font-semibold tracking-wide'>{dish.name}</h1>
                      </div>
                      <div className='ml-auto'>
                        <p className='text-[#555555] font-semibold text-sm'>no of orders: {dish.numberOfOrders} </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
    </div>
  )
}

export default PopularDishes