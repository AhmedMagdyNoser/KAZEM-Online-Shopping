import { useState, useEffect } from "react";
import AdminTabs from "../../Component/Admin/AdminTabs";
import OrderCard from "../../Component/Uitility/OrderCard";
const api = require('../../Services/api');

// This page display only the processing orders
// So the admin can accept or decline orders

export default function AdminNewOrders() {

  let [orders, setOrders] = useState([]);

  async function getProccessingOrders() {
    await api.getProccessingOrders(setOrders);
  }

  async function deleteOrder(id) {
    await api.deleteOrder(id, setOrders)
  }

  useEffect(() => {
    getProccessingOrders();
  }, [])

  return (
    <div>
      <AdminTabs active='New Orders' />
      <div className="container d-flex flex-column gap-4 py-3">
        {orders.length > 0 ?
          orders.map((order) => <OrderCard key={order.id} order={order} deleteOrder={deleteOrder} />)
          :
          <h2 className="text-center py-5 l-gray">No Orders</h2>
        }
      </div>
    </div>
  )
}