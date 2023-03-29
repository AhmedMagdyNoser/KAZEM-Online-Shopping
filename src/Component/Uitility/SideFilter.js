import React from 'react'

export default function SideFilter() {
  return (
    <div className='pt-4'>

      <div className='mb-4'>
        <p className='fw-bold mb-2'>Category</p>
        <div className='d-flex flex-column gap-2'>
          <CheckItem label='Category1' />
          <CheckItem label='Category2' />
          <CheckItem label='Category3' />
        </div>
      </div>

      <div className='mb-4'>
        <p className='fw-bold mb-2'>Brand</p>
        <div className='d-flex flex-column gap-2'>
          <CheckItem label='Apple' />
          <CheckItem label='Samsung' />
          <CheckItem label='Oppo' />
        </div>
      </div>

      <div className='mb-4'>
        <p className='fw-bold mb-2'>Price</p>
        <input id='price-start' type='number' className='form-control shadow-none mb-2' placeholder='From' />
        <input id='price-start' type='number' className='form-control shadow-none mb-2' placeholder='To' />
        <button className='btn btn-primary'>Filter</button>
      </div>

    </div>
  )
}

function CheckItem({ label }) {
  return (
    <div>
      <input id={label} type='checkbox' value={label} className='form-check-input shadow-none me-2' />
      <label htmlFor={label} className='form-check-label'>{label}</label>
    </div>
  )
}