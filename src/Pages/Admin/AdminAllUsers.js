import AdminTabs from "../../Component/Admin/AdminTabs";
import UserDataCard from "../../Component/Uitility/UserDataCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../Services/Storage";
const api = require('../../Services/api');

export default function AdminAllUsers() {

  let [users, setUsers] = useState([]);

  async function getAllUsers() {
    await api.getAllUsers(setUsers, getAuthUser().token);
  }

  async function deleteUser(id) {
    await api.deleteUser(id, getAuthUser().token, users, setUsers);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

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
            <UserDataCard key={user.id} user={user} deleteUser={deleteUser} />
          )}
        </div>

      </div>
    </div>
  )
}