import React from 'react'
import { Pagination } from 'react-bootstrap';
import BrandContainer from '../../Component/Brand/BrandContainer';

const AllBrandPage = () => {
  return (
    <div style={{minHeight : "670px"}}>
            <BrandContainer />
            <Pagination />
        </div>
  )
}

export default AllBrandPage;
