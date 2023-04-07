import NavTab from "../Uitility/NavTab"

export default function BuyerTabs({ active }) {
  return (
    <div className='border-bottom bg-white' >
      <div className='container p-0 text-nowrap overflow-auto d-flex'>
        <NavTab label='Profile' destination='/buyer/profile' active={active} />
        <NavTab label='Favorites List' destination='/buyer/favList' active={active} />
        <NavTab label='Cart' destination='/buyer/cart' active={active} />
        <NavTab label='Orders' destination='/buyer/orders' active={active} />
      </div>
    </div>
  )
}

