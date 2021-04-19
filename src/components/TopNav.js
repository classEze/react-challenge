import React from 'react'
import { FaUserCircle, FaBell } from 'react-icons/fa'

const TopNav = () => {
     return (
          <section className='flex h-full bg-gray-200 items-center justify-between px-4'>
               <div> ribbon </div>
               <div>
                     <FaUserCircle size={27} className='inline-block mr-4 text-red-500'/> 
                    <FaBell size={20} className='inline-block text-red-500' />
               </div>
          
          </section> 
    )
}

export default TopNav
