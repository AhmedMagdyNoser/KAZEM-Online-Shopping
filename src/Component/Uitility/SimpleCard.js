import React from 'react'
import Img from "../../Images/Categories/Electronics.png"
import { Link } from 'react-router-dom'

// This component is designed represent categories
export default function SimpleCard({ category }) {
  return (
    <Link to={'/category/' + category.id} className='text-decoration-none d-flex flex-column justify-content-center gap-2'>
      <img src={Img} alt={category.title} className='img-fluid' />
      <span className="text-dark fw-bold text-center text-nowrap">{category.title}</span>
    </Link>
  )
}
