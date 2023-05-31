import React from 'react'
import { categories } from '../../data'
import Directory from '../category-item/Directory'
import { CategoriesCont } from './CategoryStyles/categories'
function Categories() {
  return (
    <CategoriesCont>
    
    {categories.map(({title,id,imageUrl,route}) => {
      return (
        <Directory key={id} title={title} id={id} imageUrl={imageUrl} route={route}/>
      )
    })}
   </CategoriesCont>
  )
}

export default Categories