import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = () => {

    const handlePageClick = ()=>{

    }

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed = {2}
        pageCount={500}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName = {"pagination justify-content-center p-3"}
        pageClassName ={"page-item"}
        pageLinkClassName = {"page-link"}
        previousClassName = {"page-item"}
        nextClassName = {"page-item"}
        previousLinkClassName = {"page-link"}
        nextLinkClassName = {"page-link"}
        breakClassName ={"page-item"}
        breakLinkClassName ={"page-link"}
        activeClassName ={'active'}
        />
    )
}

export default Pagination
