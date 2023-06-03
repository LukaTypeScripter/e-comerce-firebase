import React, { useEffect, useRef } from 'react'
import { useContext } from 'react'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
import {CartDropdawnContainer,EmptyMEssage,CartItems} from './CartStyles/cartDropdawn'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
import { log } from 'console'
function CartDropdawn() {
    const {cartItems,setIsOpen} = useContext(DropdownContext)
    const navigate = useNavigate()
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (event:any) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      const handleEscapeKey = (event:any) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }, []);
  return (
    <CartDropdawnContainer ref={modalRef}>
        <CartItems >
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