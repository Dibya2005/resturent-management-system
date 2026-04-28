import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from "../../assets/logo1.png";
import { faBell, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className='flex justify-between items-center px-8 py-3 bg-white border-b border-[#e0e0e0]'>
  <div className='flex items-center gap-2'>
    <img src={logo1} alt="restro logo" className='h-14 w-16'/>
    <h1 className='text-lg font-semibold text-[#1a1a1a]'>restro</h1>
  </div>

  {/* search bar */}
  <div className='flex items-center gap-4 bg-[#f5f5f5] rounded-[20px] px-5 py-2'>
    <input
      type="text"
      placeholder='search'
      className='bg-transparent text-[#1a1a1a] placeholder:text-[#a0a0a0] border border-[#d0d0d0] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[20px] px-4 py-1'
    />
    <FontAwesomeIcon icon={faSearch} className='text-[#555555]' />
  </div>

  {/* user */}
  <div className='flex items-center gap-4'>
    <FontAwesomeIcon icon={faBell} className="text-[#555555] text-2xl cursor-pointer"/>
    
    <div className='flex px-3 items-center cursor-pointer'>
      <FontAwesomeIcon icon={faUserCircle} className="text-[#555555] text-2xl"/>
      <div className='flex flex-col items-start ml-2'>
        <h1 className='text-md text-[#1a1a1a]'>dibyajyoti</h1>
        <p className='text-xs text-[#888888] font-semibold'>Admin</p>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header