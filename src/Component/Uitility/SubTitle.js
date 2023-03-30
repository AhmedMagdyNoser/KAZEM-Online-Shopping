import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({ title, btnTitle, pathText }) => {
  return (
    <div className="p-3 d-flex justify-content-between align-items-center border-bottom">
      <h3 className='m-0 fw-bold'>{title}</h3>
      {btnTitle ?
        <Link to={pathText} className='btn btn-outline-primary rounded-pill'>{btnTitle}</Link>
      : null}
    </div>
  )
}

export default SubTitle
