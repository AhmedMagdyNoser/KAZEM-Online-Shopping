import React from 'react'
import UnopDropdown from 'unop-react-dropdown';

export default function ResultSorter({ title }) {

  const handler = () => { }

  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={<b className='text-muted'><i className="fa-solid fa-arrow-down-wide-short me-2"></i>SORT BY</b>}
          delay={0}
          click>
          <div className="list-group shadow-sm" style={{ minWidth: '250px' }}>
            <a href='/' className="list-group-item list-group-item-action">Most Popular</a>
            <a href='/' className="list-group-item list-group-item-action">Top Rated</a>
            <a href='/' className="list-group-item list-group-item-action">High Price to Low Price</a>
            <a href='/' className="list-group-item list-group-item-action">Low Price to High Price</a>
          </div>
        </UnopDropdown>
      </div>
    </div>
  )
}
