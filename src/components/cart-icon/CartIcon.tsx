import React, { useContext } from 'react'
import './cartIcon.scss'
import {ReactComponent as ShoppinIcon} from '../../assets/004 shopping-bag.svg'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
function CartIcon() {
    const {isOpen,setIsOpen} = useContext(DropdownContext)
    const handleChange = () => {
        setIsOpen(!isOpen)
      }
  return (
    <div className='cart-icon-container'>
        <ShoppinIcon className="shopping-icon" onClick={handleChange}/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon