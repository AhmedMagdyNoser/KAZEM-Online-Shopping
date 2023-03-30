import React from 'react'
import SubTitle from '../Uitility/SubTitle'
import ProductCard from './ProductCard'

export default function CardProductContainer({ title, btnTitle, pathText }) {
  return (
    <div className='container'>
      <SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />
      <div className='kazem-grid'>
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
      </div>
    </div>
  )
}
