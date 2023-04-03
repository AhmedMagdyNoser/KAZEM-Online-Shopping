import React, { useState } from 'react'
import productImg from '../../Images/item.png';
import { Link } from 'react-router-dom';

export default function ProductWideCard({ title, price, quantity, description }) {

  let [finalPrice, setFinalPrice] = useState(price);

  function calcPrice(e) {
    setFinalPrice(e.target.value * price);
  }

  return (
    <div className='bg-white border-bottom text-black p-3 mb-3 d-flex flex-column flex-md-row gap-3'>
      <Link to={"/products/:id"} className='align-self-center'>
        <img style={{ height: "200px" }} src={productImg} alt={productImg} />
      </Link>
      <div className='d-flex flex-column justify-content-between gap-2 flex-fill'>
        <h5>{title}</h5>
        <small className='text-muted'>{(description.length > 325 ? description.substr(0, 325) : description)}..</small>
        {quantity ?
          <div className='d-flex align-items-center gap-2'>
            <label className='fw-bold'>Quantity:</label>
            <input className='form-control shadow-none rounded-0' onChange={(e) => calcPrice(e)} type='number' min='1' defaultValue='1' style={{ width: '100px' }} />
          </div>
          : null}
        <div className='d-flex justify-content-between align-items-center'>
          <b>{finalPrice}$</b>
          <button className='btn btn-danger rounded-0'>
            Remove<i className='fa-solid fa-trash ms-2'></i>
          </button>
        </div>
      </div>
    </div>
  )
}