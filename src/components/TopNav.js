import React from 'react'
import { FaUserCircle, FaBell } from 'react-icons/fa'
import { BsCompass } from 'react-icons/bs'

const TopNav = () => {
     return (
          <section className='flex h-full bg-gray-100 items-center justify-between px-4'>
               <div className='text-red-400 text-2xl font-bold'>
                    <BsCompass size={40} className='inline-block'/>
                     ribbon </div>
               <div>
                     <FaUserCircle size={27} className='inline-block mr-4 text-red-500'/> 
                    <FaBell size={20} className='inline-block text-red-500' />
               </div>
          
          </section> 
    )
}

export default TopNav
