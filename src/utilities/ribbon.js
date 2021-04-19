import React from 'react'

const Ribbon = ({text,number,name,direction}) => {
     return (
          <div className={direction==='right' ? 'right' : 'left' }>
             <aside className='w-12 h-12 bg-white rounded-circle text-blue-500 flex items-center justify-center font-bold'>
              {name}
             </aside>
             <aside className='text-2xl font-bold'> {number}</aside>
             <aside className=''>{text}</aside>
          </div>
     )
}

export default Ribbon
