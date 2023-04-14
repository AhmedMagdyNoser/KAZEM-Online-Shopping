import { useParams } from "react-router-dom";
import ProductCard from "../../Component/Product/ProductCard";
import { useState } from 'react';
import { useEffect } from 'react';
const api = require('../../api');

export default function CategoryDetailsPage() {

  let [category, setCategory] = useState({});
  let [products, setProducts] = useState([]);

  const params = useParams(); // it's the parameters in the current url '/category/:id' the only param is the id
  
  async function getCategory(id) {
    await api.getCategory(id, setCategory);
  }

  async function getProductsOfCategory(id) {
    await api.getProductsOfCategory(id, setProducts);
  }

  useEffect(() => {
    getCategory(params.id);
    getProductsOfCategory(params.id);
  }, [])

  return (
    <div className="container bg-white p-0 my-4 border-bottom">
      <h2 className='m-0 py-3 bg-dark text-white text-center text-uppercase'>{category.title}</h2>
      <div className="kazem-grid p-3">
        {products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  )
}