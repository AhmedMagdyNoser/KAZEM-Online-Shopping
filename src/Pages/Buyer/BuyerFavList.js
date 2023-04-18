import { useState, useEffect } from "react";
import BuyerTabs from "../../Component/Buyer/BuyerTabs"
import ProductWideCard from "../../Component/Product/ProductWideCard"
import { getAuthUser } from "../../Services/Storage";
const api = require('../../Services/api');

export default function BuyerFavList() {

  let [items, setItems] = useState([]);

  async function getFav() {
    await api.getFav(getAuthUser().id, setItems);
  }

  async function removeItemFromFav(productId) {
    await api.removeItemFromFav(getAuthUser().id, productId, setItems);
  }

  useEffect(() => {
    getFav();
  }, [])

  return (
    <div>
      <BuyerTabs active='Favorites List' />
      <h3 className='container mb-0 mt-4 py-3 bg-dark text-white text-center text-uppercase'>Your Favorites List</h3>
      <div className="container p-3 l-gray">
        {items.length > 0 ?
          (
            items.map((item) =>
              <ProductWideCard
                key={item.prod_id}
                productId={item.prod_id}
                removeItemFromFav={removeItemFromFav}
              />
            )
          )
          : <h3 className="text-center my-5">No Items In Your Favorites List</h3>}
      </div>
    </div>
  )
}