import React from 'react'
import CaregoryContainer from '../../Component/Category/CaregoryContainer'
import Pagination from '../../Component/Uitility/Pagination'

const AllCategoryPage = () => {
    return (
        <div style={{minHeight : "670px"}}>
            <CaregoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
