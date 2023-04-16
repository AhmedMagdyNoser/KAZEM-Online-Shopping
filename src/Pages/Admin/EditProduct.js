import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Fade from '../../Component/Uitility/Fade';
const api = require('../../api');

export default function EditProduct() {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [catId, setCatId] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  const [product, setProduct] = useState({});
  let [categories, setCategories] = useState([]);
  const [updated, setUpdated] = useState(false);

  const params = useParams(); // to get the id of the current product 

  async function getProduct(id) {
    await api.getProduct(id, setProduct);
  }

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  useEffect(() => {
    getAllCategories();
    getProduct(params.id); // get data of the current product when page load
  }, []);

  // the first category is selected automaticaly (if not selected from select menu)
  useEffect(() => {
    categories.length > 0 && setCatId(categories[0].id);
  }, [categories]); // after getting categories from database

  useEffect(() => {
    // after getting the data of the current product:
    // set default values of the states to the data of that product. This is helpful if onChange isn't called.
    setTitle(product.title);
    setDescription(product.description);
    setCatId(product.cat_id);
    setBrand(product.brand);
    setPrice(product.price);
    // it's not allowed to do that with files, the solution is to make (changing image) optional in backend
  }, [product]); // after getting the data of the current product


  async function updateProduct(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("cat_id", catId);
    formData.append("brand", brand);
    formData.append("price", price);
    await api.updateProduct(formData, product, setProduct, setUpdated);
  };

  return (
    <div className="container py-4">
      <form onSubmit={updateProduct} className="d-flex flex-column gap-4">
        {/* Title */}
        <div>
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input onChange={(e) => setTitle(e.target.value)} required defaultValue={product.title} type="text" id="productName" placeholder="Product Name" className="form-control shadow-none rounded-0" />
        </div>
        {/* Image */}
        <div>
          <label htmlFor="formFile" className="form-label">Select a photo for this product (prefered aspect ratio: 1:1)</label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="formFile" className="form-control shadow-none rounded-0" />
        </div>
        {/* Category */}
        <div>
          <label className="form-label">Select Category</label>
          <select onChange={(e) => setCatId(e.target.value)} className="form-select shadow-none rounded-0">
            {categories.map(cate => <option key={cate.id} value={cate.id}>{cate.title}</option>)}
          </select>
        </div>
        {/* Description */}
        <div>
          <label htmlFor="productDescription" className="form-label">Product Description</label>
          <textarea onChange={(e) => setDescription(e.target.value)} required defaultValue={product.description} id="productDescription" placeholder="Product Description" className="form-control shadow-none rounded-0"></textarea>
        </div>
        {/* Brand */}
        <div>
          <label htmlFor="brand" className="form-label">Brand Name</label>
          <input onChange={(e) => setBrand(e.target.value)} required defaultValue={product.brand} type="text" id="brand" placeholder="Brand Name" className="form-control shadow-none rounded-0" />
        </div>
        {/* Price */}
        <div>
          <label htmlFor="price" className="form-label">Price</label>
          <input onChange={(e) => setPrice(e.target.value)} required defaultValue={product.price} type="number" id="price" placeholder="Price" className="form-control shadow-none rounded-0" />
        </div>
        {/* Submit */}
        <input type="submit" value='EDIT PRODUCT' className="btn btn-success w-100 rounded-0" />
      </form>
      {updated && (
        <div className="alert alert-success rounded-0 mt-3">
          <Fade time='0.5s'>
            Product updated successfully!
          </Fade>
        </div>
      )}
    </div>
  )
}