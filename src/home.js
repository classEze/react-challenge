import React from 'react'
import Ribbons from './components/ribbons'
import Button from './utilities/button'
import Noname from './utilities/noname'

const Home = () => {
     return (
          <>
          <Ribbons /> 
          <section className='bg-gray-200 text-blue-500 text-xl font-bold p-2 underline'>
               Select Currency:
          </section>  
     <section className='bg-gray-200 text-xl font-bold p-2 border border-'>
          <select className='w-2/12 text-lg font-bold'>
            <option value="AFYA">AFYA</option>
            <option value="ZAR"> ZAR </option>
            <option value="SOKO"> SOKO </option>
          </select> 
          <span> 0.0000001 </span> 
         </section>  

         <section className='my-4 flex justify-around'>
           <Button text='Send' />
           <Button text='Receive'/>
         </section>
         <section className='bg-gray-200 text-xl text-blue-500 font-bold underline p-3'>
            Recent activity
          </section>


         <section className='mb-4 py-4'>
              <Noname source='/fidelity.jpg' text='Whatever I dont know' amount='A100'/>
              <Noname source='/fidelity.jpg' text='Whatever I dont know' amount='A30'/>
              <Noname source='/fidelity.jpg' text='Whatever I dont know' amount='A10'/>
         </section>
         <section className='bg-gray-200 h-6'>
          </section>
          </>
     )
}

export default Home
