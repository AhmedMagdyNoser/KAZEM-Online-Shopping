import React, { useState } from 'react'
import CreditCard from '../../Images/Checkout/card.png';
import cashOnDelivery from '../../Images/Checkout/cash.png';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  let [creditCardChecked, setCreditCardChecked] = useState(false);
  let [done, setDone] = useState(false);
  return (
    <div className='container'>
      <h2 className="container my-4 py-3 bg-dark text-white text-center text-uppercase">Choose Payment Method </h2>
      {done ?
        <Done />
        :
        creditCardChecked ?
          <CreditCardForm setDone={setDone} />
          :
          <div className='d-flex gap-3 flex-wrap mb-4'>
            <Option img={CreditCard} title='Credit Card' onClick={() => setCreditCardChecked(true)} />
            <Option img={cashOnDelivery} title='Cash on Delivery' onClick={() => setDone(true)} />
          </div>

      }
    </div>
  )
}

function Option({ img, title, onClick }) {
  return (
    <button
      className='btn btn-outline-primary border-0 rounded-0 py-5 gap-3 flex-grow-1 d-flex flex-column align-items-center'
      onClick={onClick}
    >
      <img src={img} alt={title} style={{ width: '200px', height: '200px' }} />
      <b>{title}</b>
    </button>
  )
}

function CreditCardForm({ setDone }) {
  return (
    <form className='l-gray p-4 mb-4 border-bottom border-top d-flex flex-column gap-3' onSubmit={() => setDone(true)}>
      <h4>Payment Details</h4>
      <div className="form-group">
        <label htmlFor="cardNumber">Credit Card Number</label>
        <input type="text" className="form-control rounded-0 mt-1 shadow-none" required id="cardNumber" placeholder="Enter your credit card number" />
      </div>
      <div className="form-group">
        <label htmlFor="cardHolder">Cardholder Name</label>
        <input type="text" className="form-control rounded-0 mt-1 shadow-none" required id="cardHolder" placeholder="Enter your name as it appears on your card" />
      </div>
      <div className="d-flex gap-3">
        <div className="form-group flex-grow-1">
          <label htmlFor="expiryMonth">Expiration Month</label>
          <input type="text" className="form-control rounded-0 mt-1 shadow-none" required id="expiryMonth" placeholder="MM" />
        </div>
        <div className="form-group flex-grow-1">
          <label htmlFor="expiryYear">Expiration Year</label>
          <input type="text" className="form-control rounded-0 mt-1 shadow-none" required id="expiryYear" placeholder="YYYY" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV</label>
        <input type="text" className="form-control rounded-0 mt-1 shadow-none" required id="cvv" placeholder="Enter your card's CVV" />
      </div>
      <button type="submit" className="btn btn-primary rounded-0">BUY NOW</button>
    </form>
  )
}

function Done() {
  return (
    <div className='text-center my-5'>
      <i className='fa-solid fa-circle-check mb-3 fs-1 text-success'></i>
      <h3 className='text-success'>Your Order Has Been Placed</h3>
      <p>You can track your order status in <Link to={'../buyer/orders'}>your orders page</Link></p>
    </div>
  )
}