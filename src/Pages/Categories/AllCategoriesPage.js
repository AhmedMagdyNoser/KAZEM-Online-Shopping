import React, { useEffect, useState } from 'react'
import SimpleCard from '../../Component/Uitility/SimpleCard'
const api = require('../../api')

export default function AllCategoryPage() {

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
      <div className='kazem-sm-grid'>
        {categories.map(category => <SimpleCard key={category.id} category={category} />)}
      </div>
    </div>
  )
}
