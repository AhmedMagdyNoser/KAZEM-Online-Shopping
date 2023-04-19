import React, { useState } from 'react';
import Fade from '../../Component/Uitility/Fade';
import FloatingInput from '../../Component/Uitility/FloatingInput';
import { Link, useNavigate } from 'react-router-dom';
const api = require('../../Services/api');

export default function LoginPage() {

  const [invalidData, setInvalidData] = useState(false);
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    await api.login(new FormData(event.target), setInvalidData, navigate)
  }

  return (
    <div className="container mt-5 py-5 px-4 px-sm-5 border-bottom shadow-sm l-gray"
      style={{ maxWidth: "500px" }}>
      <h2 className="fw-bold text-center mb-3">Login</h2>

      <form onSubmit={login}>
        <div className='d-flex flex-column gap-2'>
          <FloatingInput type='email' name='email' required icon='fa-solid fa-user' label='Email' />
          <FloatingInput type='password' name='password' required icon='fa-solid fa-lock' label='Password' />
        </div>

        {/* Failure Alert */}
        {invalidData && (
          <div className="text-danger my-2">
            <Fade time='0.5s'>
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

    </div>
  )
}

