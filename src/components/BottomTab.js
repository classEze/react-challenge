import React from 'react'
import TabPlusText from '../utilities/tabplustext'
import  { FaHome, FaMoneyBill, FaShoppingBasket, FaWallet } from 'react-icons/fa'
import  { MdLocalActivity } from 'react-icons/md'


const BottomTab = () => {
     return (
          <div className='flex justify-around'>
               <TabPlusText text="Home">
                 <FaHome size={40} />
               </TabPlusText>
               <TabPlusText text="Activity">
                 <MdLocalActivity size={40} />
               </TabPlusText>
               <TabPlusText text="Wallet">
                 <FaWallet size={40} />
               </TabPlusText >
               <TabPlusText text="Market">
                 <FaShoppingBasket size={40} />
               </TabPlusText>
               <TabPlusText text="Earn">
                 <FaMoneyBill size={40} />
               </TabPlusText>
          </div>
     )
}

export default BottomTab
