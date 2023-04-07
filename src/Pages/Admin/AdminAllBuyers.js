import AdminTabs from "../../Component/Admin/AdminTabs";
import UserDataCard from "../../Component/Uitility/UserDataCard";

export default function AdminAllBuyers() {

  const Buyers = [
    { name: "Karimzz Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo" },
    { name: "Ahmed Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo" },
    { name: "Mahmoud Mshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo" },
    { name: "Ziad Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo" },
    { name: "Karimzz Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo" },
    { name: "Ahmed Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo" },
    { name: "Mahmoud Mshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo" },
    { name: "Ziad Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo" },
  ]

  return (
    <div>
      <AdminTabs active='All Buyers' />
      <h3 className='container my-4 py-3 bg-dark text-white text-center text-uppercase'>All Kazem Users</h3>
      <div className="container kazem-grid pb-4">
        {Buyers.map((item) =>
          <UserDataCard name={item.name} email={item.email} phone={item.phone} address={item.address} />
        )}
      </div>
    </div>
  )
}