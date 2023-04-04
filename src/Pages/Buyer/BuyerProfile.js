import { useRef } from "react"
import FloatingInput from "../../Component/Uitility/FloatingInput"
import BuyerTabs from "../../Component/Buyer/BuyerTabs"

export default function BuyerProfile() {

  let saveInfoButton = useRef(0);
  let changePasswordButton = useRef(0);

  function activateButton(ref) {
    ref.current.classList.remove('disabled')
  }

  return (
    <div>
      <BuyerTabs active='Profile' />
      <div className="container d-flex flex-column gap-4 my-4">

        {/* Basic Information */}
        <form>
          <p className="fw-bold text-center">Your Basic Information</p>
          <div className='d-flex gap-2 mb-2'>
            <FloatingInput type='text' name='fname' defaultValue='Ahmed' required icon='fa-regular fa-user' label='First Name' onChange={() => activateButton(saveInfoButton)} className='flex-fill' />
            <FloatingInput type='text' name='lname' defaultValue='Magdy' required icon='fa-regular fa-user' label='Last Name' onChange={() => activateButton(saveInfoButton)} className='flex-fill' />
          </div>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='email' name='email' defaultValue='Ahmed125@gmail.com' required icon='fa-solid fa-envelope' label='Email' onChange={() => activateButton(saveInfoButton)} />
            <FloatingInput type='text' name='phone' defaultValue='01234567890' required icon='fa-solid fa-phone' label='Phone Number' onChange={() => activateButton(saveInfoButton)} />
            <FloatingInput type='text' name='fname' defaultValue='Egypt, Cairo, Helwan' required icon='fa-solid fa-location-dot' label='Address' onChange={() => activateButton(saveInfoButton)} />
          </div>
          <div className="d-grid mt-3">
            <input type="submit" value="SAVE" className="btn btn-primary rounded-0 disabled" ref={saveInfoButton} style={{ transition: '0.25s' }} />
          </div>
        </form>

        {/* Changing Password */}
        <form>
          <p className="fw-bold text-center">Change Your Password</p>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='password' name='oldPassord' required icon='fa-solid fa-lock' label='Old Password' />
            <FloatingInput type='password' name='newPassord' required icon='fa-solid fa-lock' label='New Password' onChange={() => activateButton(changePasswordButton)} />
          </div>
          <div className="d-grid mt-3">
            <input type="submit" value="CHANGE" className="btn btn-primary rounded-0 disabled" ref={changePasswordButton} style={{ transition: '0.25s' }} />
          </div>
        </form>

        {/* Status Information */}
        <form>
          <p className="fw-bold text-center">Status</p>
          <div className='d-flex gap-2 mb-2'>
            <FloatingInput type='text' name='status' defaultValue='Active' icon='fa-solid fa-signal' label='Status' className='flex-fill' readonly />
            <FloatingInput type='text' name='type' defaultValue='Buyer' icon='fa-solid fa-tag' label='Account Type' className='flex-fill' readonly />
          </div>
        </form>

      </div>
    </div>
  )
}