import React from 'react'
import Slider from '../../Component/Home/Slider'
import CategoriesSection from '../../Component/Category/CategoriesSection'
import BrandsSection from '../../Component/Brand/BrandsSection'
import ProductsSection from '../../Component/Product/ProductsSection'
import DiscountSection from '../../Component/Home/DiscountSection'

export default function HomePage() {
  return (
    <div className='d-flex flex-column gap-4 pb-4'>
      <Slider />
      <CategoriesSection />
      <BrandsSection />
      <ProductsSection title="Best Seller" btnTitle="More" pathText="/products" />
      <ProductsSection title="For You" btnTitle="More" pathText="/products" />
      <DiscountSection />
      <ProductsSection title="Explore Electronics" btnTitle="More" pathText="/products" />
    </div>
  )
}
