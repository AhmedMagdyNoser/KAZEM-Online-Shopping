export default function AddNewProduct() {
  return (
    <div className="container py-4">
      <form className="d-flex flex-column gap-4">
        {/* Name */}
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
          <select class="form-select shadow-none">
            <option value="1" selected>Electronics</option>
            <option value="2">Moblies & Accessories</option>
            <option value="3">Men's Fashion</option>
            <option value="4">Women's Fashion</option>
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
        {/* Brand */}
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