import React, { useState, useEffect } from 'react'

const Greeting = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Greeting logic
  const hours = dateTime.getHours();
  let greeting = "Good Morning";

  if (hours >= 12 && hours < 17) greeting = "Good Afternoon";
  else if (hours >= 17) greeting = "Good Evening";

  return (
    <div className='flex justify-between items-center px-8 mt-5'>
      
      <div>
        <h1 className='text-[#1a1a1a] text-2xl font-semibold mb-2 tracking-wide'>
          {greeting}, Dibyajyoti 👋
        </h1>
        <p className='text-[#888888] text-sm'>
          Give your best services for the customer
        </p>
      </div>

      <div className='text-right'>
        <h1 className='text-[#1a1a1a] text-lg'>
          {dateTime.toLocaleTimeString()}
        </h1>
        <p className='text-[#888888] text-sm'>
          {dateTime.toDateString()}
        </p>
      </div>

    </div>
  )
}

export default Greeting