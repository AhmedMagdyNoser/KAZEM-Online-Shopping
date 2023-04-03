import { useRef } from "react"
import FloatingInput from "../../Component/Auth/FloatingInput"
import BuyerTaps from "../../Component/Buyer/BuyerTaps"

export default function BuyerProfile() {

  let saveButton = useRef(0);
  let changePasswordButton = useRef(0);

  function activateSaving() {
    saveButton.current.classList.remove('disabled');
  }

  function activateChangingPassword() {
    changePasswordButton.current.classList.remove('disabled');
  }

  return (
    <div>
      <BuyerTaps active='Profile' />
      <div className="container">

        {/* Basic Information */}
        <form className="my-3">
          <p className="fw-bold text-center">Your Basic Information</p>
          <div className='d-flex gap-2 mb-2'>
            <FloatingInput type='text' name='fname' defaultValue='Ahmed' icon='fa-regular fa-user' label='First Name' onChange={activateSaving} className='flex-fill' />
            <FloatingInput type='text' name='lname' defaultValue='Magdy' icon='fa-regular fa-user' label='Last Name' onChange={activateSaving} className='flex-fill' />
          </div>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='text' name='username' defaultValue='AhmedMagdy125' icon='fa-solid fa-user' label='Username' onChange={activateSaving} />
            <FloatingInput type='email' name='email' defaultValue='Ahmed125@gmail.com' icon='fa-solid fa-envelope' label='Email' onChange={activateSaving} />
            <FloatingInput type='text' name='phone' defaultValue='01234567890' icon='fa-solid fa-phone' label='Phone Number' onChange={activateSaving} />
            <FloatingInput type='text' name='fname' defaultValue='Egypt, Cairo, Helwan' icon='fa-solid fa-location-dot' label='Address' onChange={activateSaving} />
          </div>
          <div className="d-grid mt-3">
            <input type="submit" value="SAVE" className="btn btn-primary rounded-0 disabled" ref={saveButton} style={{ transition: '0.25s' }} />
          </div>
        </form>

        {/* Status Information */}
        <form className="py-3 border-bottom border-top">
          <p className="fw-bold text-center">Status</p>
          <div className='d-flex gap-2 mb-2'>
            <FloatingInput type='text' name='status' defaultValue='Active' icon='fa-solid fa-signal' label='Status' className='flex-fill' readonly />
            <FloatingInput type='text' name='type' defaultValue='Buyer' icon='fa-solid fa-tag' label='Account Type' className='flex-fill' readonly />
          </div>
        </form>

        {/* Changing Password */}
        <form className="py-3">
          <p className="fw-bold text-center">Change Your Password</p>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='password' name='old-passord' icon='fa-solid fa-lock' label='Old Password' />
            <FloatingInput type='password' name='new-passord' icon='fa-solid fa-lock' label='New Password' onChange={activateChangingPassword} />
          </div>
          <div className="d-grid mt-3">
            <input type="submit" value="CHANGE" className="btn btn-primary rounded-0 disabled" ref={changePasswordButton} style={{ transition: '0.25s' }} />
          </div>
        </form>

      </div>
    </div>
  )
}