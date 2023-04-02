import React from 'react'

import SectionTitle from '../Uitility/SectionTitle'
import ProductCard from '../Uitility/ProductCard'

export default function ProductsSection({ title, btnTitle, pathText }) {
  return (
    <div className='container bg-white p-0 border-bottom'>
      <SectionTitle title={title} btnTitle={btnTitle} pathText={pathText} />
      <div className='kazem-grid p-3'>
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
      </div>
    </div>
  )
}
