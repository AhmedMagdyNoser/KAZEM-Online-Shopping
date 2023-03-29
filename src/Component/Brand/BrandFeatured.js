import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"
import SubTitle from '../Uitility/SubTitle'

const BrandFeatured = () => {
    return (
        <Container>
            <SubTitle title = "Category" btnTitle="More" pathText="/allbrand" />
            <Row className="my-2 d-flex  justify-content-between">
            <BrandCard img={brand1} background="#F4DBA5" title="اجهزة منزلية" />
            <BrandCard img={brand2} background="#F4DBA5" title="اجهزة منزلية" />
            <BrandCard img={brand3} background="#F4DBA5" title="اجهزة منزلية" />
            <BrandCard img={brand2} background="#F4DBA5" title="اجهزة منزلية" />
            <BrandCard img={brand1} background="#F4DBA5" title="اجهزة منزلية" />
            <BrandCard img={brand3} background="#F4DBA5" title="اجهزة منزلية" />
            
      </Row>
        </Container>
    )
}

export default BrandFeatured
