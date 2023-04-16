import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Fade from '../../Component/Uitility/Fade';
const api = require('../../api');

export default function EditCategory() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState({});
  const [updated, setUpdated] = useState(false);

  const params = useParams();

  async function getCategory(id) {
    await api.getCategory(id, setCategory);
  }

  useEffect(() => {
    getCategory(params.id);
  }, []);

  useEffect(() => {
    setTitle(category.title);
    setDescription(category.description);
  }, [category]);


  async function updateCategory(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    await api.updateCategory(formData, category, setCategory, setUpdated);
  };

  return (
    <div className="container py-4">
      <form onSubmit={updateCategory} className="d-flex flex-column gap-4">
        <div>
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input
            defaultValue={category ? category.title : ''}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-control shadow-none rounded-0"
            type="text"
            id="categoryName"
            placeholder="Category Name"
          />
        </div>
        <div>
          <label htmlFor="categoryDescription" className="form-label">Category Description</label>
          <textarea
            defaultValue={category ? category.description : ''}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="form-control shadow-none rounded-0"
            id="categoryDescription"
            placeholder="Category Description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="formFile" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control shadow-none rounded-0"
            type="file"
            id="formFile"
          />
        </div>
        <input type="submit" value='EDIT CATEGORY' className="btn btn-success w-100 rounded-0" />
      </form>
      {updated && (
        <div className="alert alert-success rounded-0 mt-3">
          <Fade time='0.5s'>
            Category updated successfully!
          </Fade>
        </div>
      )}
    </div>
  );
}