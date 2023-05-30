import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect } from 'react'
import { CategoriesContext, Product } from '../../shop-context/shop.contexts'
import ProductCard from '../../components/product-card/ProductCard'
function CategoryListing() {
    const {category} = useParams()
    const { categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState<Product[]>(
        categoriesMap[category || ''] as Product[]
      );


  useEffect(() => {
    if (category !== undefined) {
      setProducts(categoriesMap[category] || []);
    }
  }, [category, categoriesMap]);
    return (
    <div className='category-container'>
        {
          products &&  products.map((product) => {
                return <ProductCard key={product.id} product={product}/>
            })
        }
    </div>
  )
}

export default CategoryListing