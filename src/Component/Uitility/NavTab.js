import { Link } from 'react-router-dom';

export default function NavTab({ label, destination, active }) {
  return (
    <Link
      className={(active === label ? 'active' : null) + ' flex-fill text-center btn btn-outline-primary border-0 rounded-0 py-2'}
      style={{ fontWeight: '500'}}
      to={destination}
    >
      {label}
    </Link>
  )
}