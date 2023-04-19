import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FloatingInput from '../../Component/Uitility/FloatingInput';
import axios from 'axios';
import Fade from '../../Component/Uitility/Fade';

export default function RegisterPage() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', {
        firstName,
        lastName,
        email,
        phone,
        address,
        password
      });
      navigate('/acountCreated');
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="container my-5 py-5 px-4 px-sm-5 border-bottom shadow-sm l-gray" style={{ maxWidth: "750px" }}>
      <h2 className="fw-bold text-center mb-3">Register</h2>

      <form onSubmit={register}>
        <div className='d-flex gap-2 mb-2'>
          <FloatingInput type='text' name='fname' required onChange={(e) => setFirstName(e.target.value)} icon='fa-regular fa-user' label='First Name' className='flex-fill' />
          <FloatingInput type='text' name='lname' required onChange={(e) => setLastName(e.target.value)} icon='fa-regular fa-user' label='Last Name' className='flex-fill' />
        </div>
        <div className='d-flex flex-column gap-2'>
          <FloatingInput type='email' name='email' required onChange={(e) => setEmail(e.target.value)} icon='fa-solid fa-envelope' label='Email' />
          <FloatingInput type='number' name='phone' required onChange={(e) => setPhone(e.target.value)} icon='fa-solid fa-phone' label='Phone Number' />
          <FloatingInput type='text' name='address' required onChange={(e) => setAddress(e.target.value)} icon='fa-solid fa-location-dot' label='Address' />
          <FloatingInput type='password' name='password' required onChange={(e) => setPassword(e.target.value)} icon='fa-solid fa-lock' label='Password' />
        </div>

        {/* Failure Message */}
        {emailExists && (
          <div className="text-danger my-2">
            <Fade time='1s'>
              Email already exists!
            </Fade>
          </div>
        )}

        <div className="d-grid my-3">
          <input type="submit" value="REGISTER" className="btn btn-primary rounded-0" />
        </div>

        <div className="text-center">
          <span>Already have an account ? </span>
          <Link to="/login" className="text-decoration-none">Login</Link>
        </div>
      </form>
    </div>
  )
}
