import Fade from '../../Component/Uitility/Fade';
import AdminTabs from '../../Component/Admin/AdminTabs';
import { useState, useEffect } from 'react';
const api = require('../../api');

export default function AddNewProduct() {

  let [categories, setCategories] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [catId, setCatId] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [image, setImage] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  async function createNewProduct(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("cat_id", catId);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("image", image);
    await api.createNewProduct(formData, setIsCreated);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  // the first category is selected automaticaly (if not selected from select menu)
  useEffect(() => {
    categories.length > 0 && setCatId(categories[0].id);
  }, [categories]);

  return (
    <div>
      <AdminTabs active='Products & Categories' />
      <div className="container py-4">
        <form onSubmit={createNewProduct} className="d-flex flex-column gap-4">
          {/* Title */}
          <div>
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input onChange={(e) => setTitle(e.target.value)} required type="text" id="productName" placeholder="Product Name" className="form-control shadow-none rounded-0" />
          </div>
          {/* Image */}
          <div>
            <label htmlFor="formFile" className="form-label">Select a photo for this product (prefered aspect ratio: 1:1)</label>
            <input onChange={(e) => setImage(e.target.files[0])} required type="file" id="formFile" className="form-control shadow-none rounded-0" />
          </div>
          {/* Category */}
          <div>
            <label className="form-label">Select Category</label>
            <select onChange={(e) => setCatId(e.target.value)} required className="form-select shadow-none rounded-0">
              {categories.map(cate => <option key={cate.id} value={cate.id}>{cate.title}</option>)}
            </select>
          </div>
          {/* Description */}
          <div>
            <label htmlFor="productDescription" className="form-label">Product Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} required id="productDescription" placeholder="Product Description" className="form-control shadow-none rounded-0"></textarea>
          </div>
          {/* Brand */}
          <div>
            <label htmlFor="brand" className="form-label">Brand Name</label>
            <input onChange={(e) => setBrand(e.target.value)} required type="text" id="brand" placeholder="Brand Name" className="form-control shadow-none rounded-0" />
          </div>
          {/* Price */}
          <div>
            <label htmlFor="price" className="form-label">Price</label>
            <input onChange={(e) => setPrice(e.target.value)} required type="number" id="price" placeholder="Price" className="form-control shadow-none rounded-0" />
          </div>
          {/* Submit */}
          <input type="submit" value='ADD PRODUCT' className="btn btn-success w-100 rounded-0" />
        </form>
        {/* Success Animation */}
        {isCreated && (
          <div className="alert alert-success rounded-0 mt-3">
            <Fade time='0.5s'>
              Product added successfully!
            </Fade>
          </div>
        )}
      </div>
    </div>
  )
}