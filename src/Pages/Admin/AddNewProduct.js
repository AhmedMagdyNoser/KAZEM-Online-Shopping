import { useSelector } from 'react-redux';

export default function AddNewProduct() {

  // We must fetch data from api using the parameter (id) but for testing we use redux
  let categories = useSelector(state => state.categories);

  return (
    <div className="container py-4">
      <form className="d-flex flex-column gap-4">
        {/* Title */}
        <div>
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input required type="text" id="productName" placeholder="Product Name" className="form-control shadow-none rounded-0" />
        </div>
        {/* Image */}
        <div>
          <label htmlFor="formFile" className="form-label">Select a photo for this product (prefered aspect ratio: 1:1)</label>
          <input required type="file" id="formFile" className="form-control shadow-none rounded-0" />
        </div>
        {/* Category */}
        <div>
          <label className="form-label">Select Category</label>
          <select class="form-select shadow-none rounded-0">
          {categories.map(cate => <option key={cate.id} value={cate.id}>{cate.title}</option>)}
          </select>
        </div>
        {/* Description */}
        <div>
          <label htmlFor="productDescription" className="form-label">Product Description</label>
          <textarea required id="productDescription" placeholder="Product Description" className="form-control shadow-none rounded-0"></textarea>
        </div>
        {/* Brand */}
        <div>
          <label htmlFor="brand" className="form-label">Brand Name</label>
          <input required type="text" id="brand" placeholder="Brand Name" className="form-control shadow-none rounded-0" />
        </div>
        {/* Price */}
        <div>
          <label htmlFor="price" className="form-label">Price</label>
          <input required type="number" id="price" placeholder="Price" className="form-control shadow-none rounded-0" />
        </div>
        {/* Submit */}
        <input type="submit" value='ADD PRODUCT' className="btn btn-success w-100 rounded-0" />
      </form>
    </div>
  )
}