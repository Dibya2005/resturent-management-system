import React from 'react'
import BackButton from '../components/shared/BackButton';
import BottomNav from '../components/shared/BottomNav';
import TableCard from '../components/tables/TableCard';
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = React.useState("all");

  return (
    <section className='bg-[#f0f0f0] h-[calc(100vh-5rem)] overflow-hidden'>
      
      {/* HEADER */}
      <div className='flex items-center justify-between py-8 px-5'>
        
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#1a1a1a] text-xl font-bold tracking-wider'>
            Tables
          </h1>
        </div>

        {/* FILTER */}
        <div className='flex items-center gap-4'>
          
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
            Booked
          </button>

        </div>
      </div>

      {/* TABLE CARDS */}
      <div className=' flex flex-wrap gap-5 p-10 overflow-y-scroll  h-[calc(100vh-5rem-5rem)]'>
        {tables.map((table) =>{
          return(
            <TableCard key={table.id} id={table.id} name={table.name} status={table.status} initials={table.initial} seats={table.seats}/>
          )
        })}
      </div>

      {/* BOTTOM NAV */}
      <BottomNav />

    </section>
  )
}

export default Tables;