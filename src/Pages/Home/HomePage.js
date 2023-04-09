import React from 'react'

// Importing Basic Components
import Slider from '../../Component/Home/Slider'
import ProductsSection from '../../Component/Product/ProductsSection'
import DiscountSection from '../../Component/Home/DiscountSection'
import ProductCard from '../../Component/Product/ProductCard'
import SimpleCard from '../../Component/Uitility/SimpleCard'

// Importing Category Images
import Electronics from "../../Images/Categories/Electronics.png"
import MobilesAndAccessories from "../../Images/Categories/Moblies & Accessories.png"
import MenFashion from "../../Images/Categories/Men's Fashion.png"
import WomenFashion from "../../Images/Categories/Women's Fashion.png"
import Supermarket from "../../Images/Categories/Supermarket.png"
import Sports from "../../Images/Categories/Sports.png"

// testing data
import { useSelector } from 'react-redux';

export default function HomePage() {

  // We must fetch data of all products and categroies from api but for testing we get them from redux
  let categories = useSelector(state => state.categories);
  let products = useSelector(state => state.products);

  return (
    <div className='d-flex flex-column gap-4 pb-4'>

      <Slider />

      {/* Edited Soon */}
      <ProductsSection title="Explore Categories" btnTitle='More' pathText='/allCategories' smallGrid >
        <SimpleCard img={Electronics} title="Electronics" />
        <SimpleCard img={MobilesAndAccessories} title="Moblies & Accessories" />
        <SimpleCard img={MenFashion} title="Men's Fashion" />
        <SimpleCard img={WomenFashion} title="Women's Fashion" />
        <SimpleCard img={Sports} title="Sports" />
        <SimpleCard img={Supermarket} title="Supermarket" />
      </ProductsSection>

      <ProductsSection title='Best Seller' >
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </ProductsSection>

      <DiscountSection />

      <ProductsSection title='For You' >
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </ProductsSection>

      <ProductsSection category={categories[1]} >
        {products.map(product =>
          product.categoryId === categories[1].id ? <ProductCard key={product.id} product={product} editable /> : null
        )}
      </ProductsSection>

      <ProductsSection category={categories[2]} editable >
        {products.map(product =>
          product.categoryId === categories[2].id ? <ProductCard key={product.id} product={product} editable /> : null
        )}
      </ProductsSection>

    </div>
  )
}
