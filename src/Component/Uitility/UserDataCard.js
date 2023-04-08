import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDataCard({ user }) {
  return (
    <div className='bg-white border-bottom position-relative overflow-hidden'>

      <div className='bg-primary py-5 position-absolute top-0 start-0 w-100' style={{ zIndex: '1' }}></div>
      <div className='text-center mt-5'>
        <i className={'fa-solid fa-'+ (user.admin? 'shield-halved' : 'user' ) +' text-secondary p-4 fs-2 rounded-circle position-relative'} style={{ background: '#eee', zIndex: '2' }}></i>
      </div>

      <div className='p-4 pt-3 text-nowrap'>
        <h5 className='fw-bold text-center mb-3'>{user.firstName} {user.lastName}</h5>
        <small className='text-muted'>
          <p><i className="fa-solid fa-envelope me-2"></i>{user.email}</p>
          <p><i className="fa-solid fa-phone me-2"></i>{user.phone}</p>
          <p><i className="fa-solid fa-location-dot me-2"></i>{user.address}</p>
        </small>

        <div className='d-flex mt-3'>
          <Link to={'/admin/editUser/' + user.id} className='btn btn-primary btn-sm rounded-0 flex-fill'><i className='fa-solid fa-edit'></i> Edit</Link>
          <Link className='btn btn-danger btn-sm rounded-0 flex-fill'><i className='fa-solid fa-trash'></i> Delete</Link>
        </div>
      </div>

    </div>
  )
}