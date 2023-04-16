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
      { headers: { token: '5639b565897c7304d440ad1e4dfff115', } } // testing (token for admin)
    );
    setIsCreated(true);
  } catch (error) {
    setIsCreated(false);
    throw error;
  }
}

export async function updateCategory(categoryId, formData, setUpdated) {
  try {
    await axios.put(`http://localhost:5000/categories/update/${categoryId}`, formData,
      {
        headers: {
          token: '5639b565897c7304d440ad1e4dfff115',  // testing (token for admin)
        }
      }
    );
    setUpdated(true);
  } catch (error) {
    setUpdated(false);
    throw error;
  }
}

export async function deleteCategory(categoryId, categories, setCategories) {
  try {
    await axios.delete(`http://localhost:5000/categories/delete/${categoryId}`,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (token for admin)
    );
    setCategories(categories.filter(cat => cat.id !== categoryId)); // to remove from the page immediately
  } catch (error) {
    console.log(error);
  }
}










// ===================== Products =====================

export async function getAllProducts(setProducts) {
  let res = await axios.get('http://localhost:5000/products/getAll');
  setProducts(res.data);
}

export async function searchForProducts(query, setProducts) {
  let res = await axios.get(`http://localhost:5000/products/getAll?search=${query}`);
  setProducts(res.data);
}

export async function getProductsOfCategory(categoryId, setProducts) {
  let res = await axios.get(`http://localhost:5000/products/filter/${categoryId}`);
  setProducts(res.data);
}

export async function getProduct(productId, setProduct) {
  let res = await axios.get(`http://localhost:5000/products/get/${productId}`);
  setProduct(res.data);
}

export async function createNewProduct(formData, setIsCreated) {
  try {
    await axios.post("http://localhost:5000/products/create", formData,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (token for admin)
    );
    setIsCreated(true);
  } catch (error) {
    setIsCreated(false);
    throw error;
  }
}

export async function updateProduct(productId, formData, setUpdated) {
  try {
    await axios.put(`http://localhost:5000/products/update/${productId}`, formData,
      {
        headers: {
          token: '5639b565897c7304d440ad1e4dfff115', // testing (token for admin)
        }
      }
    );
    setUpdated(true);
  } catch (error) {
    setUpdated(false);
    throw error;
  }
}

export async function deleteProduct(productId, products, setProducts) {
  try {
    await axios.delete(`http://localhost:5000/products/delete/${productId}`,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (token for admin)
    );
    setProducts(products.filter(product => product.id !== productId)); // to remove from the page immediately
  } catch (error) {
    console.log(error);
  }
}










// ===================== Users =====================

export async function getAllUsers(setUsers) {
  let res = await axios.get('http://localhost:5000/users/getAll',
    { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (token for admin)
  );
  setUsers(res.data);
}

export async function getUser(userId, setUser) {
  let res = await axios.get(`http://localhost:5000/users/${userId}`,
    { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (token for admin)
  );
  setUser(res.data);
}

export async function createNewUser(formData, setIsCreated, setEmailExists) {
  try {
    await axios.post("http://localhost:5000/users/create", formData,
      {
        headers: {
          'token': '5639b565897c7304d440ad1e4dfff115', // testing (token for admin)
          'Content-Type': 'application/json',
        }
      }
    );
    setIsCreated(true);
    setEmailExists(false);
  } catch (error) {
    setIsCreated(false);
    setEmailExists(true);
    throw error;
  }
}

export async function updateUser(userId, formData, setUpdated, setEmailExists) {
  try {
    await axios.put(`http://localhost:5000/users/update/${userId}`,
      formData,
      {
        headers: {
          'token': '5639b565897c7304d440ad1e4dfff115', // testing (token for admin)
          'Content-Type': 'application/json',
        }
      }
    );
    setUpdated(true);
    setEmailExists(false);
  } catch (error) {
    setUpdated(false);
    setEmailExists(true);
    throw error;
  }
}


export async function deleteUser(userId, users, setUsers) {
  try {
    await axios.delete(`http://localhost:5000/users/delete/${userId}`,
      { headers: { token: '5639b565897c7304d440ad1e4dfff115' } } // testing (token for admin)
    );
    setUsers(users.filter(user => user.id !== userId)); // to remove from the page immediately
  } catch (error) {
    console.log(error);
  }
}
