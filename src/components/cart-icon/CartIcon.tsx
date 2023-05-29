import React, { useContext } from 'react'
import './cartIcon.scss'
import {ReactComponent as ShoppinIcon} from '../../assets/004 shopping-bag.svg'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'

function CartIcon() {
    const {isOpen,setIsOpen,count} = useContext(DropdownContext)
    const handleChange = () => {
        setIsOpen(!isOpen)
      }
      
  return (
    <div className='cart-icon-container' onClick={handleChange}>
        <ShoppinIcon className="shopping-icon" />
        <span className='item-count'>{count}</span>
    </div>
  )
}

export default CartIcon