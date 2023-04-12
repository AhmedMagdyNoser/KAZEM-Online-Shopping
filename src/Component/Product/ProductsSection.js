import React from 'react'
import { Link } from 'react-router-dom'

// import SectionTitle from '../Uitility/SectionTitle'

export default function ProductsSection({ title, link, category, editable, children, smallGrid }) {
  return (
    <div className='container bg-white p-0 border-bottom'>
      <SectionTitle title={title} link={link} category={category} editable={editable} />
      <div className={(smallGrid? 'kazem-sm-grid' : 'kazem-grid') + ' p-3'}>
        {children}
      </div>
    </div>
  )
}

function SectionTitle({ title, link, category, editable }) {
  // you can pass to this component 1 of 3 things
    // editable & category
    // category
    // title & link
  
  // if it is editable, the functionalities (edit, delete) is added
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
