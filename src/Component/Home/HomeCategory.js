import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Uitility/SubTitle'
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const HomeCategory = () => {
    return (
        <Container>
            <SubTitle title = "Category" btntitle="More" pathText="/allcategory" />
            <Row className="my-2 d-flex  justify-content-between">
            <CategoryCard img={clothe} background="#F4DBA5" title="اجهزة منزلية" />
            <CategoryCard img={cat2} background="#0034FF" title="اجهزة منزلية" />
            <CategoryCard img={labtop} background="#FFD3E8" title="اجهزة منزلية" />
            <CategoryCard img={clothe} background="#55CFDF" title="اجهزة منزلية" />
            <CategoryCard img={sale} background="#FF6262" title="اجهزة منزلية" />
            <CategoryCard img={pic} background="#F4DBA5"  />
      </Row>
        </Container>
    )
}

export default HomeCategory
