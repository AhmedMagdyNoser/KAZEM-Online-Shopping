import React from 'react'

// Importing Basic Components
import Slider from '../../Component/Home/Slider'
import BrandsSection from '../../Component/Home/BrandsSection'
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

export default function HomePage() {
  return (
    <div className='d-flex flex-column gap-4 pb-4'>

      <Slider />
      
      <ProductsSection title="Explore Categories" btnTitle='More' pathText='/allCategories' smallGrid >
        <SimpleCard img={Electronics} title="Electronics" />
        <SimpleCard img={MobilesAndAccessories} title="Moblies & Accessories" />
        <SimpleCard img={MenFashion} title="Men's Fashion" />
        <SimpleCard img={WomenFashion} title="Women's Fashion" />
        <SimpleCard img={Sports} title="Sports" />
        <SimpleCard img={Supermarket} title="Supermarket" />
      </ProductsSection>

      <BrandsSection /> {/* deleted soon */}

      <ProductsSection title="Best Seller" btnTitle="More" pathText="/allproducts" >
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
      </ProductsSection>

      <ProductsSection title="For You" btnTitle="More" pathText="/allproducts" >
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
      </ProductsSection>

      <DiscountSection />

      <ProductsSection title="Explore Electronics" btnTitle="More" pathText="/allproducts" >
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
      </ProductsSection>
      
    </div>
  )
}
