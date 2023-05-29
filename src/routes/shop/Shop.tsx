import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../shop-context/shop.contexts'
import ProductCard from '../../components/product-card/ProductCard'
import './Shop.scss'
function Shop() {
    const { product} = useContext(ProductContext)
  return (
    <div className='products-container'>
        {product.map((product) => {
            return (
                <ProductCard key={product.id} product={product}/>
            )
        })}
    </div>
  )
}

export default Shop