import React from 'react'
import { Link } from 'react-router-dom'

export default function SubTitle({ title, btnTitle, pathText }) {
  return (
    <div className="pb-3 d-flex justify-content-between align-items-center border-bottom mb-3">
      <h3 className='m-0' style={{lineHeight: '1', fontWeight: '600'}}>{title}</h3>
      {btnTitle ?
        <Link to={pathText} className='btn btn-outline-primary'>{btnTitle}</Link>
      : null}
    </div>
  )
}
