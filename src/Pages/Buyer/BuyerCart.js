import { Link } from "react-router-dom"
import BuyerTabs from "../../Component/Buyer/BuyerTabs"
import ProductWideCard from "../../Component/Product/ProductWideCard"
import { getAuthUser } from "../../Services/Storage";
import { useState } from "react";
import { useEffect } from "react";
const api = require('../../Services/api');

export default function BuyerCart() {

  let [items, setItems] = useState([]);
  let [totalCost, setTotalCost] = useState(0);

  async function getCart() {
    await api.getCart(getAuthUser().id, setItems);
  }

  async function cartTotalCost() {
    await api.cartTotalCost(getAuthUser().id, setTotalCost);
  }

  async function removeItemFromCart(productId) {
    await api.removeItemFromCart(getAuthUser().id, productId, setItems);
  }

  useEffect(() => {
    getCart();
    cartTotalCost();
  }, [])

  return (
    <div>
      <BuyerTabs active='Cart' />
      <h3 className='container mb-0 mt-4 py-3 bg-dark text-white text-center text-uppercase'>Your Shopping Cart</h3>
      <div className="container p-3 l-gray">
        {items.length > 0 ?
          (<>
            {items.map((item) =>
              <ProductWideCard
                key={item.prod_id}
                productId={item.prod_id}
                quantity={item.quantity}
                removeItemFromCart={removeItemFromCart}
                cartTotalCost={cartTotalCost}
              />
            )}
            <div className="container text-center bg-white py-3 mb-3 border-top border-bottom">
              <span className="fs-4">Total: <b>{totalCost}$</b></span>
            </div>
            <div className="container p-0 mb-4">
              <Link to="/buyer/checkout" style={{ textDecoration: "none" }}>
                <button className="btn btn-primary rounded-0 w-100">Buy Now</button>
              </Link>
            </div>
          </>)
          : <h3 className="text-center my-5">No Items In Your Cart</h3>}
      </div>
    </div>
  )
}