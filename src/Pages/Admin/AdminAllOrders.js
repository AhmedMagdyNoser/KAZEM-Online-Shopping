import { useState, useEffect} from "react";
import AdminTabs from "../../Component/Admin/AdminTabs";
import OrderCard from "../../Component/Uitility/OrderCard";
const api = require('../../Services/api');

// This page display all orders for all users

export default function AdminAllOrders() {

  let [orders, setOrders] = useState([]);

  async function getAllOrders() {
    await api.getAllOrders(setOrders)
  }

  useEffect(() => {
    getAllOrders();
  }, [])

  return (
    <div>
      <AdminTabs active='All Orders' />
      <div className="container d-flex flex-column gap-4 py-3">
        {orders.length > 0 ?
          orders.map((order) => <OrderCard key={order.id} order={order} />)
          :
          <h2 className="text-center py-5 l-gray">No Orders</h2>
        }
      </div>
    </div>
  )
}