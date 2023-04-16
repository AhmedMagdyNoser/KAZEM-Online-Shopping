import React, { useEffect, useState } from 'react'
import SimpleCard from '../../Component/Uitility/SimpleCard'
const api = require('../../api')

export default function AllCategoriesPage() {

  let [categories, setCategories] = useState([]);

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className='container pb-4'>
      <h2 className='my-4 py-3 bg-dark text-white text-center text-uppercase'>All Categories</h2>
      {
        categories.length > 0 ? (
          <div className='kazem-sm-grid'>
            {categories.map(category => <SimpleCard key={category.id} category={category} />)}
          </div>
        ) : <h3 className="text-center my-5">No Categories</h3>
      }
    </div>
  )
}
