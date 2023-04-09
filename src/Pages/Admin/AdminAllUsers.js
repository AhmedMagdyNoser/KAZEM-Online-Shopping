import { Link } from "react-router-dom";
import AdminTabs from "../../Component/Admin/AdminTabs";
import UserDataCard from "../../Component/Uitility/UserDataCard";

// testing data
import { useSelector } from 'react-redux';

export default function AdminAllUsers() {

  // We must fetch data of all users from api but for testing we get them from redux
  let users = useSelector(state => state.users)

  return (
    <div>
      <AdminTabs active='All Users' />
      <div className="container d-flex flex-column gap-4 py-4">

        <h3 className='py-3 m-0 bg-dark text-white text-center text-uppercase'>All Kazem Users</h3>

        <Link to={'/admin/addNewUser'} className="btn btn-success rounded-0 w-100">
          <i className='fa-solid fa-add me-2'></i>
          Add New User
        </Link>

        <div className="kazem-grid">
          {users.map((user) =>
            <UserDataCard key={user.id} user={user} />
          )}
        </div>

      </div>
    </div>
  )
}