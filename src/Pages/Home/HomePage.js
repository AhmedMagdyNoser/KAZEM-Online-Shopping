import React from 'react'
import BrandFeatured from '../../Component/Brand/BrandFeatured'
import DiscountSection from '../../Component/Home/DiscountSection'
import HomeCategory from '../../Component/Home/HomeCategory'
import Slider from '../../Component/Home/Slider'
import CardProductContainer from '../../Component/Product/CardProductContainer'

const HomePage = () => {
    return (
        <div className='d-flex flex-column gap-4'>
            <Slider />
            <HomeCategory />
            <CardProductContainer title="Best Seller" btnTitle="More" pathText="/products" />
            <DiscountSection />
            <CardProductContainer title="Best Selles" btnTitle="More" pathText="/products" />
            <BrandFeatured></BrandFeatured>
        </div>
    )
}

export default HomePage
