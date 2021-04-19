import React from 'react'
import { NavLink} from 'react-router-dom'

const TabplusText = ({children, text}) => {
     return (
          <NavLink to={'/'+ text == 'Home'? '': text.toLowerCase()}>
              <div className='flex text-red-500 flex-col'>
               {children}
               <p> {text}</p> 
          </div>
          </NavLink>
     )
}

export default TabplusText
