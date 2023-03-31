import React from 'react'
import Slider from '../../Component/Home/Slider'
import CategoriesSection from '../../Component/Home/CategoriesSection'
import BrandsSection from '../../Component/Home/BrandsSection'
import ProductsSection from '../../Component/Home/ProductsSection'
import DiscountSection from '../../Component/Home/DiscountSection'

export default function HomePage() {
  return (
    <div className='d-flex flex-column gap-4 pb-4'>
      <Slider />
      <CategoriesSection />
      <BrandsSection />
      <ProductsSection title="Best Seller" btnTitle="More" pathText="/allproducts" />
      <ProductsSection title="For You" btnTitle="More" pathText="/allproducts" />
      <DiscountSection />
      <ProductsSection title="Explore Electronics" btnTitle="More" pathText="/allproducts" />
    </div>
  )
}
