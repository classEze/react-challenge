import React from 'react'

const Whatever = ({match, history}) => {
     if(match.params.name === 'home' ) history.push('/')
     return (
          <div className='flex h-full items-center justify-center text-6xl text-red-500'>
               {match.params.name}
          </div>
     )
}

export default Whatever
