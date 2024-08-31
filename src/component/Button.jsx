import React from 'react'
import { FaHeart } from 'react-icons/fa';
const Button = () => {
  return (
    <div>
        <button className='bg-red-500 p-2 md:p-3 rounded-lg border-none px-6 md:px-8 text-white text-base md:ml-4 mdx:py-0 flex items-center'>
              <FaHeart className='mr-2' /> {/* Add the heart icon */}
              Donate Now
            </button>
    </div>
  )
}

export default Button
