import Fade from '../../Component/Uitility/Fade';
import AdminTabs from '../../Component/Admin/AdminTabs';
import { useEffect, useState } from 'react';
const api = require('../../Services/api');

export default function AddNewProduct() {

  const [categories, setCategories] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  async function createNewProduct(event) {
    event.preventDefault();
    await api.createNewProduct(new FormData(event.target), setIsCreated);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <AdminTabs active='Products & Categories' />
      <div className="container py-4">
        <form onSubmit={createNewProduct} className="d-flex flex-column gap-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="form-label">Product Name</label>
            <input name="title" required type="text" id="title" placeholder="Product Name" className="form-control shadow-none rounded-0" />
          </div>
          {/* Image */}
          <div>
            <label htmlFor="image" className="form-label">Select a photo for this product (prefered aspect ratio: 1:1)</label>
            <input name="image" required type="file" id="image" className="form-control shadow-none rounded-0" />
          </div>
          {/* Category */}
          <div>
            <label className="form-label">Select Category</label>
            <select name="cat_id" required className="form-select shadow-none rounded-0">
              {categories.map(cate => <option key={cate.id} value={cate.id}>{cate.title}</option>)}
            </select>
          </div>
          {/* Description */}
          <div>
            <label htmlFor="description" className="form-label">Product Description</label>
            <textarea name="description" required id="description" placeholder="Product Description" className="form-control shadow-none rounded-0"></textarea>
          </div>
          {/* Brand */}
          <div>
            <label htmlFor="brand" className="form-label">Brand Name</label>
            <input name="brand" required type="text" id="brand" placeholder="Brand Name" className="form-control shadow-none rounded-0" />
          </div>
          {/* Price */}
          <div>
            <label htmlFor="price" className="form-label">Price</label>
            <input name="price" required type="number" id="price" placeholder="Price" className="form-control shadow-none rounded-0" />
          </div>
          {/* Submit */}
          <input type="submit" value='ADD PRODUCT' className="btn btn-success w-100 rounded-0" />
        </form>
        {/* Success Animation */}
        {isCreated && (
          <div className="alert alert-success rounded-0 mt-3">
            <Fade time='0.5s'>
              Product Added Successfully!
            </Fade>
          </div>
        )}
      </div>
    </div>
  )
}