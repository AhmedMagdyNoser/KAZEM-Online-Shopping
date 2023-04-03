import React from 'react'

import SectionTitle from '../Uitility/SectionTitle'

export default function ProductsSection({ title, btnTitle, pathText, editable, children, smallGrid }) {
  return (
    <div className='container bg-white p-0 border-bottom'>
      <SectionTitle title={title} btnTitle={btnTitle} pathText={pathText} editable={editable} />
      <div className={(smallGrid? 'kazem-sm-grid' : 'kazem-grid') + ' p-3'}>
        {children}
      </div>
    </div>
  )
}
