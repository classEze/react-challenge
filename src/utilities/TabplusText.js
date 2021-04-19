import React from 'react'
import { Link } from 'react-router-dom'

const TabplusText = ({children, text}) => {
     return (
          <Link to='/'>
              <div clasName='flex -flex-col'>
               {children}
               <p> {text}</p>  
          </div>
          </Link>
     )
}

export default TabplusText
