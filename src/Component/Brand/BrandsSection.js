import React from 'react'

import SectionTitle from '../Uitility/SectionTitle'
import SimpleCard from '../Uitility/SimpleCard'

// Importing Images
import Apple from '../../Images/Brands/Apple.png'
import Samsung from '../../Images/Brands/Samsung.png'
import Huawei from '../../Images/Brands/Huawei.png'
import Oppo from '../../Images/Brands/Oppo.png'
import Realme from '../../Images/Brands/Realme.png'
import Infinix from '../../Images/Brands/Infinix.png'
import Adidas from '../../Images/Brands/Adidas.png'
import Defacto from '../../Images/Brands/Defacto.png'
import Caesar from '../../Images/Brands/Caesar.png'
import Nivea from '../../Images/Brands/Nivea.png'
import oxi from '../../Images/Brands/oxi.png'
import AbuAuf from '../../Images/Brands/AbuAuf.png'

export default function BrandsSection() {
  return (
    <div className='container bg-white p-3 shadow-sm'>
      <SectionTitle title="Top Brands" btnTitle='More' pathText='/allbrands' />
      <div className='kazem-sm-grid'>
        <SimpleCard img={Apple} title="Apple" />
        <SimpleCard img={Samsung} title="Samsung" />
        <SimpleCard img={Huawei} title="Huawei" />
        <SimpleCard img={Oppo} title="Oppo" />
        <SimpleCard img={Realme} title="Realme" />
        <SimpleCard img={Infinix} title="Infinix" />
        <SimpleCard img={Adidas} title="Adidas" />
        <SimpleCard img={Defacto} title="Defacto" />
        <SimpleCard img={Caesar} title="Caesar" />
        <SimpleCard img={Nivea} title="Nivea" />
        <SimpleCard img={oxi} title="oxi" />
        <SimpleCard img={AbuAuf} title="AbuAuf" />
      </div>
    </div>
  )
}
