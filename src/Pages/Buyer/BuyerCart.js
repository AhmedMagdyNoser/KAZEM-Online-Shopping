import BuyerTaps from "../../Component/Buyer/BuyerTaps"
import ProductWideCard from "../../Component/Uitility/ProductWideCard"

export default function BuyerCart() {
  return (
    <div>
      <BuyerTaps active='Cart' />
      <h3 className='container my-4 py-3 bg-dark text-white text-center text-uppercase'>Your Shopping Cart</h3>
      <div className="container px-0 pb-3">
        <ProductWideCard
          title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB"
          price='350'
          quantity='1'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <ProductWideCard
          title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB"
          price='350'
          quantity='1'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <ProductWideCard
          title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB"
          price='350'
          quantity='1'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <ProductWideCard
          title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB"
          price='350'
          quantity='1'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </div>
      <div className="container text-center bg-white py-4 mb-4 border-top border-bottom">
        <h5>Subtotal: <b>1000</b>$</h5>
        <button className="btn btn-primary rounded-0 w-50">Proceed to Buy</button>
      </div>
    </div>
  )
}