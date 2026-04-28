import React from 'react'

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className='bg-white py-5 px-5 rounded-lg w-[50%] shadow-sm border border-[#eaeaea]'>
      
      <div className='flex items-start justify-between'>
        <h1 className='text-[#1a1a1a] text-lg font-semibold tracking-wide'>
          {title}
        </h1>

        <button className={`${title==="Total Earning" ? "bg-[#02ca3a]" : "bg-[#f6b100]"} p-3 rounded-lg text-white text-2xl`}>
          {icon}
        </button>
      </div>

      <div>
        <h1 className='text-[#1a1a1a] text-4xl font-bold mt-4'>
          {title==="Total Earning" ? `$${number}` : number}
        </h1>
      </div>

      <div>
        <p className='text-[#555555] text-lg mt-2'>
          <span className='text-[#02ca3a]'>{footerNum}%</span> than yesterday
        </p>
      </div>

    </div>
  )
}

export default MiniCard