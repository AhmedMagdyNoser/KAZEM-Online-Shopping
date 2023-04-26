import React, { useState } from 'react';
import FloatingInput from '../../Component/Uitility/FloatingInput';
import { getAuthUser } from '../../Services/Storage';
const api = require('../../Services/api');
export default function OrderCard({ order }) {

  let [status, setStatus] = useState(order.status);

  let totalCost = 0;
  order.products.forEach(product => totalCost += product.price * product.quantity);

  async function toShipping() {
    await api.toShipping(order.id, setStatus);
  }

  return (
    <div className="card rounded-0 shadow-sm">
      <div className="card-header py-3 rounded-0 d-flex justify-content-between align-items-center bg-secondary text-white">
        <h5 className="m-0 lh-1" >Order #{order.id}</h5>
        <span className="badge bg-dark p-2 rounded-0">{status}</span>
      </div>
      <div className="card-body">

        {/* Dates */}
        <div className='d-flex justify-content-between flex-wrap mb-1'>
          <span>Placed on <b>{order.order_date.slice(0, 10)}</b></span>
          {order.status !== 'processing' ? <span>Delivered on <b>{order.deliver_date.slice(0, 10)}</b></span> : null}
        </div>

        {/* Products Table */}
        <div className='table-responsive'>
          <table className="table table-bordered mb-2 text-nowrap">
            <thead className="table-secondary">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map(product =>
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>${product.quantity * product.price}</td>
                </tr>
              )}
            </tbody>
            <tfoot className="table-secondary fw-bold">
              <tr>
                <td>Total Cost</td>
                <td></td>
                <td></td>
                <td>${totalCost}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Address and Buyer */}
        <div className='d-flex gap-2 flex-wrap'>
          <FloatingInput type='text' name='address' defaultValue={order.address} icon='fa-solid fa-location-dot' label='Address' className='flex-fill border-start border-end' readonly />
          <FloatingInput type='text' name='buyer' defaultValue={order.first_name + ' ' + order.last_name + ' | ' + order.email} icon='fa-solid fa-user' label='Buyer' className='flex-fill border-start border-end' readonly />
        </div>

        {/* If order status is processing, some button will be : */}
        {/*   Accept and Decline Buttons in case of admin (called in admin dashboard) */}
        {/*   Cancel Button in case of Buyer */}
        {status === 'processing' ?
          getAuthUser().type === 1 ?
            <div className='d-flex gap-2 flex-wrap mt-2'>
              <button className='btn btn-success flex-fill rounded-0' onClick={toShipping}>Accept</button>
              <button className='btn btn-danger flex-fill rounded-0'>Decline</button>
            </div> :
            <div className='d-flex gap-2 flex-wrap mt-2'>
              <button className='btn btn-danger flex-fill rounded-0'>Cancel</button>
            </div>
          : null}
      </div>
    </div>
  );
};