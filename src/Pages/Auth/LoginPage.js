import React from 'react';
import FloatingInput from '../../Component/Auth/FloatingInput';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='d-flex align-items-center' style={{minHeight: '85vh'}}>
      <div className="container my-5 py-5 px-4 px-sm-5 bg-white shadow-sm rounded" style={{ maxWidth: "500px" }}>
        <h2 className="fw-bold text-center mb-3">Login</h2>
        <form>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='text' icon='fa-solid fa-user' label='Username or Email' />
            <FloatingInput type='password' icon='fa-solid fa-lock' label='Password' />
          </div>

          <div className="d-grid my-3">
            <input type="submit" value="LOGIN" className="btn btn-primary" />
          </div>

          <div className="text-center">
            <span>You don't have an account ? </span>
            <Link to="/register" className="text-decoration-none">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
