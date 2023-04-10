import React from 'react'
import ProductCard from '../../Component/Product/ProductCard'
import { useSelector } from 'react-redux';

export default function AllProductsPage() {

  // We must fetch data of all products and categroies from api but for testing we get them from redux
  let categories = useSelector(state => state.categories);
  let products = useSelector(state => state.products);
  let brands = [...new Set(products.map(product => product.brand))];

  return (
    <div className='container d-flex gap-3 my-3'>

      {/* Filters */}
      <form>

        <div className='mb-4'>
          <p className='fw-bold mb-2'>Category</p>
          <div className='d-flex flex-column gap-2'>
            {categories.map(cate => <CheckItem label={cate.title} />)}
          </div>
        </div>

        <div className='mb-4'>
          <p className='fw-bold mb-2'>Brand</p>
          <div className='d-flex flex-column gap-2'>
            {brands.map(brand => <CheckItem label={brand} />)}
          </div>
        </div>

        <div className='mb-4'>
          <p className='fw-bold mb-2'>Price</p>
          <input id='price-start' type='number' className='form-control shadow-none rounded-0 mb-2' placeholder='From' />
          <input id='price-start' type='number' className='form-control shadow-none rounded-0 mb-2' placeholder='To' />
          <input type='submin' value='Filter' className='btn btn-primary rounded-0' />
        </div>

      </form>

      {/* Shown Products */}
      <div className='kazem-grid bg-white p-3 flex-grow-1'>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

    </div>
  )
}

function CheckItem({ label }) {
  return (
    <div>
      <input id={label} type='checkbox' value={label} className='form-check-input shadow-none me-2' />
      <label htmlFor={label} className='form-check-label'>{label}</label>
    </div>
  )
}