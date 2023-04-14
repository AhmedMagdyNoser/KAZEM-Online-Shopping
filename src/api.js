import axios from 'axios';

// ===================== Categories =====================

export async function getAllCategories(setCategories) {
  let res = await axios.get('http://localhost:5000/categories/getAll');
  setCategories(res.data);
}

export async function getCategory(categoryId, setCategory) {
  let res = await axios.get(`http://localhost:5000/categories/${categoryId}`);
  setCategory(res.data);
}

export async function createNewCategory(formData, setIsCreated) {
  try {
    await axios.post("http://localhost:5000/categories/create", formData,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (this token is for admin)
    );
    setIsCreated(true);
    // console.log('Success');
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
    }
  }
}

export async function deleteCategory(categoryId, categories, setCategories) {
  try {
    await axios.delete(`http://localhost:5000/categories/delete/${categoryId}`,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (this token is for admin)
    );
    setCategories(categories.filter(cat => cat.id !== categoryId)); // to remove from the page immediately
  } catch (error) {
    throw error;
  }
}





// ===================== Products =====================

export async function getAllProducts(setProducts) {
  let res = await axios.get('http://localhost:5000/products/getAll');
  setProducts(res.data);
}

export async function getProduct(productId, setProduct) {
  let res = await axios.get(`http://localhost:5000/products/${productId}`);
  setProduct(res.data);
}

export async function getProductsOfCategory(categoryId, setProducts) {
  let res = await axios.get(`http://localhost:5000/products/filter/${categoryId}`);
  setProducts(res.data);
}

export async function createNewProduct(formData, setIsCreated) {
  try {
    await axios.post("http://localhost:5000/products/create", formData,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (this token is for admin)
    );
    setIsCreated(true);
    // console.log('Success');
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
    }
  }
}

export async function deleteProduct(productId, products, setProducts) {
  try {
    await axios.delete(`http://localhost:5000/products/delete/${productId}`,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (this token is for admin)
    );
    setProducts(products.filter(product => product.id !== productId)); // to remove from the page immediately
  } catch (error) {
    throw error;
  }
}








// ===================== Examples =====================

// export async function getUsers() {
//   const response = await axios.get('/api/users');
//   return response.data;
// }

// export async function getUserById(id) {
//   const response = await axios.get(`/api/users/${id}`);
//   return response.data;
// }

// export async function createUser(userData) {
//   const response = await axios.post('/api/users', userData);
//   return response.data;
// }

// export async function updateUser(id, userData) {
//   const response = await axios.put(`/api/users/${id}`, userData);
//   return response.data;
// }

// export async function deleteUser(id) {
//   const response = await axios.delete(`/api/users/${id}`);
//   return response.data;
// }