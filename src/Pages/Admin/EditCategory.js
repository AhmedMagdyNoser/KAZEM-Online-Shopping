import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditCategory() {

  const [currentCategory, setCurrentCategory] = useState(null);

  const params = useParams(); 
  
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/categories/${params.id}`);
        setCurrentCategory(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };
  
    fetchCategory();
  }, [params.id]);
  
  return (
    <div className="container py-4">
      <form className="d-flex flex-column gap-4">
        <div>
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input
            defaultValue={currentCategory ? currentCategory.title : ''}
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
            defaultValue={currentCategory ? currentCategory.description : ''}
            required
            className="form-control shadow-none rounded-0"
            id="categoryDescription"
            placeholder="Category Description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="formFile" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
          <input
            className="form-control shadow-none rounded-0"
            type="file"
            id="formFile"
          />
        </div>
        <input type="submit" value='EDIT CATEGORY' className="btn btn-success w-100 rounded-0" />
      </form>
    </div>
  );
}