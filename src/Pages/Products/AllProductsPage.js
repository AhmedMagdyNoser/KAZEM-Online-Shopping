import React from 'react'
import ProductCard from '../../Component/Uitility/ProductCard'
import SideFilter from '../../Component/Uitility/SideFilter'

export default function AllProductsPage() {
  return (
    <div className='container d-flex gap-3'>
      <SideFilter />
      <div className='kazem-grid bg-white p-3 my-3 flex-grow-1'>
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
      </div>
    </div>
  )
}
