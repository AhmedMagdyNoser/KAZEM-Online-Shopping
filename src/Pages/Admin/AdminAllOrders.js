import AdminTabs from "../../Component/Admin/AdminTabs";
import OrderCard from "../../Component/Uitility/OrderCard";

// This page display all orders for all users

export default function AdminAllOrders() {

  // For Testing
  let user1 = { id: 1, firstName: 'Ahmed', lastName: 'Magdy', email: 'ahmed@gmail.com', address: 'Egypt, Cairo' }
  let order1 = { id: 1, status: 'Processing', orderDate: new Date().toDateString(), deliverDate: new Date().toDateString() }
  let order2 = { id: 1, status: 'Delivered', orderDate: new Date().toDateString(), deliverDate: new Date().toDateString() }
  let order1Items = [
    { id: 100, name: 'Mobile', price: 125, quantity: 2 },
    { id: 101, name: 'Tablet', price: 100, quantity: 1 },
    { id: 102, name: 'Labtop', price: 500, quantity: 1 },
  ];

  return (
    <div>
      <AdminTabs active='All Orders' />
      <div className="container d-flex flex-column gap-4 py-3">
        <OrderCard user={user1} order={order1} orderItems={order1Items} admin />
        <OrderCard user={user1} order={order2} orderItems={order1Items} admin />
        <OrderCard user={user1} order={order2} orderItems={order1Items} admin />
        <OrderCard user={user1} order={order2} orderItems={order1Items} admin />
      </div>
    </div>
  )
}