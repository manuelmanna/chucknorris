import React, { useEffect } from 'react'
import '../styles/CategorySelector.css'
const CategorySelector = ({categories, clbk}) => {

  useEffect(clbk, [])


  return (
    <div className='CategorySelector'>
      <select name="category" id="category">
        <option value="" defaultValue hidden>Categorie</option>
        {categories.map((categories) => 
        <option value={categories}>{categories}</option>
        )}
      </select>
    </div>
  )
}

export default CategorySelector
