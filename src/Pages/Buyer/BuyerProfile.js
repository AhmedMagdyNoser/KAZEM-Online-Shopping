import FloatingInput from "../../Component/Uitility/FloatingInput"
import BuyerTabs from "../../Component/Buyer/BuyerTabs"
import Fade from "../../Component/Uitility/Fade";
import { useRef, useState, useEffect } from "react";
import { getAuthUser } from "../../Services/Storage";
const api = require('../../Services/api');

export default function BuyerProfile() {

  const [user, setUser] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  let saveInfoButton = useRef(0);
  let changePasswordButton = useRef(0);

  function activateButton(ref) {
    ref.current.classList.remove('disabled');
  }

  async function getUser() {
    await api.getUser(getAuthUser().id, setUser);
  }

  useEffect(() => {
    getUser();
  }, []);

  const updateUser = async (event) => {
    event.preventDefault();
    await api.updateUser(user.id, new FormData(event.target), setUpdated, setEmailExists);
  }

  const changePassword = async (event) => {
    event.preventDefault();
    await api.changePassword(user.id, new FormData(event.target), setPasswordChanged, setInvalidPassword);
  }

  return (
    <div>
      {getAuthUser().type === 0 ?
      
      <BuyerTabs active='Profile' />
    :
    null
    }
      <div className="container d-flex flex-column gap-4 my-4">

        {/* Basic Information */}
        {
          user && (
            <form onSubmit={updateUser}>
              <p className="fw-bold text-center">Your Basic Information</p>
              <div className='d-flex gap-2 mb-2'>
                <FloatingInput type='text' name='first_name' defaultValue={user.first_name} required icon='fa-regular fa-user' label='First Name' onChange={() => activateButton(saveInfoButton)} className='flex-fill' />
                <FloatingInput type='text' name='last_name' defaultValue={user.last_name} required icon='fa-regular fa-user' label='Last Name' onChange={() => activateButton(saveInfoButton)} className='flex-fill' />
              </div>
              <div className='d-flex flex-column gap-2'>
                <FloatingInput type='email' name='email' defaultValue={user.email} required icon='fa-solid fa-envelope' label='Email' onChange={() => activateButton(saveInfoButton)} />
                <FloatingInput type='text' name='phone' defaultValue={user.phone} required icon='fa-solid fa-phone' label='Phone Number' onChange={() => activateButton(saveInfoButton)} />
                <FloatingInput type='text' name='address' defaultValue={user.address} required icon='fa-solid fa-location-dot' label='Address' onChange={() => activateButton(saveInfoButton)} />
              </div>
              <div className="d-grid mt-3">
                <input type="submit" value="SAVE" className="btn btn-primary rounded-0 disabled" ref={saveInfoButton} style={{ transition: '0.25s' }} />
              </div>
              {(updated && !emailExists) && (
                <div className="alert alert-success rounded-0 mt-3">
                  <Fade time='0.5s'>
                    Profile Updated Successfully!
                  </Fade>
                </div>
              )}
              {(!updated && emailExists) && (
                <div className="alert alert-danger rounded-0 mt-3">
                  <Fade time='0.5s'>
                    This Email Already Exists!
                  </Fade>
                </div>
              )}
            </form>
          )
        }

        {/* Changing Password */}
        <form onSubmit={changePassword}>
          <p className="fw-bold text-center">Change Your Password</p>
          <div className='d-flex flex-column gap-2'>
            <FloatingInput type='password' name='oldPassword' required icon='fa-solid fa-lock' label='Old Password' />
            <FloatingInput type='password' name='newPassword' required icon='fa-solid fa-lock' label='New Password' onChange={() => activateButton(changePasswordButton)} />
          </div>
          <div className="d-grid mt-3">
            <input type="submit" value="CHANGE" className="btn btn-primary rounded-0 disabled" ref={changePasswordButton} style={{ transition: '0.25s' }} />
          </div>
          {(passwordChanged && !invalidPassword) && (
            <div className="alert alert-success rounded-0 mt-3">
              <Fade time='0.5s'>
                Password Updated Successfully!
              </Fade>
            </div>
          )}
          {(!passwordChanged && invalidPassword) && (
            <div className="alert alert-danger rounded-0 mt-3">
              <Fade time='0.5s'>
                Invalid Old Password!
              </Fade>
            </div>
          )}
        </form>

        {/* Status Information */}
        {
          user && (
            <form>
              <p className="fw-bold text-center">Status</p>
              <div className='d-flex gap-2 mb-2'>
                <FloatingInput type='text' defaultValue={user.status ? 'Active' : 'In-active'} icon='fa-solid fa-signal' label='Status' className='flex-fill' readonly />
                <FloatingInput type='text' defaultValue={user.type ? 'Admin' : 'Buyer'} icon='fa-solid fa-tag' label='Account Type' className='flex-fill' readonly />
              </div>
            </form>
          )
        }

      </div>
    </div>
  )
}