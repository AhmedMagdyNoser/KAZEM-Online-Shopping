import React, { useState, useEffect } from 'react';
import ProductCard from '../../Component/Product/ProductCard'
import { useParams } from 'react-router-dom';
const api = require('../../Services/api');

export default function AllProductsPage() {

  const params = useParams(); // to get params.query

  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  async function getAllProducts() {
    await api.getAllProducts(setProducts);
  }

  async function searchForProducts(query) {
    await api.searchForProducts(query, setProducts);
  }

  useEffect(() => {
    getAllCategories();
    params.query ? searchForProducts(params.query) : getAllProducts();
  }, [params]);

  let brands = [...new Set(products.map(product => product.brand))];

  return (
    <div className='container my-3 mx-auto row'>

      {/* Filters */}
      <form className='col-sm-5 col-lg-3'>

        <div className='mb-4'>
          <p className='fw-bold mb-2'>Category</p>
          <div className='d-flex flex-column gap-2'>
            {categories.map(cate => <CheckItem key={cate.id} value={cate.id} label={cate.title} />)}
          </div>
        </div>

        <div className='mb-4'>
          <p className='fw-bold mb-2'>Brand</p>
          <div className='d-flex flex-column gap-2'>
            {brands.map(brand => <CheckItem key={Math.random()} label={brand} />)}
          </div>
        </div>

        <div className='mb-4'>
          <p className='fw-bold mb-2'>Price</p>
          <input id='price-start' type='number' className='form-control shadow-none rounded-0 mb-2' placeholder='From' />
          <input id='price-start' type='number' className='form-control shadow-none rounded-0 mb-2' placeholder='To' />
          <input type='submit' value='Filter' className='btn btn-primary rounded-0' />
        </div>

      </form>

      {/* Shown Products */}
      {products.length !== 0 ?
        <div className='kazem-grid l-gray p-3 col-sm-7 col-lg-9 h-100'>
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
        :
        <h3 className='l-gray p-3 col-sm-7 col-lg-9 text-center py-5'>No Results</h3>
      }

    </div>
  )
}

function CheckItem({ value, label }) {
  return (
    <div className='text-nowrap'>
      <input id={label} type='checkbox' value={value} className='form-check-input shadow-none me-2' />
      <label htmlFor={label} className='form-check-label'>{label}</label>
    </div>
  )
}