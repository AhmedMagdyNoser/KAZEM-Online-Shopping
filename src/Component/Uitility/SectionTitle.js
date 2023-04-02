import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionTitle({ title, btnTitle, pathText }) {
  return (
    <div className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      <h3 className='m-0' style={{lineHeight: '1', fontWeight: '600'}}>{title}</h3>
      {btnTitle ?
        <Link to={pathText} className='btn btn-primary rounded-0'>{btnTitle}</Link>
      : null}
    </div>
  )
}
