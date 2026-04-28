import React, { useState } from 'react';
import BottomNav from '../components/shared/BottomNav';
import OrderCard from '../components/orders/OrderCard';
import BackButton from '../components/shared/BackButton';

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className='bg-[#f0f0f0] h-[calc(100vh-5rem)] overflow-hidden'>
      
      {/* HEADER */}
      <div className='flex items-center justify-between py-8 px-5'>
        
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#1a1a1a] text-xl font-bold tracking-wider'>
            Orders
          </h1>
        </div>

        {/* FILTER BUTTONS */}
        <div className='flex items-center justify-around gap-4'>
          
          <button
            onClick={() => setStatus("all")}
            className={`text-[#555555] text-lg px-5 py-2 rounded-lg font-semibold ${
              status === "all" ? "bg-white shadow-sm border border-[#e0e0e0]" : "hover:bg-[#e8e8e8]"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setStatus("progress")}
            className={`text-[#555555] text-lg px-5 py-2 rounded-lg font-semibold ${
              status === "progress" ? "bg-white shadow-sm border border-[#e0e0e0]" : "hover:bg-[#e8e8e8]"
            }`}
          >
            In Progress
          </button>

          <button
            onClick={() => setStatus("ready")}
            className={`text-[#555555] text-lg px-5 py-2 rounded-lg font-semibold ${
              status === "ready" ? "bg-white shadow-sm border border-[#e0e0e0]" : "hover:bg-[#e8e8e8]"
            }`}
          >
            Ready
          </button>

          <button
            onClick={() => setStatus("completed")}
            className={`text-[#555555] text-lg px-5 py-2 rounded-lg font-semibold ${
              status === "completed" ? "bg-white shadow-sm border border-[#e0e0e0]" : "hover:bg-[#e8e8e8]"
            }`}
          >
            Completed
          </button>

        </div>
      </div>

      {/* ORDERS GRID */}
      <div className='flex flex-wrap px-10 py-3 gap-1 justify-center overflow-y-scroll items-center scrollbar-hide h-[calc(100vh-5rem-5rem)]'>
        
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />

      </div>

      <BottomNav />
      
    </section>
  );
};

export default Orders;