import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='py-4 px-6 flex justify-between border-b-2'>
<div>
<p className='text-xs font-bold text-gray-400'>Admin / Courses / <span className='text-gray-300'>New Courses Setup</span> </p>
<h3 className='text-4xl font-semibold'>New course setup</h3>
    
    </div>
    
   <div>
   <button className='border px-2 py-1 font-semibold text-sm rounded-md mt-3'> Save changes <FaCheck className='inline-block ms-2 mb-1 text-xs'/></button></div>    </div>
  )
}

export default Header