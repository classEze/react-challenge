import React from 'react'

const Noname = ({source, text, amount}) => {
     return (
          <div className='flex justify-around font-bold border-b border-t py-4'>
          <aside>
               <img src={source} className='h-6 w-6 rounded-circle object-cover' alt=""/>
          </aside>
          <aside> {text} </aside>
          <aside> {amount}</aside>
        </div>
    )
}

export default Noname
