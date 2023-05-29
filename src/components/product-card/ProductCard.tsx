import React from 'react'
import './ProductCard.scss'
import Button from '../button/Button'

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
   
}
function ProductCard({id,name,price,imageUrl}:Product) {
    
  return (
    <div className='product-card-container' key={id}>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted'>Add to card!</Button>
    </div>
  )
}

export default ProductCard