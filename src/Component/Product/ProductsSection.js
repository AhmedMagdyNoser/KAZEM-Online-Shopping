import React from 'react'
import { Link } from 'react-router-dom'
const api = require('../../Services/api');

export default function ProductsSection({ title, link, category, editable, deleteCategory, children, smallGrid }) {

  // you can pass to this component 1 of 3 things:
  // title & link                         ==> that title     + link to all products page
  // category                             ==> category title + link to the category page
  // category & editable & deleteCategory ==> category title + (edit, delete) options

  // smallGrid property is only for styling

  function checkEditability() {
    if (category && editable && deleteCategory) {
      return (
        <div className='d-flex gap-2'>
          <Link to={'/admin/editCategory/' + category.id} className='btn btn-primary rounded-0' title="Edit this category"><i className='fa-solid fa-edit'></i></Link>
          <Link className='btn btn-danger rounded-0' title="Delete this category" onClick={() => deleteCategory(category.id)}><i className='fa-solid fa-trash'></i></Link>
        </div>
      )
    } else if (category) {
      return <Link to={'/category/' + category.id} className='btn btn-primary rounded-0'>More</Link>
    } else {
      return <Link to={link} className='btn btn-primary rounded-0'>More</Link>
    }
  }

  return (
    <div className='container bg-white p-0 border-bottom'>

      {/* Section Header */}
      <div className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
        <h4 className='m-0' style={{ fontWeight: '600' }}>{category ? category.title : title}</h4>
        {checkEditability()}
      </div>

      {/* Section Body */}
      <div className={(smallGrid ? 'kazem-sm-grid' : 'kazem-grid') + ' p-3'} style={{background: '#f6f6f6'}}>
        {children}
      </div>

    </div>
  )
}
