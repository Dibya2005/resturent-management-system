import React from 'react'
import BackButton from '../components/shared/BackButton'
import ButtomNav from '../components/shared/BottomNav'
import MenuContainer from '../components/menu/MenuContainer'

import { ImSpoonKnife } from "react-icons/im";
import CustomerInfo from '../components/menu/CustomerInfo'
import Cartinfo from '../components/menu/Cartinfo'
import Bill from '../components/menu/Bill'
import { useSelector } from 'react-redux'

const Manu = () => {
  const customerData=useSelector((state) => state.customer);
  return (
    <section className='flex gap-3 bg-[#f0f0f0] h-screen overflow-hidden'>
        {/*left half */}
        <div className='flex-[3]'>
                    <div className='flex items-center justify-between py-8 px-5'>
        
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#1a1a1a] text-xl font-bold tracking-wider'>
            Menu
          </h1>
        </div>

        {/* FILTER BUTTONS */}
         <div className='flex items-center justify-around gap-4'>
          
         <div className='flex px-9 items-center cursor-pointer'>
              <ImSpoonKnife className="text-[#555555] text-2xl "  />
                <div className='flex flex-col items-start ml-2'>
                    <h1 className='text-md text-[#1a1a1a]'>{customerData.customerName}</h1>
                    <p className='text-xs text-[#888888] font-semibold'>{customerData.tableNo}</p>

                </div>
            </div>

          

        </div>
      </div>
      <MenuContainer />
        </div>
        {/*right half */}
        <div className='flex-[1] bg-[#f5f5f5] border-l border-[#e0e0e0]'>
         <CustomerInfo />
          <hr  className='border-[#e0e0e0] border-t-2 '/>
          {/*Cart Items */}
          
          <Cartinfo />
          {/*Bill */}
          <Bill />
        </div>

        <ButtomNav />
    </section>
  )
}

export default Manu