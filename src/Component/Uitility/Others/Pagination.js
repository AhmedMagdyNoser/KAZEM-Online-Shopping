import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pagination() {

  const handlePageClick = () => { }

  return (
    <ReactPaginate
      containerClassName={"pagination justify-content-center p-3"}

      breakLabel="..."
      breakClassName={"page-item"}
      breakLinkClassName={"page-link shadow-none"}

      nextLabel="Next"
      nextClassName={"page-item"}
      nextLinkClassName={"page-link shadow-none"}

      previousLabel="Previous"
      previousClassName={"page-item"}
      previousLinkClassName={"page-link shadow-none"}

      pageClassName={"page-item"}
      pageLinkClassName={"page-link shadow-none"}
      activeClassName={'active'}

      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageCount={500}

      onPageChange={handlePageClick}
      renderOnZeroPageCount={null}
    />
  )
}

