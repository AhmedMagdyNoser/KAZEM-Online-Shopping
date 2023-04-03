import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='bg-white border-top py-4'>
      <div className='container d-flex justify-content-center justify-content-sm-between flex-wrap gap-4'>
        <div className='d-flex gap-3'>
          <Link to={'/'} className='text-muted text-decoration-none fw-bold'>Conditions of Use</Link>
          <Link to={'/'} className='text-muted text-decoration-none fw-bold'>Contact Us</Link>
        </div>
        <div className='text-muted d-flex gap-3'>
          <span>
            <i className="fa-solid fa-phone me-2"></i>
            +20 123 456 7890
          </span>
          <a href='/'><i className="fa-brands fa-facebook-f text-muted"></i></a>
          <a href='/'><i className="fa-brands fa-instagram text-muted"></i></a>
        </div>
      </div>
    </div>
  )
}