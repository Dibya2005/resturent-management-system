import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import Greeting from '../components/home/Greeting'
import { BsCashCoin } from "react-icons/bs";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders"
import { GrInProgress } from "react-icons/gr";
import PopularDishes from  "../components/home/PopularDishes"
const Home = () => {
  return (
    <section className='flex gap-3 bg-[#f0f0f0] h-screen overflow-y-scrollscroll'>
      {/*left division */}{/* Left division */}
        <div className='flex-[3] bg-[#f5f5f5]'>
          <Greeting />
          <div className='flex items-center w-full gap-3 px-8 mt-8 '>
            <MiniCard title="Total earning" icon={<BsCashCoin />} number={512} footerNum={1.6}/>
            <MiniCard title="Total earning" icon={<GrInProgress />} number={16} footerNum={3.6}/>
          </div>
          <RecentOrders />
        </div>
      {/*right part */}
      <div className='flex-[2] bg-[#f5f5f5]'>
        <PopularDishes />


      </div>
      <BottomNav />

    </section>
  )
}

export default Home