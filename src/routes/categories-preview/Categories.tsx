import React, { Fragment } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../../shop-context/shop.contexts'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

function Categories() {
    const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
    {
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        
        return(
          <CategoryPreview key={title} title={title} products={products} />
        )
      })
    }
   
    </>
  )
}

export default Categories