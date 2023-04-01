import React from 'react'
import SimpleCard from '../../Component/Uitility/SimpleCard'

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
      <div className='container pb-4'>
        <h2 className='my-4 pb-3 fw-bold text-center text-uppercase border-bottom'>All Categories</h2>
        <div className='kazem-sm-grid'>
          <SimpleCard img={Electronics} title="Electronics" />
          <SimpleCard img={MobilesAndAccessories} title="Moblies & Accessories" />
          <SimpleCard img={MenFashion} title="Men's Fashion" />
          <SimpleCard img={WomenFashion} title="Women's Fashion" />
          <SimpleCard img={Sports} title="Sports" />
          <SimpleCard img={Supermarket} title="Supermarket" />
          <SimpleCard img={Computers} title="Computers" />
          <SimpleCard img={Gaming} title="Gaming" />
          <SimpleCard img={BeautyAndHealth} title="Beauty & Health" />
          <SimpleCard img={KidsAndBaby} title="Kids & Baby" />
        </div>
      </div>
    </div>
  )
}
