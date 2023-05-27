import React from 'react'
import './category-item.styles.scss'

interface CategoryItem {
    id: number;
    title: string;
    imageUrl:string;
}
function Category({id,imageUrl,title}:CategoryItem) {
  return (
    <div key={id} className="category-container">
    <div className="background-image" style={{
  backgroundImage: `url(${imageUrl})`
}}/>
        <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
        </div>
        </div>
      
  )
}

export default Category