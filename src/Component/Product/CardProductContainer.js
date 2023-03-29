import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Uitility/SubTitle'
import ProductCard from './ProductCard'

const CardProductContainer = ({ title, btntitle , pathText }) => {
    return (
        <Container>
        <SubTitle title={title} btnTitle={btntitle}  pathText = {pathText} />
        <Row className="justify-content-between ">
            <ProductCard title="1"  />
            <ProductCard title="2" />
            <ProductCard title="3"  />
            <ProductCard title="4"  />
            
        </Row>
      </Container>
    )
}

export default CardProductContainer
