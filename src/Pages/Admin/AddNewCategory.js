import { useState } from 'react';
import AdminTabs from '../../Component/Admin/AdminTabs';
import Fade from '../../Component/Uitility/Fade';
const api = require('../../api');

export default function AddNewCategory() {

  const [isCreated, setIsCreated] = useState(false);

  async function createNewCategory(event) {
    event.preventDefault();
    await api.createNewCategory(new FormData(event.target), setIsCreated);
  };

  return (
    <div>
      <AdminTabs active='Products & Categories' />
      <div className="container py-4">
        <form onSubmit={createNewCategory} className="d-flex flex-column gap-4">
          {/* Name */}
          <div>
            <label htmlFor="title" className="form-label">Category Name</label>
            <input name="title" required className="form-control shadow-none rounded-0" type="text" id="title" placeholder="Category Name" />
          </div>
          {/* Description */}
          <div>
            <label htmlFor="description" className="form-label">Category Description</label>
            <textarea name="description" required className="form-control shadow-none rounded-0" id="description" placeholder="Category Description"></textarea>
          </div>
          {/* Image */}
          <div>
            <label htmlFor="image" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
            <input name="image" required className="form-control shadow-none rounded-0" type="file" id="image" />
          </div>
          {/* Submit */}
          <input type="submit" value='ADD CATEGORY' className="btn btn-success w-100 rounded-0" />
          {/* Success Animation */}

          {isCreated && (
            <div className="alert alert-success rounded-0">
              <Fade time='0.5s'>
                Category Created Successfully!
              </Fade>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}