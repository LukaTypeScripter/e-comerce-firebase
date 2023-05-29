import React from 'react'
import './cartItems.scss'
interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?:number
}

interface CartItemProps {
  cartItems: Item;
}

function CartItem({cartItems}:CartItemProps) {
    const { imageUrl, price, name, quantity} = cartItems
  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
  )
}

export default CartItem