import React, { useContext } from 'react'
import {CartIConCont,ShoppingIcon,ItemCount} from './CartStyles/cartIcon'
import {ReactComponent as ShoppinIcon} from '../../assets/004 shopping-bag.svg'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'

function CartIcon() {
    const {isOpen,setIsOpen,count} = useContext(DropdownContext)
    const handleChange = () => {
        setIsOpen(!isOpen)
      }
      
  return (
    <CartIConCont onClick={handleChange}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount className='item-count'>{count}</ItemCount>
    </CartIConCont>
  )
}

export default CartIcon