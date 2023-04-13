import AdminTabs from '../../Component/Admin/AdminTabs';
import Fade from '../../Component/Uitility/Fade';
import { useState } from "react";
const api = require('../../api');

export default function AddNewCategory() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  async function createNewCategory(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    await api.createNewCategory(formData, setIsCreated);
  };

  return (
    <div>
      <AdminTabs active='Products & Categories' />
      <div className="container py-4">
        <form onSubmit={createNewCategory} className="d-flex flex-column gap-4">
          {/* Name */}
          <div>
            <label htmlFor="categoryName" className="form-label">Category Name</label>
            <input required onChange={(e) => setTitle(e.target.value)} className="form-control shadow-none rounded-0" type="text" id="categoryName" placeholder="Category Name" />
          </div>
          {/* Description */}
          <div>
            <label htmlFor="categoryDescription" className="form-label">Category Description</label>
            <textarea required onChange={(e) => setDescription(e.target.value)} className="form-control shadow-none rounded-0" id="categoryDescription" placeholder="Category Description"></textarea>
          </div>
          {/* Image */}
          <div>
            <label htmlFor="formFile" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
            <input required onChange={(e) => setImage(e.target.files[0])} className="form-control shadow-none rounded-0" type="file" id="formFile" />
          </div>
          {/* Submit */}
          <input type="submit" value='ADD CATEGORY' className="btn btn-success w-100 rounded-0" />
        </form>
        {/* Success Animation */}
        {isCreated && (
          <div className="alert alert-success rounded-0 mt-3">
            <Fade time='0.5s'>
              Category created successfully!
            </Fade>
          </div>
        )}
      </div>
    </div>
  )
}