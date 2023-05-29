import React from 'react'
import './ProductCard.scss'
import Button from '../button/Button'
import { useContext } from 'react'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
interface ProductProps {
    product: {
      id: number;
      name: string;
      price: number;
      imageUrl: string;
    };
  }
function ProductCard({product}:ProductProps) {
    const { id, name, price, imageUrl } = product;
    const {addItemToCart} = useContext(DropdownContext)
    const addProductToCart = () => addItemToCart(product)
    return (
    <div className='product-card-container' key={id}>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to card!</Button>
    </div>
  )
}

export default ProductCard