import React from 'react'
import { categories } from '../../data'
import Category from '../category-item/category-item.component'
import './categories.scss'
function Categories() {
  return (
    <div className="categories-container">
    
    {categories.map(({title,id,imageUrl}) => {
      return (
        <Category key={id} title={title} id={id} imageUrl={imageUrl}/>
      )
    })}
   </div>
  )
}

export default Categories