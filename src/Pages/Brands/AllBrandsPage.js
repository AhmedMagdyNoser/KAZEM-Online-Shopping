import React from 'react'

import SimpleCard from '../../Component/Uitility/SimpleCard'

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
import oxi from '../../Images/Brands/Oxi.png'
import AbuAuf from '../../Images/Brands/AbuAuf.png'
import AEOEgypt from '../../Images/Brands/AEOEgypt.png'
import Aldoha from '../../Images/Brands/Aldoha.png'
import Crystal from '../../Images/Brands/Crystal.png'
import Honor from '../../Images/Brands/Honor.png'
import JBL from '../../Images/Brands/JBL.png'
import LG from '../../Images/Brands/LG.png'
import Tornado from '../../Images/Brands/Tornado.png'
import Toshiba from '../../Images/Brands/Toshiba.png'
import Vivo from '../../Images/Brands/Vivo.png'
import Xiaomi from '../../Images/Brands/Xiaomi.png'


export default function AllBrandsPage() {
  return (
    <div style={{ minHeight: "675px" }}>
      <div className='container pb-4'>
        <h2 className='my-4 py-3 bg-dark text-white text-center text-uppercase'>All brands</h2>
        <div className='kazem-sm-grid'>
          <SimpleCard img={Apple} title="Apple" />
          <SimpleCard img={Samsung} title="Samsung" />
          <SimpleCard img={Huawei} title="Huawei" />
          <SimpleCard img={Oppo} title="Oppo" />
          <SimpleCard img={Realme} title="Realme" />
          <SimpleCard img={Xiaomi} title="Xiaomi" />
          <SimpleCard img={Infinix} title="Infinix" />
          <SimpleCard img={Honor} title="Honor" />
          <SimpleCard img={Vivo} title="Vivo" />
          <SimpleCard img={Adidas} title="Adidas" />
          <SimpleCard img={Defacto} title="Defacto" />
          <SimpleCard img={Caesar} title="Caesar" />
          <SimpleCard img={AEOEgypt} title="AEOEgypt" />
          <SimpleCard img={Nivea} title="Nivea" />
          <SimpleCard img={oxi} title="oxi" />
          <SimpleCard img={AbuAuf} title="AbuAuf" />
          <SimpleCard img={Aldoha} title="Aldoha" />
          <SimpleCard img={Crystal} title="Crystal" />
          <SimpleCard img={JBL} title="JBL" />
          <SimpleCard img={LG} title="LG" />
          <SimpleCard img={Tornado} title="Tornado" />
          <SimpleCard img={Toshiba} title="Toshiba" />
        </div>
      </div>
    </div>
  )
}
