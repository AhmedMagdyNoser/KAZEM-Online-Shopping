import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import Img from "./../../Images/mobile1.png"
import ProductsSection from "../../Component/Product/ProductsSection";
import ProductCard from "../../Component/Product/ProductCard";
let testDescription = 'Canon is proud of its long and unwavering tradition of protecting and preserving our most precious of resources - the world we share. We work to harmonize environmental commitment and economic interests in all our business activities. We believe this balance is essential to sustain prosperity for future generations. Create detailed DSLR quality pictures and cinematic Full HD movies with ease, even in difficult low light situations, using the 24.1 Megapixel EOS 4000D. Share instantly and shoot remotely with Wi-Fi, NFC and Canon Camera Connect app.Step up to a 24.1 Megapixel sensor that has up to 19x more surface area than many smartphones to capture stories with beautiful background blur, even in tricky light.Enjoy guided Live View shooting with Creative Auto mode and add unique finishes with Creative Filters. Just point and shoot for great results with Scene Intelligent Auto.Turn spontaneous moments into creative films in Full HD, or use Video Snapshot to simply capture highlights of your day.Capture the moment just as you remember with precise Auto Focus, 3.0 fps and DIGIC 4+.';

export default function ProductDetailsPage() {

  const params = useParams(); // it's the parameters in the current url '/product/:id' the only param is the id

  // We must fetch data from api using the parameter (id) but for testing we use redux
  let categories = useSelector(state => state.categories);
  let products = useSelector(state => state.products);
  let currentProduct = {};
  products.forEach(product => {
    if (product.id === parseInt(params.id)) {
      currentProduct = product;
    }
  })

  return (
    <div className="container d-flex flex-column gap-4 py-4">

      <div className="container border-bottom bg-white py-3">
        <div className="row">
          <div className="col-md-5">
            <img src={Img} className="img-fluid" alt='Img' />
          </div>
          <div className="col-md-7">
            <span className="text-muted">{currentProduct.categoryId} Electronics</span> {/* A Problem */}
            <p className="fw-bold">
              {currentProduct.title}
              <span className="fw-bold text-warning ms-2">{currentProduct.rating} <i className="fa-solid fa-star"></i></span>
            </p>
            <p className="text-muted">Brand: <span className="fw-bold text-dark">{currentProduct.brand}</span></p>
            <p className="text-muted">Price: <span className="fw-bold text-dark">{currentProduct.price}<small>$</small></span></p>
            <p className="text-muted mb-1">Specifications: </p>
            <small>{currentProduct.description} + {testDescription}</small>
            <div className='mt-4 d-flex gap-3 flex-wrap'>
              <div className="btn btn-primary px-4 rounded-0 d-inline"><i className="fa-solid fa-cart-shopping"></i> Add To Cart</div>
              <div className="btn btn-danger px-4 rounded-0 d-inline"><i className="fa-solid fa-heart"></i>  Add To Favourite</div>
            </div>
          </div>
        </div>
      </div>

      {/* Need Editing to the category of the current product */}
      <ProductsSection category={categories[1]} >
        {products.map(product =>
          product.categoryId === categories[1].id ? <ProductCard key={product.id} product={product} /> : null
        )}
      </ProductsSection>

    </div>
  )
}