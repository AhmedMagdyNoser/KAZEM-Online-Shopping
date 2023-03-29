import React from 'react'
import { Link } from 'react-router-dom'
import FloatingInput from '../../Component/Auth/FloatingInput';

export default function RegisterPage() {
  return (
    <div className='d-flex align-items-center' style={{ minHeight: '85vh' }}>
      <div className="container my-5 py-5 px-4 px-sm-5 bg-white shadow-sm rounded" style={{ maxWidth: "750px" }}>
        <h2 className="fw-bold text-center mb-3">Register</h2>
        <form>
          <div className='d-flex gap-2 mb-2'>
            <FloatingInput type='text' icon='fa-regular fa-user' label='First Name' className='flex-fill' />
            <FloatingInput type='text' icon='fa-regular fa-user' label='Last Name' className='flex-fill' />
          </div>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='text' icon='fa-solid fa-user' label='Username' />
            <FloatingInput type='email' icon='fa-solid fa-envelope' label='Email' />
            <FloatingInput type='text' icon='fa-solid fa-phone' label='Phone Number' />
            <FloatingInput type='text' icon='fa-solid fa-location-dot' label='Address' />
            <FloatingInput type='password' icon='fa-solid fa-lock' label='Password' />
          </div>

          <div className="d-grid my-3">
            <input type="submit" value="REGISTER" className="btn btn-primary" />
          </div>

          <div className="text-center">
            <span>Already have an account ? </span>
            <Link to="/login" className="text-decoration-none">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
