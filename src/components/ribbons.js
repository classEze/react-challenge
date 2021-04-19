import React from 'react'
import Ribbon from '../utilities/ribbon'

const Ribbons = () => {
     return (
          <div className='grid grid-cols-2 gap-1  w-11/12 my-2 mx-auto'>
               <Ribbon name="AFYA" number="143.00" text="Balance" ></Ribbon>
               <Ribbon name="ZAR" number="R21.00" text="Equivalent" ></Ribbon>
          </div>
     )
}

export default Ribbons
