import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
export default function EditCategory() {

  const params = useParams(); // it's the parameters in the current url '/editCategory/:id' the only param is the id

  // We must fetch data of the category from api using the parameter (id) but for testing we use redux
  let categories = useSelector(state => state.categories)
  let currentCategory = {};
  categories.forEach(category => {
    if (category.id === parseInt(params.id)) {
      currentCategory = category;
    }
  })

  return (
    <div className="container py-4">
      <form className="d-flex flex-column gap-4">
        {/* Name */}
        <div>
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input defaultValue={currentCategory.title} required className="form-control shadow-none rounded-0" type="text" id="categoryName" placeholder="Category Name" />
        </div>
        {/* Description */}
        <div>
          <label htmlFor="categoryDescription" className="form-label">Category Description</label>
          <textarea defaultValue={currentCategory.description} required className="form-control shadow-none rounded-0" id="categoryDescription" placeholder="Category Description"></textarea>
        </div>
        {/* Image */}
        <div>
          <label htmlFor="formFile" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
          <input className="form-control shadow-none rounded-0" type="file" id="formFile" />
        </div>
        {/* Submit */}
        <input type="submit" value='EDIT CATEGORY' className="btn btn-success w-100 rounded-0" />
      </form>
    </div>
  )
}