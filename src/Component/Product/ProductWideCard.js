import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuthUser } from '../../Services/Storage';
const api = require('../../Services/api')
export default function ProductWideCard({ productId, quantity, removeItemFromCart, cartTotalCost }) {

  let [product, setProduct] = useState({});

  let [finalPrice, setFinalPrice] = useState(0);

  function calcPrice(e) {
    updateQuantity(Number(e.target.value));
    setFinalPrice(e.target.value * product.price);
    cartTotalCost();
  }

  async function updateQuantity(newQuantity) {
    await api.updateQuantity(getAuthUser().id, product.id, newQuantity)
  }

  async function getProduct(id) {
    await api.getProduct(id, setProduct);
  }

  useEffect(() => {
    getProduct(productId);
  }, [])

  useEffect(() => {
    setFinalPrice(quantity * product.price)
  }, [product])

  return (
    <div className='bg-white border-bottom border-top text-black p-3 mb-3 d-flex flex-column flex-md-row gap-3'>
      <Link to={"/product/" + product.id} className='align-self-center'>
        <img style={{ height: "200px" }} src={product.image} alt={product.title} />
      </Link>
      <div className='d-flex flex-column justify-content-between gap-2 flex-fill'>
        <h5>{product.title}</h5>
        {
          product.description &&
          <small className='text-muted'>{(product.description.length > 325 ? product.description.substr(0, 325) + '..' : product.description)}</small>
        }
        {quantity ?
          <div className='d-flex align-items-center gap-2'>
            <label className='fw-bold'>Quantity:</label>
            <input className='form-control shadow-none rounded-0' name='quantity' onChange={(e) => calcPrice(e)} type='number' min='1' defaultValue={quantity} style={{ width: '100px' }} />
          </div>
          : null}
        <div className='d-flex justify-content-between align-items-center'>
          <b>{finalPrice}$</b>
          <Link className='btn btn-danger rounded-0' onClick={() => removeItemFromCart(product.id)}>
            Remove<i className='fa-solid fa-trash ms-2'></i>
          </Link>
        </div>
      </div>
    </div>
  )
}