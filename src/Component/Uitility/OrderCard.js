import React from 'react';
import FloatingInput from '../../Component/Uitility/FloatingInput';
export default function OrderCard({ user, order, orderItems, admin }) {

  let totalCost = 0;
  orderItems.forEach(item => totalCost += item.price * item.quantity);

  return (
    <div className="card rounded-0">
      <div className="card-header py-3 rounded-0 d-flex justify-content-between align-items-center bg-secondary text-white">
        <h5 className="m-0 lh-1" >Order #{order.id}</h5>
        <span className="badge bg-dark p-2 rounded-0">{order.status}</span>
      </div>
      <div className="card-body">

        {/* Dates */}
        <div className='d-flex justify-content-between flex-wrap mb-1'>
          <span>Placed on <b>{order.orderDate}</b></span>
          {order.status !== 'Processing' ? <span>Delivered on <b>{order.deliverDate}</b></span> : null}
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
              {orderItems.map(item =>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.quantity * item.price}</td>
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
          <FloatingInput type='text' name='address' defaultValue={user.address} icon='fa-solid fa-location-dot' label='Address' className='flex-fill border-start border-end' readonly />
          <FloatingInput type='text' name='buyer' defaultValue={user.firstName + ' ' + user.lastName + ' | ' + user.email} icon='fa-solid fa-user' label='Buyer' className='flex-fill border-start border-end' readonly />
        </div>

        {/* If order status is processing, some button will be : */}
        {/*   Accept and Decline Buttons in case of admin (called in admin dashboard) */}
        {/*   Cancel Button in case of Buyer */}
        {order.status === 'Processing' ?
          admin ?
            <div className='d-flex gap-2 flex-wrap mt-2'>
              <button className='btn btn-success flex-fill rounded-0'>Accept</button>
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