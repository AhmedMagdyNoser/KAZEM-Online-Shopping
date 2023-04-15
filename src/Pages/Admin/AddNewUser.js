import { useState } from "react";
import FloatingInput from "../../Component/Uitility/FloatingInput";
import Fade from '../../Component/Uitility/Fade'
const api = require('../../api');

export default function AddNewUser() {

  const [isCreated, setIsCreated] = useState(false);
  
  const formData = new FormData();
  formData.append("firstName", '');
  formData.append("lastName", '');
  formData.append("email", '');
  formData.append("phone", '');
  formData.append("address", '');
  formData.append("password", '');
  formData.append("status", '1');
  formData.append("type", '0');

  async function createNewUser(e) {
    e.preventDefault();
    await api.createNewUser(formData, setIsCreated);
  };

  return (
    <div className="container d-flex flex-column gap-4 my-4">

      {/* Basic Information */}
      <form onSubmit={createNewUser}>
        <p className="fw-bold text-center">Add New User</p>
        <div className='d-flex gap-2 mb-2'>
          <FloatingInput onChange={(e) => formData.set('firstName', e.target.value)} type='text' required icon='fa-regular fa-user' label='First Name' className='flex-fill' />
          <FloatingInput onChange={(e) => formData.set('lastName', e.target.value)} type='text' required icon='fa-regular fa-user' label='Last Name' className='flex-fill' />
        </div>
        <div className='d-flex flex-column gap-2'>
          <FloatingInput onChange={(e) => formData.set('email', e.target.value)} type='email' required icon='fa-solid fa-envelope' label='Email' />
          <FloatingInput onChange={(e) => formData.set('phone', e.target.value)} type='text' required icon='fa-solid fa-phone' label='Phone Number' />
          <FloatingInput onChange={(e) => formData.set('address', e.target.value)} type='text' required icon='fa-solid fa-location-dot' label='Address' />
          <FloatingInput onChange={(e) => formData.set('password', e.target.value)} type='password' required icon='fa-solid fa-lock' label='Password' />
          <div className='d-flex gap-2 mb-2'>
            <select onChange={(e) => formData.set('status', e.target.value)} required defaultValue={1} className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0">
              <option value="1">Active</option>
              <option value="0">In-active</option>
            </select>
            <select onChange={(e) => formData.set('type', e.target.value)} required defaultValue={0} className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0">
              <option value="1">Admin</option>
              <option value="0">Buyer</option>
            </select>
          </div>
        </div>
        <div className="d-grid mt-3">
          <input type="submit" value="ADD USER" className="btn btn-success rounded-0" />
        </div>
        {/* Success Animation */}
        {isCreated && (
          <div className="alert alert-success rounded-0 mt-3">
            <Fade time='0.5s'>
              User Added successfully!
            </Fade>
          </div>
        )}
      </form>

    </div>
  )
}