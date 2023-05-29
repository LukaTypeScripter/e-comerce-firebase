import React from 'react'
import './Checkout.scss'
import { useContext } from 'react';
import { DropdownContext } from '../../DropDown-context/Dropdown.context';
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

interface CheckoutProps {
  item: Product;
}
function Checkout({item}:CheckoutProps) {
    const {id,name,price,quantity,imageUrl} = item
    const {delateByid,removeItemToCart,addItemToCart} = useContext(DropdownContext)

    const handleRemoveClick = () => {
      delateByid(id);
    };
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt="" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          
          <div className='arrow' onClick={() => removeItemToCart(item)}>
            &#10094;
          </div>
         <span className='value'>{quantity}</span> 
           <div className='arrow' onClick={() => addItemToCart(item)}>
           &#10095;
          
           </div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={handleRemoveClick}>&#10005;</div>
    </div>
  )
}

export default Checkout