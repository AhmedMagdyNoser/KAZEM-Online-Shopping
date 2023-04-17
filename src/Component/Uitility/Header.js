import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuthUser, removeAuthUser } from '../../Services/Storage';

// The header will expand from the md screens (>=768px) and collapse on smaller screens

export default function Header() {

  let currentUser = getAuthUser();
  const navigate = useNavigate();

  return (
    <div className='navbar navbar-expand-md bg-dark'>
      <div className='container'>

        <Link to={"/"} className="fw-bold text-decoration-none text-white fs-3">KAZEM</Link>

        <button className="navbar-toggler border-0 shadow-none" data-bs-toggle="collapse" data-bs-target="#collapsed">
          <i className='fa-solid fa-bars text-white'></i>
        </button>

        <div className='collapse navbar-collapse' id="collapsed">
          <input onChange={(e) => navigate(`/allProducts/${e.target.value}`)} className="form-control my-2 mx-md-2 w-100 shadow-none rounded-0" type="search" placeholder="Search.." />

          {
            currentUser ? (

              currentUser.type === 1 ? (
                <div className='d-flex gap-2'>
                  <HeaderLink destination='/buyer/profile' icon='fa-solid fa-user' text={currentUser.first_name} />
                  <HeaderLink destination='/admin/products&categories' icon='fa-solid fa-gear' text='Manage' />
                  <HeaderLink onClick={removeAuthUser} icon='fa-solid fa-right-from-bracket' text='Logout' />
                </div>
              ) :
                <div className='d-flex gap-2'>
                  <HeaderLink destination='/buyer/cart' icon='fa-solid fa-cart-shopping' text='Cart' />
                  <HeaderLink destination='/buyer/profile' icon='fa-solid fa-user' text={currentUser.first_name} />
                  <HeaderLink onClick={removeAuthUser} icon='fa-solid fa-right-from-bracket' text='Logout' />
                </div>

            ) :
              <div className='d-flex gap-2'>
                <HeaderLink destination='/login' icon='fa-solid fa-cart-shopping' text='Cart' />
                <HeaderLink destination='/login' icon='fa-solid fa-user' text='Login' />
              </div>
          }

        </div>

      </div>
    </div>
  )
}

// Links in the header
function HeaderLink({ onClick, destination, icon, text }) {
  return (
    <Link to={destination} className="text-white text-decoration-none" onClick={onClick}>
      <button className='btn btn-primary rounded-0 px-3 d-flex gap-2 align-items-center'>
        <i className={icon}></i>
        <span>{text}</span>
      </button>
    </Link>
  )
}