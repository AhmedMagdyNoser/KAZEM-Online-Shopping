import React from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import CategoryHeader from '../../Component/Category/CategoryHeader'
import CardProductContainer from '../../Component/Product/CardProductContainer'
import SearchCountResult from '../../Component/Uitility/SearchCountResult'
import SideFilter from '../../Component/Uitility/SideFilter'

const ShopProductPage = () => {
  return (
    <div style={{minHeight : "670px"}}>
      <CategoryHeader title= "400 منتج" />

      <Container>
        {/* <SearchCountResult title="400 منتج بحث "></SearchCountResult> */}
        <Row>
          <Col sm ={3}  className='d-flex'>
            <SideFilter />
          </Col>
          <Col sm ="10" xs="10" md="11">
            <CardProductContainer  title="" btntitle={""}/>
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  )
}

export default ShopProductPage
