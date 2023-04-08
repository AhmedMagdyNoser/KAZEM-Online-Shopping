import { Link } from "react-router-dom";
import AdminTabs from "../../Component/Admin/AdminTabs";
import UserDataCard from "../../Component/Uitility/UserDataCard";

export default function AdminAllUsers() {

  const Users = [
    { id: 1, firstName: "Karimzz", lastName: "Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
    { id: 2, firstName: "Ahmed", lastName: "Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: true, active: true },
    { id: 3, firstName: "Mahmoud", lastName: "Meshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: false },
    { id: 4, firstName: "Ziad", lastName: "Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
    { id: 5, firstName: "Karimzz", lastName: "Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
    { id: 6, firstName: "Ahmed", lastName: "Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: true, active: true },
    { id: 7, firstName: "Mahmoud", lastName: "Meshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: false },
    { id: 8, firstName: "Ziad", lastName: "Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
  ]

  return (
    <div>
      <AdminTabs active='All Buyers' />
      <div className="container d-flex flex-column gap-4 py-4">

        <h3 className='py-3 m-0 bg-dark text-white text-center text-uppercase'>All Kazem Users</h3>

        <Link to={'/admin/addNewUser'} className="btn btn-success rounded-0 w-100">
          <i className='fa-solid fa-add me-2'></i>
          Add New User
        </Link>

        <div className="kazem-grid">
          {Users.map((user) =>
            <UserDataCard key={user.id} user={user} />
          )}
        </div>

      </div>
    </div>
  )
}