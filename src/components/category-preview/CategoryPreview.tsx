import React from 'react'
import './categoryPriview.scss'
import ProductCard from '../product-card/ProductCard'
import { Product } from '../../shop-context/shop.contexts';
interface Props {
    title: string;
     products: Product[]
}
function CategoryPreview({title,products}:Props) {
  return (
    <div  className='category-preview-container'>
        <h2><span className='title'>{title.toUpperCase()}</span></h2>
        <div className='preview'>
            {
                products.filter((_: any,idx: number) => idx < 4)
                .map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    
    </div>
  )
}

export default CategoryPreview