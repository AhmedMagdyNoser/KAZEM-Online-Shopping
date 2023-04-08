import NavTab from "../Uitility/NavTab"

export default function AdminTabs({ active }) {
  return (
    <div className='border-bottom bg-white' >
      <div className='container p-0 text-nowrap overflow-auto d-flex'>
        <NavTab label='Products & Categories' destination='/admin/products&categories' active={active} />
        <NavTab label='New Orders' destination='/admin/newOrders' active={active} />
        <NavTab label='All Orders' destination='/admin/allOrders' active={active} />
        <NavTab label='All Buyers' destination='/admin/allUsers' active={active} />
      </div>
    </div>
  )
}