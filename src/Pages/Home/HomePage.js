import React from 'react'
import Slider from '../../Component/Home/Slider'
import ProductsSection from '../../Component/Product/ProductsSection'
import DiscountSection from '../../Component/Home/DiscountSection'
import ProductCard from '../../Component/Product/ProductCard'
import SimpleCard from '../../Component/Uitility/SimpleCard'
import { useSelector } from 'react-redux';

export default function HomePage() {

  // We must fetch data of all products and categroies from api but for testing we get them from redux
  let categories = useSelector(state => state.categories);
  let products = useSelector(state => state.products);

  return (
    <div className='d-flex flex-column gap-4 pb-4'>

      <Slider /> {/* needs to be clickable */}

      <ProductsSection title="Explore Categories" link='/allCategories' smallGrid >
        {categories.slice(0, 6).map(category => <SimpleCard key={category.id} category={category} />)}
      </ProductsSection>

      <ProductsSection title='Best Seller' link='/allProducts' >
        {products.slice(0, 8).map(product => <ProductCard key={product.id} product={product} />)}
      </ProductsSection>

      <DiscountSection /> {/* needs to be clickable */}

      <ProductsSection title='For You' link='/allProducts' >
        {products.slice(8, 16).map(product => <ProductCard key={product.id} product={product} />)}
      </ProductsSection>

      {/* need to fetch category name */}
      <ProductsSection category={categories[1]} >
        {products.map(product =>
          product.categoryId === categories[1].id ? <ProductCard key={product.id} product={product} /> : null
        )}
      </ProductsSection>

      {/* need to fetch category name */}
      <ProductsSection category={categories[2]} >
        {products.map(product =>
          product.categoryId === categories[2].id ? <ProductCard key={product.id} product={product} /> : null
        )}
      </ProductsSection>

    </div>
  )
}
