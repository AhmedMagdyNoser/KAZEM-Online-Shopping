import React from 'react'
import productImg from '../../Images/item.png';
import { Link } from 'react-router-dom';

export default function ProductCard({ title, price, rating }) {
  return (
    <Link to={"/products/:id"} className='text-decoration-none text-black border-bottom p-3' style={{ background: '#f6f6f6' }}>
      <img style={{ width: "100%" }} src={productImg} alt={productImg} />
      <p>{title}</p>
      <div className='d-flex justify-content-between'>
        <b>{price}$</b>
        <span className='text-warning fw-bold d-flex gap-1 align-items-center'>
          {rating}
          <i className='fa-solid fa-star'></i>
        </span>
      </div>
    </Link>
  )
}
