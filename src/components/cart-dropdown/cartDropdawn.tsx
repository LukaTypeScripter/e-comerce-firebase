import React from 'react'
import { useContext } from 'react'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
import './cartDropdawn.scss' 
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
function CartDropdawn() {
    const {cartItems} = useContext(DropdownContext)
    const navigate = useNavigate()
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map((item) => {
            return <CartItem key={item.id} cartItems={item} />
        })}
        </div>
        <Button onClick={() => navigate('/checkout')}>Go to Check out</Button>
        
    </div>
  )
} 

export default CartDropdawn