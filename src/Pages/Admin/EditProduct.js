import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Fade from '../../Component/Uitility/Fade';
const api = require('../../api');

export default function EditProduct() {

  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [updated, setUpdated] = useState(false);

  const params = useParams(); // to get the id of the current product 

  async function getProduct() {
    await api.getProduct(params.id, setProduct);
  }

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  useEffect(() => {
    getAllCategories();
    getProduct(); // get data when page load
  }, []);

  async function updateProduct(event) {
    event.preventDefault();
    await api.updateProduct(product.id, new FormData(event.target), setUpdated);
  };

  return (
    <div className="container py-4">
      <form onSubmit={updateProduct} className="d-flex flex-column gap-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="form-label">Product Name</label>
          <input name="title" defaultValue={product.title} type="text" id="title" placeholder="Product Name" className="form-control shadow-none rounded-0" />
        </div>
        {/* Image */}
        <div>
          <label htmlFor="image" className="form-label">Select a photo for this product (prefered aspect ratio: 1:1)</label>
          <input name="image" type="file" id="image" className="form-control shadow-none rounded-0" />
        </div>
        {/* Category */}
        <div>
          <label className="form-label">Select Category</label>
          {(categories.length > 0 && product.cat_id) && (
            <select name="cat_id" className="form-select shadow-none rounded-0" defaultValue={product.cat_id}>
              {categories.map(cate => <option key={cate.id} value={cate.id}>{cate.title}</option>)}
            </select>
          )}
        </div>
        {/* Description */}
        <div>
          <label htmlFor="description" className="form-label">Product Description</label>
          <textarea name="description" defaultValue={product.description} id="description" placeholder="Product Description" className="form-control shadow-none rounded-0"></textarea>
        </div>
        {/* Brand */}
        <div>
          <label htmlFor="brand" className="form-label">Brand Name</label>
          <input name="brand" defaultValue={product.brand} type="text" id="brand" placeholder="Brand Name" className="form-control shadow-none rounded-0" />
        </div>
        {/* Price */}
        <div>
          <label htmlFor="price" className="form-label">Price</label>
          <input name="price" defaultValue={product.price} type="number" id="price" placeholder="Price" className="form-control shadow-none rounded-0" />
        </div>
        {/* Submit */}
        <input type="submit" value='EDIT PRODUCT' className="btn btn-success w-100 rounded-0" />

        {/* Success */}
        {updated && (
          <div className="alert alert-success rounded-0">
            <Fade time='0.5s'>
              Product Updated Successfully!
            </Fade>
          </div>
        )}
        
      </form>
    </div>
  )
}