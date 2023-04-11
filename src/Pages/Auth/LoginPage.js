import React from 'react';
import FloatingInput from '../../Component/Uitility/FloatingInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (event) => { 
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      });
      console.log('Success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='d-flex align-items-center' style={{ minHeight: '85vh' }}>
      <div className="container my-5 py-5 px-4 px-sm-5 bg-white border-bottom border-top" style={{ maxWidth: "500px" }}>
        <h2 className="fw-bold text-center mb-3">Login</h2>

        <form onSubmit={login}>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='email' name='email' onChange={(e) => setEmail(e.target.value)} required icon='fa-solid fa-user' label='Email' />
            <FloatingInput type='password' name='password' onChange={(e) => setPassword(e.target.value)} required icon='fa-solid fa-lock' label='Password' />
          </div>

          <div className="d-grid my-3">
            <input type="submit" value="LOGIN" className="btn btn-primary rounded-0" />
          </div>

          <div className="text-center">
            <span>You don't have an account ? </span>
            <Link to="/register" className="text-decoration-none">Sign Up</Link>
          </div>
        </form>

        {/* For testing */}
        <div className='d-flex justify-content-between mt-3'>
          <Link to={'/buyer/profile'} className='text-decoration-none'>TestBuyerModule</Link>
          <Link to={'/admin/products&categories'} className='text-decoration-none'>TestAdminModule</Link>
        </div>

      </div>
    </div>
  )
}

