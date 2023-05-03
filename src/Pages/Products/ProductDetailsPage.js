import ProductsSection from "../../Component/Product/ProductsSection";
import ProductCard from "../../Component/Product/ProductCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthUser } from "../../Services/Storage";
import Fade from "../../Component/Uitility/Fade";
import Rating from "react-rating";
const api = require('../../Services/api');

export default function ProductDetailsPage() {

  let [product, setProduct] = useState({});
  let [category, setCategory] = useState({});
  let [products, setProducts] = useState([]);
  let [addedToCart, setAddedToCart] = useState(false);
  let [addedToFav, setAddedToFav] = useState(false);
  let [loggedIn, setloggedIn] = useState(true); // suppose
  let [userProdRating, setUserProdRating] = useState(false);
  let [productRating, setProductRating] = useState(0);

  const params = useParams(); // it's the parameters in the current url '/product/:id' the only param is the id

  async function getProduct(id) {
    await api.getProduct(id, setProduct);
  }

  async function getCategory(id) {
    await api.getCategory(id, setCategory);
  }

  async function getProductRating(id) {
    await api.getProductRating(id, setProductRating);
  }

  async function rateProduct(rate) {
    if (getAuthUser()) {
      if (userProdRating.rated)
        await api.updateRating(getAuthUser().id, product.id, rate);
      else
        await api.rateProduct(getAuthUser().id, product.id, rate);
    } else {
      setloggedIn(false);
    }
  }

  async function deleteRating() {
    if (getAuthUser()) {
      setUserProdRating({ rated: false, rate: 0 });
      await api.deleteRating(getAuthUser().id, product.id);
    } else {
      setloggedIn(false);
    }
  }

  async function checkIfRated() {
    getAuthUser() &&
      await api.checkIfRated(getAuthUser().id, product.id, setUserProdRating);
  }

  async function checkIfInCart(userId, prodId) {
    await api.checkIfInCart(userId, prodId, setAddedToCart);
  }

  async function checkIfInFav(userId, prodId) {
    await api.checkIfInFav(userId, prodId, setAddedToFav);
  }

  async function getProductsOfCategory(id) {
    await api.getProductsOfCategory(id, setProducts);
  }

  // get the product details onload
  useEffect(() => {
    getProduct(params.id);
    getAuthUser() && checkIfInCart(getAuthUser().id, params.id);
    getAuthUser() && checkIfInFav(getAuthUser().id, params.id);
  }, [params.id])

  // get the product category details & rating after getting data of product
  useEffect(() => {
    product.cat_id && getCategory(product.cat_id);
    getProductRating(product.id);
    checkIfRated();
  }, [product])

  // get the other products of the same category after getting data of the category
  useEffect(() => {
    category.id && getProductsOfCategory(category.id);
  }, [category])

  async function addToCart() {
    if (getAuthUser()) {
      let formData = new FormData();
      formData.append('prod_id', params.id);
      formData.append('user_id', getAuthUser().id);
      formData.append('quantity', 1);
      await api.addToCart(formData, setAddedToCart);
    } else {
      setloggedIn(false);
    }
  }

  async function addToFav() {
    if (getAuthUser()) {
      let formData = new FormData();
      formData.append('prod_id', params.id);
      formData.append('user_id', getAuthUser().id);
      await api.addToFav(formData, setAddedToFav);
    } else {
      setloggedIn(false);
    }
  }

  return (
    <div className="container d-flex flex-column gap-4 py-4">

      <div className="container border-bottom bg-white py-3">
        <div className="row">
          <div className="col-md-5">
            <img src={product.image} className="img-fluid" alt={product.title} />
          </div>
          <div className="col-md-7">
            <span className="text-muted">{category.title}</span>
            <p className="fw-bold">
              {product.title}
              <span className="fw-bold text-warning ms-2">{productRating} <i className="fa-solid fa-star"></i></span>
            </p>

            <p className="text-muted">Brand: <span className="fw-bold text-dark">{product.brand}</span></p>
            <p className="text-muted">Price: <span className="fw-bold text-dark">{product.price}<small>$</small></span></p>
            <p className="text-muted mb-1">Specifications: </p>
            <small>{product.description}</small>


            {
              getAuthUser() && getAuthUser().type === 0 ?
                <>
                  {/* Buttons */}
                  <div className='mt-4 d-flex gap-3 flex-wrap'>

                    <div>
                      {!addedToCart ? (
                        <button className="btn btn-primary px-4 rounded-0 d-inline" onClick={addToCart}>
                          <i className="fa-solid fa-cart-shopping"></i> Add To Cart
                        </button>
                      ) :
                        <button className="btn btn-primary px-4 rounded-0 d-inline disabled">
                          <i className="fa-solid fa-check"></i> Added To Cart
                        </button>}
                    </div>

                    <div>
                      {!addedToFav ? (
                        <button className="btn btn-danger px-4 rounded-0 d-inline" onClick={addToFav}>
                          <i className="fa-solid fa-heart"></i> Add To Favourites
                        </button>
                      ) :
                        <button className="btn btn-danger px-4 rounded-0 d-inline disabled">
                          <i className="fa-solid fa-check"></i> Added To Favourites
                        </button>}
                    </div>

                  </div>

                  {/* Rating */}
                  <div className='l-gray p-3 mt-3 d-flex justify-content-between align-items-center border-start'>
                    <div>
                      <span className="me-2">Rate this product:</span>
                      <Rating
                        initialRating={userProdRating.rated ? userProdRating.rate : 0}
                        emptySymbol="fa-regular fa-star text-secondary"
                        fullSymbol="fa-solid fa-star text-warning"
                        onChange={(rate) => rateProduct(rate)}
                      />
                    </div>
                    <button className="btn btn-danger btn-sm rounded-0" onClick={deleteRating}>Delete Rate</button>
                  </div>

                  {!loggedIn && (
                    <div className="alert alert-warning rounded-0 mt-3">
                      <Fade time='0.5s'>
                        Please Login First!
                      </Fade>
                    </div>
                  )}
                </>
                : null
            }

          </div>
        </div>
      </div>

      <ProductsSection category={category} >
        {products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </ProductsSection>

    </div>
  )
}