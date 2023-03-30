import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ img, title }) => {
  return (
    <Link to={'/products'} className='text-decoration-none d-flex flex-column justify-content-center gap-2'>
      <img src={img} alt={img} className='img-fluid' />
      <span className="text-dark fw-bold text-center text-nowrap">{title}</span>
    </Link>
  )
}

export default CategoryCard
