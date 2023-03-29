import React from 'react'
import prod1 from "../../images/item.png";
import { Link } from 'react-router-dom';

export default function ProductCard({ title, price, rating }) {
  return (
    <Link to={"/products/:id"} className='text-decoration-none bg-white text-black shadow-sm rounded p-3'>
      <img style={{ width: "100%" }} src={prod1} />
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