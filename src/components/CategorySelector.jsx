import React from 'react'
import '../styles/CategorySelector.css'
const CategorySelector = ({categories, clbk}) => {
  return (
    <div className='CategorySelector'>
      <select name="category" id="category" onClick={clbk}>
        <option value="" defaultValue hidden>Categorie</option>
        {categories.map((categories) => 
        <option value={categories}>{categories}</option>
        )}
      </select>
    </div>
  )
}

export default CategorySelector
