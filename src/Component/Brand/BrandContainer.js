import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard';
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";

const BrandContainer = () => {
  return (
    <Container>
            <div className='admin-content-text my-3'>All Brand </div>
            <Row className="my-2 d-flex  justify-content-between">
                <BrandCard img={brand1} background="#F4DBA5" />
                <BrandCard img={brand2} background="#F4DBA5" />
                <BrandCard img={brand3} background="#F4DBA5" />
                <BrandCard img={brand1} background="#F4DBA5" />
                
            </Row>
        </Container>
  )
}

export default BrandContainer
