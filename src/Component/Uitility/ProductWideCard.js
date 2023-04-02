import React from 'react'
import productImg from '../../Images/item.png';
import { Link } from 'react-router-dom';

export default function ProductWideCard({ title, price, rating, description }) {
  return (
    <div className='bg-white border-bottom text-black p-3 mb-3 d-flex flex-column flex-md-row gap-3'>
      <Link to={"/products/:id"} className='align-self-center'>
        <img style={{ height: "200px" }} src={productImg} alt={productImg} />
      </Link>
      <div className='d-flex flex-column justify-content-between gap-1'>
        <h5>{title}</h5>
        <small className='text-muted'>{description}</small>
        <div className='d-flex justify-content-between align-items-center'>
          <b>{price}$</b>
          <button className='btn btn-danger rounded-0'>
            Remove<i className='fa-solid fa-trash ms-2'></i>
          </button>
        </div>
      </div>
    </div>
  )
}