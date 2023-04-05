import React from 'react'
import profile from './../../Images/profile.jpg'

const BuyerInfo = ({name , email , password , address}) => {
    return (
        <div className='kcard'>
            <div className='image'>
                <img alt='Profile' src={profile} />
            </div>
            <div className='info'>
                <h2>{name}</h2>
                <p><i class="fa-solid fa-envelope"></i> {email}</p>
                <p> <i class="fa-solid fa-lock"></i> {password}</p>
                <p> <i class="fa-solid fa-location-dot"></i> {address}</p>
                <div className='btn-group d-flex justify-content-between'>
                    <button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i> Edite</button>
                    <button className='btn btn-danger'><i class="fa-sharp fa-solid fa-trash"></i> Delete</button>
                </div>
            </div>
        
        </div>
    )
}

export default BuyerInfo
