import React from 'react'
import CategoryCard from '../../Component/Uitility/SimpleCard'

import Electronics from "../../Images/Categories/Electronics.png"
import MobilesAndAccessories from "../../Images/Categories/Moblies & Accessories.png"
import MenFashion from "../../Images/Categories/Men's Fashion.png"
import WomenFashion from "../../Images/Categories/Women's Fashion.png"
import Supermarket from "../../Images/Categories/Supermarket.png"
import Sports from "../../Images/Categories/Sports.png"
import Computers from "../../Images/Categories/Computers.png"
import Gaming from "../../Images/Categories/Gaming.png"
import BeautyAndHealth from "../../Images/Categories/Beauty & Health.png"
import KidsAndBaby from "../../Images/Categories/Kids & Baby.png"

export default function AllCategoryPage() {
  return (
    <div style={{ minHeight: "675px" }}>
      <div className='container'>
        <h2 className='my-4 pb-3 fw-bold text-center text-uppercase border-bottom'>All Categories</h2>
        <div className='kazem-sm-grid'>
          <CategoryCard img={Electronics} title="Electronics" />
          <CategoryCard img={MobilesAndAccessories} title="Moblies & Accessories" />
          <CategoryCard img={MenFashion} title="Men's Fashion" />
          <CategoryCard img={WomenFashion} title="Women's Fashion" />
          <CategoryCard img={Sports} title="Sports" />
          <CategoryCard img={Supermarket} title="Supermarket" />
          <CategoryCard img={Computers} title="Computers" />
          <CategoryCard img={Gaming} title="Gaming" />
          <CategoryCard img={BeautyAndHealth} title="Beauty & Health" />
          <CategoryCard img={KidsAndBaby} title="Kids & Baby" />
        </div>
      </div>
    </div>
  )
}
