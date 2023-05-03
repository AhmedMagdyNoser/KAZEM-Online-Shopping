import React, { useEffect, useState } from "react";
import Slider from '../../Component/Home/Slider'
import ProductsSection from '../../Component/Product/ProductsSection'
import DiscountSection from '../../Component/Home/DiscountSection'
import ProductCard from '../../Component/Product/ProductCard'
import SimpleCard from '../../Component/Uitility/SimpleCard'
const api = require('../../Services/api');

export default function HomePage() {

  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  async function getAllProducts() {
    await api.getAllProducts(setProducts);
  }

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  return (
    <div className='d-flex flex-column gap-4 pb-4'>

      <Slider />

      <ProductsSection title="Explore Categories" link='/allCategories' smallGrid >
        {categories.slice(0, 7).map(category => <SimpleCard key={category.id} category={category} />)}
      </ProductsSection>

      <DiscountSection />

      <ProductsSection title="Today's Selections" link='/allProducts' >
        {products.slice(0, 10).map(product => <ProductCard key={product.id} product={product} />)}
      </ProductsSection>

      {categories.map(cat => (
        <ProductsSection key={cat.id} category={cat}>
          {products.map(product =>
            product.cat_id === cat.id ?
              <ProductCard key={product.id} product={product} />
              : null
          )}
        </ProductsSection>
      ))}

    </div>
  )
}
