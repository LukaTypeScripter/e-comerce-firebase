import React from 'react'
import './cartDropdawn.scss' 
import Button from '../button/Button'
import { useContext } from 'react'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
function CartDropdawn() {
    const {isOpen,setIsOpen} = useContext(DropdownContext)
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <Button >Go to Check out</Button>
        
    </div>
  )
}

export default CartDropdawn