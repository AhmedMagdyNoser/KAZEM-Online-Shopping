import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'



const Checkout = () => {

    const [paymentStatus , setPaymentState] = useState(null) ; 

    const handlePaymentStatus = ()=>{
        setPaymentState(true ) ; 
    }

  return (
    <Fragment>
        <h2 class="container my-4 py-3 bg-dark text-white text-center text-uppercase">Choose PayMethod </h2>
            <div className='bg-white border-bottom border-top'>
                    <div class="form-check py-4 mx-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    Cash
                </label>
                </div>
                <div class="form-check  py-4 mx-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                    Visa
                </label>
                </div>
                
            </div>
            <div className='btn-group my-3'>
                    <button className='btn btn-dark  rounded-1' onClick={()=>setPaymentState(!paymentStatus)} >Confirm </button>
                    <div className='bg-white border mx-3' style={{width: "160px" ,padding :"8px 20px" , textAlign:"center" , fontWeight :"bold"}}>4000 EGB</div>
                </div>

                
                
                    
                {
                    paymentStatus ? (
                        <div class="alert alert-success" role="alert">
                        Successful payment
                        </div>
        
                    ):(
                        <div class="alert alert-danger" role="alert">
                Failed   payment
                </div>
                    )
                }

                
    </Fragment>

  )
}

export default Checkout
