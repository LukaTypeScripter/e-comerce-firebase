import React from 'react'
import { CartItemContainer,ItemsDetails,Name,Image,Price } from './CartItemStyles/cartItems';
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
    <CartItemContainer>
    <Image src={imageUrl} alt={`${name}`} />
    <ItemsDetails>
      <Name>{name}</Name>
      <Price >
        {quantity} x ${price}
      </Price>
    </ItemsDetails>
  </CartItemContainer>
  )
}

export default CartItem