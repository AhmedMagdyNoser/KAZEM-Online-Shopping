import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionTitle({ title, btnTitle, pathText, editable }) {

  // if it is editable, the functionalities (add, edit, delete) is added to this component
  function checkEditability() {
    if (btnTitle) {
      return <Link to={pathText} className='btn btn-primary rounded-0'>{btnTitle}</Link>
    } else if (editable) {
      return (
        <div className='d-flex gap-2'>
          <Link className='btn btn-primary rounded-0' title="Edit this category"><i className='fa-solid fa-edit'></i></Link>
          <Link className='btn btn-danger rounded-0' title="Delete this category"><i className='fa-solid fa-trash'></i></Link>
        </div>
      )
    }
  }

  return (
    <div className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      <h4 className='m-0' style={{fontWeight: '600'}}>{title}</h4>
      {checkEditability()}
    </div>
  )

}
