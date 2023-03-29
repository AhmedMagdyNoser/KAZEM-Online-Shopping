import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({ title, btnTitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3 className="my-4">{title}</h3>
      {btnTitle ?
        <Link to={pathText} className='btn btn-outline-primary rounded-pill'>{btnTitle}</Link>
      : null}
    </div>
  )
}

export default SubTitle
