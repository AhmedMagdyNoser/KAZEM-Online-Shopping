import React from 'react'

import SectionTitle from '../Uitility/SectionTitle'
import SimpleCard from '../Uitility/SimpleCard'

// Importing Images
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

export default function CategoriesSection() {
  return (
    <div className='container bg-white p-3 shadow-sm'>
      <SectionTitle title="Explore Categories" btnTitle='More' pathText='/allCategories' />
      <div className='kazem-sm-grid'>
        <SimpleCard img={Electronics} title="Electronics" />
        <SimpleCard img={MobilesAndAccessories} title="Moblies & Accessories" />
        <SimpleCard img={MenFashion} title="Men's Fashion" />
        <SimpleCard img={WomenFashion} title="Women's Fashion" />
        <SimpleCard img={Sports} title="Sports" />
        <SimpleCard img={Supermarket} title="Supermarket" />
        {/*
        <CategoryCard img={Computers} title="Computers" />
        <CategoryCard img={Gaming} title="Gaming" />
        <CategoryCard img={BeautyAndHealth} title="Beauty & Health" />
        <CategoryCard img={KidsAndBaby} title="Kids & Baby" />
        */}
      </div>
    </div>
  )
}
