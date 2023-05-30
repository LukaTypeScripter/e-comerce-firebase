
import { Routes,Route } from 'react-router-dom'

import './Shop.scss'
import CategoryListing from '../category-listing/CategoryListing'
import Categories from '../categories-preview/Categories'

function Shop() {
    
  return (
    <Routes>
      <Route index element={<Categories/>} />
      <Route  path=':category' element={<CategoryListing/>} />
    </Routes>
   
  )
}

export default Shop