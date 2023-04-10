import React from 'react'

import SectionTitle from '../Uitility/SectionTitle'

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
