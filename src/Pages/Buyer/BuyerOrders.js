import BuyerTabs from "../../Component/Buyer/BuyerTabs"

export default function BuyerOrders() {
  return (
    <div>
      <BuyerTabs active='Orders' />
      <div className="container">
        Orders
      </div>
    </div>
  )
}