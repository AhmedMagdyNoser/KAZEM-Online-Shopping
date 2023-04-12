import React, { useState } from 'react';
import Fade from '../../Component/Uitility/Fade';
import FloatingInput from '../../Component/Uitility/FloatingInput';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidData, setInvalidData] = useState(false);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      });
      navigate('/')
      // console.log('Success');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        (error.response.status === 401 && setInvalidData(true));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
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

          {/* Failure Animation */}
          {invalidData && (
            <div className="text-danger my-2">
              <Fade time='1s'>
                Invalid email or password!
              </Fade>
            </div>
          )}

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

