import React, { useState, useEffect } from 'react';
import ProductCard from '../../Component/Product/ProductCard'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const api = require('../../Services/api');

export default function AllProductsPage() {

  const params = useParams(); // to get params.query

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // For Filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);

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

  // let brands = [...new Set(products.map(product => product.brand))];

  async function filterProducts(e) {
    e.preventDefault();
    const params = {
      categories: selectedCategories.join(','),
      minPrice: minPrice,
      maxPrice: maxPrice
    };
    const response = await axios.get('http://localhost:5000/products/filteration', { params });
    setProducts(response.data);
    console.log(response.data)
  }

  function collectSelectedCategories(value, checked) {
    checked ? setSelectedCategories([...selectedCategories, value]) : setSelectedCategories(selectedCategories.filter(c => c !== value));
  }

  return (
    <div className='container my-3 mx-auto row'>

      {/* Filters */}
      <form className='col-sm-5 col-lg-3' onSubmit={filterProducts}>

        <div className='mb-4'>
          <p className='fw-bold mb-2'>Category</p>
          <div className='d-flex flex-column gap-2'>
            {categories.map(cate => <CheckItem key={cate.id} value={cate.id} label={cate.title} collectSelectedCategories={collectSelectedCategories} />)}
          </div>
        </div>

        <div className='mb-3'>
          <p className='fw-bold mb-2'>Price</p>
          <input type='number' onChange={(e) => setMinPrice(e.target.value)} className='form-control shadow-none rounded-0 mb-2' placeholder='From' />
          <input type='number' onChange={(e) => setMaxPrice(e.target.value)} className='form-control shadow-none rounded-0 mb-2' placeholder='To' />
        </div>

        <input type='submit' value='Filter' className='btn btn-primary rounded-0' />

      </form>

      {/* Shown Products */}
      {
        products.length !== 0 ?
          <div className='kazem-grid l-gray p-3 col-sm-7 col-lg-9 h-100'>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          :
          <h3 className='l-gray p-3 col-sm-7 col-lg-9 text-center py-5'>No Results</h3>
      }

    </div>
  )
}

function CheckItem({ value, label, collectSelectedCategories }) {
  return (
    <div className='text-nowrap'>
      <input
        id={label}
        type='checkbox'
        onClick={(e) => collectSelectedCategories(value, e.target.checked)}
        value={value}
        className='form-check-input shadow-none me-2' />
      <label htmlFor={label} className='form-check-label'>{label}</label>
    </div>
  )
}