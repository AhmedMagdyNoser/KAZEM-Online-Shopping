import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Fade from '../../Component/Uitility/Fade';
import FloatingInput from "../../Component/Uitility/FloatingInput";
const api = require('../../api');

export default function EditUser() {

  const [user, setUser] = useState(null);
  const [updated, setUpdated] = useState(false);

  const params = useParams();

  async function getUser(id) {
    await api.getUser(id, setUser)
  }

  useEffect(() => {
    getUser(params.id);
  }, []);

  const updateUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    await api.updateUser(formData, user, setUser, setUpdated);
  }

  return (
    <div className="container py-4">

      {user ? (
        <form onSubmit={updateUser} className='d-flex flex-column gap-2'>
          <p className="fw-bold text-center">Update User</p>

          {/* Name */}
          <div className='d-flex gap-2'>
            <FloatingInput
              required
              type='text'
              name='first_name'
              defaultValue={user.first_name}
              icon='fa-regular fa-user'
              label='First Name'
              className='flex-fill'
            />
            <FloatingInput
              required
              type='text'
              name='last_name'
              defaultValue={user.last_name}
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
              defaultValue={user.email}
              icon='fa-solid fa-envelope'
              label='Email'
            />
            <FloatingInput
              required
              type='text'
              name='phone'
              defaultValue={user.phone}
              icon='fa-solid fa-phone'
              label='Phone Number'
            />
            <FloatingInput
              required
              type='text'
              name='address'
              defaultValue={user.address}
              icon='fa-solid fa-location-dot'
              label='Address'
            />
            <FloatingInput
              type='password'
              name='password'
              defaultValue=''
              icon='fa-solid fa-lock'
              label='Password'
            />
          </div>

          <div className='d-flex gap-2'>
            <select className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0"
              required name='status' defaultValue={user.status ? 1 : 0}>
              <option value="1">Active</option>
              <option value="0">In-active</option>
            </select>
            <select className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0"
              required name='type' defaultValue={user.type ? 1 : 0}>
              <option value="1">Admin</option>
              <option value="0">Buyer</option>
            </select>
          </div>

          <div className="d-grid mt-3">
            <input type="submit" value="UPDATE USER" className="btn btn-success rounded-0" />
          </div>

          {updated && (
            <div className="alert alert-success rounded-0 mt-3">
              <Fade time='0.5s'>
                User updated successfully!
              </Fade>
            </div>
          )}

        </form>
      ) : <h3 className='text-center'>No Data</h3>}

    </div>
  )
}