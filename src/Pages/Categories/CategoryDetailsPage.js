import { useParams } from "react-router-dom";
import ProductCard from "../../Component/Product/ProductCard";
import { useState } from 'react';
import { useEffect } from 'react';
const api = require('../../api');

export default function CategoryDetailsPage() {

  let [category, setCategory] = useState({});
  let [products, setProducts] = useState([]);

  const params = useParams(); // it's the parameters in the current url '/category/:id' the only param is the id

  async function getCategory() {
    await api.getCategory(params.id, setCategory);
  }

  async function getProductsOfCategory() {
    await api.getProductsOfCategory(params.id, setProducts);
  }

  useEffect(() => {
    getCategory();
    getProductsOfCategory();
  }, [])

  return (
    <div className="container bg-white p-0 my-4 border-bottom">
      <h2 className='m-0 py-3 bg-dark text-white text-center text-uppercase'>{category.title}</h2>
      <p className='m-0 py-3  text-center'>{category.description}</p>
      
      {products.length > 0 ?
        (
          <div className="kazem-grid p-3">
            {products.map(product =>
              <ProductCard key={product.id} product={product} />
            )}
          </div>
        )
        : <h3 className="text-center my-5">No Products In This Category</h3>}
    </div>
  )
}