import React from 'react'
import laptops from "../../Images/laptops.png";



export default function DiscountSection() {
  return (
    <div
      className='container rounded d-flex justify-content-around align-items-center flex-wrap gap-3 py-3'
      style={{ background: "radial-gradient(circle, #767676 0%, #4d4f50 100%, #494c4d 100%)" }}
    >
      <div className='text-white fw-bold'>Up To 30% Off On Laptops</div>
      <img style={{ height: '125px' }} src={laptops} alt="Discount" />
    </div>
  )
}

