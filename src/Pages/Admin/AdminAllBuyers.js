import AdminTabs from "../../Component/Admin/AdminTabs";
import UserDataCard from "../../Component/Uitility/UserDataCard";

export default function AdminAllBuyers() {

  const Buyers = [
    {
      name: "Karimzz",
      email: "Karimzz@gmail.com",
      phone: "12345",
      address: "Cairo"
    },
    {
      name: "Ahmed",
      email: "Ahmed@gmail.com",
      phone: '243434',
      address: "Zagaizg"
    },
    {
      name: "Mshref",
      email: "Mshref@gmail.com",
      phone: "232133",
      address: "London"
    },
    {
      name: "Ziad",
      email: "Ziad@gmail.com",
      phone: "43432432",
      address: "Alex"
    },
    {
      name: "Mohamed",
      email: "Mohamed@gmail.com",
      phone: "23232",
      address: "US"
    }
  ]
  return (
    <div>
      <AdminTabs active='All Buyers' />
      <div className="container kazem-grid py-4">
        {Buyers.map((item) =>
          <UserDataCard name={item.name} email={item.email} phone={item.phone} address={item.address} />
        )}
      </div>
    </div>
  )
}