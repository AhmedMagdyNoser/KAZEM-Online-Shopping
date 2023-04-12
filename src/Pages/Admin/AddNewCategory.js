import { useState, useEffect } from "react";
import Fade from '../../Component/Uitility/Fade';
import axios from "axios";

export default function AddNewCategory() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [added, setAdded] = useState(false);

  const createCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    try {
      await axios.post(
        "http://localhost:5000/categories/create",
        formData,
        { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (this token is for admin)
      );
      setAdded(true);
      // console.log('Success');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
    }
  };

  // Deleted Soon
  useEffect(() => {
    if (added) {
      const timer = setTimeout(() => {
        setAdded(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [added]);

  return (
    <div className="container py-4" style={{ minHeight: '85vh' }}>
      <form onSubmit={createCategory} className="d-flex flex-column gap-4">
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
      {added && (
        <div className="alert alert-success rounded-0 mt-3">
          <Fade time='1s'>
            Category added successfully!
          </Fade>
        </div>
      )}
    </div>
  )
}