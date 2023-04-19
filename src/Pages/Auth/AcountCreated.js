import { Link } from "react-router-dom";

export default function AcountCreated() {
  return (
    <div className='container align-items-center d-flex py-5 my-5 flex-column l-gray border-bottom' >
      <h1><i className="fa-regular fa-handshake text-warning"></i></h1>
      <h2>Acount Created Successfully</h2>
      <div>Now please continue to the login page</div>
      <Link to={'/login'} className="btn btn-primary rounded-0 mt-5 px-5" style={{ width: 'fit-content' }}>Login</Link>
    </div>
  )
}