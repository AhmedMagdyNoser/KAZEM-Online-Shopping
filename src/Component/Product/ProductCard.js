import React from 'react'
import { Link } from 'react-router-dom';
import Fade from '../Uitility/Fade';
import { useState } from 'react';
import { useEffect } from 'react';
const api = require('../../Services/api');

export default function ProductCard({ product, editable, deleteProduct }) {

  let [rating, setRating] = useState(0);

  async function getProductRating() {
    await api.getProductRating(product.id, setRating);
  }

  useEffect(() => {
    getProductRating();
  }, []);

  function checkEditability() {
    if (editable) {
      return (
        <div className='d-flex'>
          <Link to={'/admin/editProduct/' + product.id} className='btn btn-primary btn-sm rounded-0 flex-fill'><i className='fa-solid fa-edit'></i> Edit</Link>
          <Link className='btn btn-danger btn-sm rounded-0 flex-fill' onClick={() => deleteProduct(product.id)}><i className='fa-solid fa-trash'></i> Delete</Link>
        </div>
      )
    }
  }

  return (
    <Fade time='0.5s'>
      <div className='border-bottom p-3 bg-white d-flex flex-column' style={{ height: '100%' }}>
        <Link to={"/product/" + product.id} className='d-flex justify-content-center overflow-hidden mb-3 '>
          <div style={{ height: '200px', width: '200px' }} className='d-flex justify-content-center'>
            <img style={{ height: '100%' }} src={product.image} alt={product.title} />
          </div>
        </Link>
        <div className='d-flex flex-column justify-content-between gap-2 flex-grow-1'>
          <span className=''>{(product.title.length > 45 ? product.title.substr(0, 45) + '..' : product.title)}</span>
          <div className='d-flex justify-content-between'>
            <b>{product.price}$</b>
            <span className='text-warning fw-bold d-flex gap-1 align-items-center'>
              {rating}
              <i className='fa-solid fa-star'></i>
            </span>
          </div>
          {checkEditability()}
        </div>
      </div>
    </Fade>
  )

}