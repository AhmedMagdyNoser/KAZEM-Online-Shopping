import React from 'react'
import { Link } from 'react-router-dom'

// you can pass to this component 1 of 3 things
// editable & category
// category
// title & link

export default function SectionTitle({ title, link, category, editable }) {

  // if it is editable, the functionalities (edit, delete) is added to this component
  // if not, the button (more) is added
  function checkEditability() {
    if (editable) {
      return (
        <div className='d-flex gap-2'>
          <Link to={'/admin/editCategory/' + category.id} className='btn btn-primary rounded-0' title="Edit this category"><i className='fa-solid fa-edit'></i></Link>
          <Link className='btn btn-danger rounded-0' title="Delete this category"><i className='fa-solid fa-trash'></i></Link>
        </div>
      )
    }
    if (category) {
      return <Link to={'/category/' + category.id} className='btn btn-primary rounded-0'>More</Link>
    } 
    return <Link to={link} className='btn btn-primary rounded-0'>More</Link>
  }

  return (
    <div className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      <h4 className='m-0' style={{fontWeight: '600'}}>{category? category.title : title}</h4>
      {checkEditability()}
    </div>
  )

}
