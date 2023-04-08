import { useParams } from "react-router-dom";
import FloatingInput from "../../Component/Uitility/FloatingInput";

export default function EditUser() {

  const params = useParams(); // it's the parameters in the current url '/admin/editUser/:id' the only param is the id
  
  // We must fetch data from api using the parameter (id) but for testing we consume that
  let user = { id: 2, firstName: "Ahmed", lastName: "Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: true, active: true };

  return (
    <div className="container d-flex flex-column gap-4 my-4">

      {/* Basic Information */}
      <form>
        <p className="fw-bold text-center">Add New User</p>
        <div className='d-flex gap-2 mb-2'>
          <FloatingInput type='text' name='fname' defaultValue={user.firstName} required icon='fa-regular fa-user' label='First Name' className='flex-fill' />
          <FloatingInput type='text' name='lname' defaultValue={user.lastName} required icon='fa-regular fa-user' label='Last Name' className='flex-fill' />
        </div>
        <div className='d-flex flex-column gap-2'>
          <FloatingInput type='email' name='email' defaultValue={user.email} required icon='fa-solid fa-envelope' label='Email' />
          <FloatingInput type='text' name='phone' defaultValue={user.phone} required icon='fa-solid fa-phone' label='Phone Number' />
          <FloatingInput type='text' name='fname' defaultValue={user.address} required icon='fa-solid fa-location-dot' label='Address' />
          <FloatingInput type='password' name='Password' defaultValue={user.password} required icon='fa-solid fa-lock' label='Password' />
          <div className='d-flex gap-2 mb-2'>
            <select required defaultValue={user.active? 1 : 0} className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0">
              <option value="1">Active</option>
              <option value="0">In-active</option>
            </select>
            <select required defaultValue={user.admin? 1 : 0} className="form-select py-3 shadow-none rounded-0 border-start-0 border-end-0">
              <option value="1">Admin</option>
              <option value="0">Buyer</option>
            </select>
          </div>
        </div>
        <div className="d-grid mt-3">
          <input type="submit" value="UPDATE USER" className="btn btn-primary rounded-0" />
        </div>
      </form>


    </div>
  )
}