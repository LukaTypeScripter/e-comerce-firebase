import React from 'react'
import './categoryPriview.scss'
import ProductCard from '../product-card/ProductCard'
import { Product } from '../../shop-context/shop.contexts';
import { useNavigate } from 'react-router-dom';
interface Props {
    title: string;
     products: Product[]
}
function CategoryPreview({title,products}:Props) {
    const navigate = useNavigate()
  return (
    <div  className='category-preview-container'>
        <h2><span className='title' onClick={() => navigate(`${title}`)}>{title.toUpperCase()}</span></h2>
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