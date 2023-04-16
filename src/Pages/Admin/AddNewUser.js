import FloatingInput from "../../Component/Uitility/FloatingInput";
import Fade from '../../Component/Uitility/Fade'
import { useState } from "react";
const api = require('../../api');

export default function AddNewUser() {

  const [isCreated, setIsCreated] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  async function createNewUser(event) {
    event.preventDefault();
    await api.createNewUser(new FormData(event.target), setIsCreated, setEmailExists);
  };

  return (
    <div className="container d-flex flex-column gap-4 my-4">

      {/* Basic Information */}
      <form onSubmit={createNewUser} className="d-flex flex-column gap-2">
        <p className="fw-bold text-center">Add New User</p>

        {/* Name */}
        <div className='d-flex gap-2'>
          <FloatingInput
            required
            type='text'
            name='first_name'
            icon='fa-regular fa-user'
            label='First Name'
            className='flex-fill'
          />
          <FloatingInput
            required
            type='text'
            name='last_name'
            icon='fa-regular fa-user'
            label='Last Name'
            className='flex-fill'
          />
        </div>

        <div className='d-flex flex-column gap-2'>
          <FloatingInput
            required
            type='email'
            name='email'
            icon='fa-solid fa-envelope'
            label='Email'
          />
          <FloatingInput
            required
            type='number'
            name='phone'
            icon='fa-solid fa-phone'
            label='Phone Number'
          />
          <FloatingInput
            required
            type='text'
            name='address'
            icon='fa-solid fa-location-dot'
            label='Address'
          />
          <FloatingInput
            type='password'
            name='password'
            icon='fa-solid fa-lock'
            label='Password'
          />
        </div>

        <div className='d-flex gap-2'>
          <select className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0"
            required name='status' defaultValue={1}>
            <option value="1">Active</option>
            <option value="0">In-active</option>
          </select>
          <select className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0"
            required name='type' defaultValue={0}>
            <option value="1">Admin</option>
            <option value="0">Buyer</option>
          </select>
        </div>

        <div className="d-grid mt-3">
          <input type="submit" value="ADD USER" className="btn btn-success rounded-0" />
        </div>

        {(isCreated && !emailExists) && (
          <div className="alert alert-success rounded-0 mt-3">
            <Fade time='0.5s'>
              User Added Successfully!
            </Fade>
          </div>
        )}

        {(!isCreated && emailExists) && (
          <div className="alert alert-danger rounded-0 mt-3">
            <Fade time='0.5s'>
              This Email Already Exists!
            </Fade>
          </div>
        )}
        

      </form>

    </div>
  )
}