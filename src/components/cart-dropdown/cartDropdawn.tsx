import React from 'react'
import { useContext } from 'react'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
import {CartDropdawnContainer,EmptyMEssage,CartItems} from './CartStyles/cartDropdawn'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
function CartDropdawn() {
    const {cartItems} = useContext(DropdownContext)
    const navigate = useNavigate()
  return (
    <CartDropdawnContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => {
              return <CartItem key={item.id} cartItems={item} />
          })
          ) : (<EmptyMEssage>Your Cart is empty</EmptyMEssage>)}
       
        </CartItems>
        <Button onClick={() => navigate('/checkout')}>Go to Check </Button>
        
    </CartDropdawnContainer>
  )
} 

export default CartDropdawn