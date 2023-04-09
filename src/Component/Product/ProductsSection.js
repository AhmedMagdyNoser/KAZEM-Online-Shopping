import React from 'react'

import SectionTitle from '../Uitility/SectionTitle'

export default function ProductsSection({ title, category, editable, children, smallGrid }) {
  return (
    <div className='container bg-white p-0 border-bottom'>
      <SectionTitle title={title} category={category} editable={editable} />
      <div className={(smallGrid? 'kazem-sm-grid' : 'kazem-grid') + ' p-3'}>
        {children}
      </div>
    </div>
  )
}
