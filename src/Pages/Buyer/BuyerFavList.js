import BuyerTaps from "../../Component/Buyer/BuyerTaps"
import ProductWideCard from "../../Component/Uitility/ProductWideCard"

export default function BuyerFavList() {
  return (
    <div>
      <BuyerTaps active='Favorite List' />
      <div className="container py-3">
        <ProductWideCard title='Product 1' price='350.00' rating='4.5' description='test sdfoi siol, isfia afisl aidfj lsi' />
      </div>
    </div>
  )
}