import BuyerTabs from "../../Component/Buyer/BuyerTabs"
import OrderCard from "../../Component/Uitility/OrderCard";

// This page display all orders of a buyer

export default function BuyerOrders() {

  // For Testing
  let LoggedInUser = { id: 1, firstName: 'Ahmed', lastName: 'Magdy', email: 'ahmed@gmail.com', address: 'Egypt, Cairo' }
  let order1 = { id: 1, status: 'Processing', orderDate: new Date().toDateString(), deliverDate: new Date().toDateString() }
  let order2 = { id: 1, status: 'Delivered', orderDate: new Date().toDateString(), deliverDate: new Date().toDateString() }
  let order1Items = [
    { id: 100, name: 'Mobile', price: 125, quantity: 2 },
    { id: 101, name: 'Tablet', price: 100, quantity: 1 },
    { id: 102, name: 'Labtop', price: 500, quantity: 1 },
  ];

  return (
    <div>
      <BuyerTabs active='Orders' />
      <div className="container d-flex flex-column gap-4 py-3">
        <OrderCard user={LoggedInUser} order={order1} orderItems={order1Items} />
        <OrderCard user={LoggedInUser} order={order2} orderItems={order1Items} />
      </div>
    </div>
  )
}