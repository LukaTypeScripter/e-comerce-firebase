import React from 'react'
import { useContext } from 'react'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
import './Checkout.scss'
import Checkout from '../../components/checkout-item/Checkout'
function CheckOut() {
  const {cartItems,count,addItemToCart,removeItemToCart,totalPrice} = useContext(DropdownContext)
  return (
   <div className='checkout-container'>
     <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      
   {cartItems.map((item) => {

   return (
    <>
      <Checkout   key={item.id} item={item}/>
    
  </>
   )
   })}
  <span className='total'>total: {totalPrice}</span>
   </div>
  )
}

export default CheckOut