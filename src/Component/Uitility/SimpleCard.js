import React from 'react'
import { Link } from 'react-router-dom'

// This component is designed represent categories
export default function SimpleCard({ category }) {
  return (
    <Link to={'/category/' + category.id} className='text-decoration-none d-flex flex-column justify-content-center gap-2'>
      <img src={category.image} alt={category.title} className='img-fluid' />
      <span className="text-dark fw-bold text-center text-nowrap">{category.title}</span>
    </Link>
  )
}
