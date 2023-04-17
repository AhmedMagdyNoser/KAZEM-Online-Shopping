import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Fade from '../../Component/Uitility/Fade';
const api = require('../../Services/api');

export default function EditCategory() {

  const [category, setCategory] = useState({});
  const [updated, setUpdated] = useState(false);

  const params = useParams();

  async function getCategory(id) {
    await api.getCategory(id, setCategory);
  }

  useEffect(() => {
    getCategory(params.id);
  }, []);

  async function updateCategory(event) {
    event.preventDefault();
    await api.updateCategory(category.id, new FormData(event.target), setUpdated);
  };

  return (
    <div className="container py-4">

      <form onSubmit={updateCategory} className="d-flex flex-column gap-4">

        <div>
          <label htmlFor="title" className="form-label">Category Title</label>
          <input
            required
            type="text"
            name="title"
            defaultValue={category ? category.title : ''}
            id="title"
            placeholder="Category Name"
            className="form-control shadow-none rounded-0"
          />
        </div>

        <div>
          <label htmlFor="description" className="form-label">Category Description</label>
          <textarea
            required
            name="description"
            defaultValue={category ? category.description : ''}
            id="description"
            placeholder="Category Description"
            className="form-control shadow-none rounded-0"
          ></textarea>
        </div>

        <div>
          <label htmlFor="image" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
          <input
            type="file"
            name="image"
            id="image"
            className="form-control shadow-none rounded-0"
          />
        </div>

        <input type="submit" value='EDIT CATEGORY' className="btn btn-success w-100 rounded-0" />

        {updated && (
          <div className="alert alert-success rounded-0">
            <Fade time='0.5s'>
              Category updated successfully!
            </Fade>
          </div>
        )}

      </form>

    </div>
  );
}