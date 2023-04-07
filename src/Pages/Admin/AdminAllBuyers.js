import AdminTabs from "../../Component/Admin/AdminTabs";
import UserDataCard from "../../Component/Uitility/UserDataCard";

export default function AdminAllBuyers() {

  const Buyers = [
    { id: 1, name: "Karimzz Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo" },
    { id: 2, name: "Ahmed Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo" },
    { id: 3, name: "Mahmoud Mshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo" },
    { id: 4, name: "Ziad Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo" },
    { id: 5, name: "Karimzz Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo" },
    { id: 6, name: "Ahmed Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo" },
    { id: 7, name: "Mahmoud Mshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo" },
    { id: 8, name: "Ziad Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo" },
  ]

  return (
    <div>
      <AdminTabs active='All Buyers' />
      <h3 className='container my-4 py-3 bg-dark text-white text-center text-uppercase'>All Kazem Users</h3>
      <div className="container kazem-grid pb-4">
        {Buyers.map((user) =>
          <UserDataCard key={user.id} name={user.name} email={user.email} phone={user.phone} address={user.address} />
        )}
      </div>
    </div>
  )
}