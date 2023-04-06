import React from 'react'
import productImg from '../../Images/item.png';
import { Link } from 'react-router-dom';

export default function ProductCard({ title, price, rating, editable }) {

  // if product is editable, the functionalities (edit, delete) is added to the card
  function checkEditability() {
    if (editable) {
      return (
        <div className='d-flex mt-3'>
          <Link to={'/admin/editProduct/:id'} className='btn btn-primary btn-sm rounded-0 flex-fill'><i className='fa-solid fa-edit'></i> Edit</Link>
          <Link className='btn btn-danger btn-sm rounded-0 flex-fill'><i className='fa-solid fa-trash'></i> Delete</Link>
        </div>
      )
    }
  }

  return (
    <div className='text-decoration-none text-black border-bottom p-3' style={{ background: '#f6f6f6' }}>
      <Link to={"/producs/:id"}>
        <img style={{ width: "100%" }} src={productImg} alt={productImg} />
      </Link>
      <p>{title}</p>
      <div className='d-flex justify-content-between'>
        <b>{price}$</b>
        <span className='text-warning fw-bold d-flex gap-1 align-items-center'>
          {rating}
          <i className='fa-solid fa-star'></i>
        </span>
      </div>
      {checkEditability()}
    </div>
  )

}
