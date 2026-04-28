import React from 'react'

const Model = ({title, onClose, isOpen, children}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center  z-50'>
        <div className='bg-white max-w-lg mx-4 shadow-xl w-full rounded-lg p-4'>
            <div className='flex justify-between items-center px-5 py-4 border-b border-[#e0e0e0] '>
                <h2 className='text-xl text-[#1a1a1a] font-semibold'>{title}</h2>
                <button className='text-gray-400 text-2xl hover:text-gray-600' onClick={onClose}>
                    &times;
                </button>
            </div>
            <div className='p-5 space-y-4'>
          {children}
        </div>
        </div>
    </div>
  )
}

export default Model