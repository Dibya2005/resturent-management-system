import React from 'react'
import { useSelector } from 'react-redux';
import { getAvtarname, formatDate } from '../../utils';

const CustomerInfo = () => {
  const customerData = useSelector((state) => state.customer);
  const [currentDate] = React.useState(new Date());

  return (
    <div className='flex justify-between items-center p-4'>
      <div className='flex flex-col items-start'>
        <h1 className='text-md font-semibold text-[#1a1a1a] tracking-wide'>
          {customerData.customerName}
        </h1>

        <p className='text-xs text-[#888888] font-medium mt-1'>
          {customerData.orderId}/Dine in
        </p>

        <p className='text-xs text-[#888888] font-medium mt-2'>
          {formatDate(currentDate)}
        </p>
      </div>

      <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg text-white'>
        {getAvtarname(customerData.customerName)}
      </button>
    </div>
  )
}

export default CustomerInfo;