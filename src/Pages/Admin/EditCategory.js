export default function AddNewCategory() {
  return (
    <div className="container py-4">
      <form className="d-flex flex-column gap-4">
        {/* Name */}
        <div>
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input className="form-control shadow-none rounded-0" type="text" id="categoryName" placeholder="Category Name" />
        </div>
        {/* Description */}
        <div>
          <label htmlFor="categoryDescription" className="form-label">Category Description</label>
          <textarea className="form-control shadow-none rounded-0" id="categoryDescription" placeholder="Category Description"></textarea>
        </div>
        {/* Image */}
        <div>
          <label htmlFor="formFile" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
          <input className="form-control shadow-none rounded-0" type="file" id="formFile" />
        </div>
        {/* Submit */}
        <input type="submit" value='ADD CATEGORY' className="btn btn-success w-100 rounded-0" />
      </form>
    </div>
  )
}