import { Link } from 'react-router-dom';

export default function BuyerTaps({ active }) {
  return (
    <div className='border-bottom bg-white' >
      <div className='container d-flex justify-content-around'>
        <BuyerLink label='Profile' destination='/buyer/profile' active={active} />
        <BuyerLink label='Favorite List' destination='/buyer/favList' active={active} />
        <BuyerLink label='Cart' destination='/buyer/cart' active={active} />
        <BuyerLink label='Orders' destination='/buyer/orders' active={active} />
      </div>
    </div>
  )
}

function BuyerLink({ label, destination, active }) {
  return (
    <Link
      className={(active === label ? 'active' : null) + ' flex-fill text-center btn btn-outline-primary border-0 rounded-0 fw-bold py-2'}
      to={destination}
    >
      {label}
    </Link>
  )
}