import React from 'react'

const Button = ({text}) => {
     return (
          <button className='w-3/12 h-12 text-white font-bold rounded-md bg-blue-500'>
             {text}
          </button>
     )
}
export default Button
