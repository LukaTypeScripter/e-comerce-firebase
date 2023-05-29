import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../shop-context/shop.contexts'
import ProductCard from '../../components/product-card/ProductCard'
import './Shop.scss'
function Shop() {
    const { product} = useContext(ProductContext)
  return (
    <div className='products-container'>
        {product.map(({id,name,imageUrl,price}) => {
            return (
                <ProductCard key={id} id={id} name={name} imageUrl={imageUrl} price={price}/>
            )
        })}
    </div>
  )
}

export default Shop