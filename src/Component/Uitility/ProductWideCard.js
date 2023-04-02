import React from 'react'
import productImg from '../../Images/item.png';
import { Link } from 'react-router-dom';

export default function ProductWideCard({ title, price, rating }) {
  return (
    <Link to={"/products/:id"} className='text-decoration-none bg-white text-black p-3 d-flex'>
      <img style={{ height: "250px" }} src={productImg} alt={productImg} />
      <div>
        <h3>{title}</h3>
        <div className='d-flex justify-content-between'>
          <b>{price}$</b>
          <span className='text-warning fw-bold d-flex gap-1 align-items-center'>
            {rating}
            <i className='fa-solid fa-star'></i>
          </span>
        </div>
      </div>
    </Link>
  )
}