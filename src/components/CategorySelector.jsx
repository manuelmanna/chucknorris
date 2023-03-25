import React, { useEffect } from 'react'
import '../styles/CategorySelector.css'
const CategorySelector = ({categories, clbk, handler}) => {

  useEffect(clbk, [])

  function getCategory(e){
    handler(e.target.value)
  }

  return (
    <div className='CategorySelector'>
      <select name="category" id="category" onChange={(e) => getCategory(e)}>
        <option value="" defaultValue hidden>Categorie</option>
        {categories.map((categories) => 
        <option value={categories.value} key={categories.id}>{categories.value}</option>
        )}
      </select>
    </div>
  )
}

export default CategorySelector
