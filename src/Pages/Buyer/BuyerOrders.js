import { useState } from "react";
import BuyerTabs from "../../Component/Buyer/BuyerTabs"
import OrderCard from "../../Component/Uitility/OrderCard";
import { getAuthUser } from "../../Services/Storage";
import { useEffect } from "react";
const api = require('../../Services/api');
// This page display all orders of a buyer

export default function BuyerOrders() {

  let [orders, setOrders] = useState([]);

  async function getAllOrdersOfUser() {
    await api.getAllOrdersOfUser(getAuthUser().id, setOrders)
  }

  async function deleteOrder(id) {
    await api.deleteOrder(id, setOrders)
  }

  useEffect(() => {
    getAllOrdersOfUser();
  }, [])

  return (
    <div>
      <BuyerTabs active='Orders' />
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