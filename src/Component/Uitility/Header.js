import React from 'react'
import { Link } from 'react-router-dom';

// The header will expand from the md screens (>=768px) and collapse on smaller screens

export default function Header() {
  return (
    <div className='navbar navbar-expand-md bg-dark'>
      <div className='container'>

        <h1><Link to={"/"} className="fw-bold text-decoration-none text-white fs-3">KAZEM</Link></h1>

        <button className="navbar-toggler border-secondary shadow-none" data-bs-toggle="collapse" data-bs-target="#collapsed">
          <i className='fa-solid fa-bars text-white'></i>
        </button>

        <div className='collapse navbar-collapse' id="collapsed">
          <input className="form-control my-2 mx-md-2 w-100 shadow-none" type="search" placeholder="Search.." />
          <div className='d-flex gap-2'>
            <HeaderLink destination='/login' icon='fa-solid fa-user' text='Login' />
            <HeaderLink destination='/buyer/cart' icon='fa-solid fa-cart-shopping' text='Cart' />
          </div>
        </div>

      </div>
    </div>
  )
}

// Links in the header
function HeaderLink({ destination, icon, text }) {
  return (
    <Link to={destination} className="text-white text-decoration-none">
      <button className='btn btn-primary px-3 d-flex gap-2 align-items-center'>
        <i className={icon}></i>
        <span>{text}</span>
      </button>
    </Link>
  )
}