import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";


const CaregoryContainer = () => {
    return (
        <Container>
            <div className='admin-content-text my-3'>All Category</div>
            <Row className="my-2 d-flex  justify-content-between">
                <CategoryCard img={clothe} background="#F4DBA5" />
                <CategoryCard img={cat2} background="#0034FF" />
                <CategoryCard img={labtop} background="#FFD3E8" />
                <CategoryCard img={clothe} background="#55CFDF" />
                <CategoryCard img={sale} background="#FF6262" />
                <CategoryCard img={pic} background="#F4DBA5" />
            </Row>
        </Container>
    )
}

export default CaregoryContainer
