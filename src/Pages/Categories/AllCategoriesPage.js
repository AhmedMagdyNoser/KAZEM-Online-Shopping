import React from 'react'
import { useSelector } from 'react-redux';
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

  // We must fetch data from api using the parameter (id) but for testing we use redux
  let products = useSelector(state => state.products);
  let categories = useSelector(state => state.categories)

  return (
    <div style={{ minHeight: "675px" }}>
      <div className='container pb-4'>
        <h2 className='my-4 py-3 bg-dark text-white text-center text-uppercase'>All Categories</h2>
        <div className='kazem-sm-grid'>
          {categories.map(category => <SimpleCard key={category.id} category={category} />)}
        </div>
      </div>
    </div>
  )
}
