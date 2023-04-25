import axios from 'axios';
import { setAuthUser } from './Storage';

// ===================== Authentication =====================
export async function login(formData, setInvalidData, navigate) {
  await axios.post('http://localhost:5000/auth/login', formData,
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then((res) => {
    setAuthUser(res.data.user);
    res.data.user.type === 1 ? navigate('/admin/products&categories') : navigate('/');
    window.location.reload();
  }).catch((error) => {
    setInvalidData(true);
    throw error;
  })
};

export async function changePassword(id, formData, setPasswordChanged, setInvalidPassword) {
  await axios.put(`http://localhost:5000/auth/change/${id}`, formData,
  {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res) => {
    setPasswordChanged(true);
    setInvalidPassword(false);
  }).catch((error) => {
    setInvalidPassword(true);
    setPasswordChanged(false);
    throw error;
  })
}










// ===================== Categories =====================

export async function getAllCategories(setCategories) {
  let res = await axios.get('http://localhost:5000/categories/getAll');
  setCategories(res.data);
}

export async function getCategory(categoryId, setCategory) {
  let res = await axios.get(`http://localhost:5000/categories/${categoryId}`);
  setCategory(res.data);
}

export async function createNewCategory(formData, token, setIsCreated) {
  try {
    await axios.post("http://localhost:5000/categories/create", formData,
      { headers: { token: token } }
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










// ===================== Cart =====================

export async function addToCart(formData, setAdded) {
  try {
    await axios.post(`http://localhost:5000/carts/add`, formData,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    setAdded(true);
  } catch (error) {
    setAdded(false);
    throw error;
  }
}

export async function checkIfInCart(userId, prodId, setAddedToCart) {
  axios.get(`http://localhost:5000/carts/check/${userId}/${prodId}`)
    .then((response) => response.data.inCart ? setAddedToCart(true) : setAddedToCart(false))
    .catch((error) => { console.error(error) });
}

export async function getCart(userId, setItems) {
  let res = await axios.get(`http://localhost:5000/carts/get/${userId}`);
  setItems(res.data.cart);
}

export async function updateQuantity(userId, prodId, quantity) {
  await axios.put(`http://localhost:5000/carts/${userId}/${prodId}`, { quantity });
}

export async function cartTotalCost(userId, setTotalCost) {
  let res = await axios.get(`http://localhost:5000/carts/total/${userId}`);
  setTotalCost(res.data.total_cost);
}

export async function removeItemFromCart(userId, prodId, setItems) {
  try {
    await axios.delete(`http://localhost:5000/carts/remove/${userId}`, { data: { prod_id: prodId } },);
    setItems(prevItems => prevItems.filter(item => item.prod_id !== prodId)); // to remove from the page immediately
  } catch (error) {
    throw error;
  }
}












// ===================== Fav List =====================

export async function addToFav(formData, setAdded) {
  try {
    await axios.post(`http://localhost:5000/fav/add`, formData,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    setAdded(true);
  } catch (error) {
    setAdded(false);
    throw error;
  }
}

export async function checkIfInFav(userId, prodId, setAddedToFav) {
  axios.get(`http://localhost:5000/fav/check/${userId}/${prodId}`)
    .then((response) => response.data.inFav ? setAddedToFav(true) : setAddedToFav(false))
    .catch((error) => { console.error(error) });
}

export async function getFav(userId, setItems) {
  let res = await axios.get(`http://localhost:5000/fav/get/${userId}`);
  setItems(res.data.fav_list);
}

export async function removeItemFromFav(userId, prodId, setItems) {
  try {
    await axios.delete(`http://localhost:5000/fav/remove/${userId}`, { data: { prod_id: prodId } },);
    setItems(prevItems => prevItems.filter(item => item.prod_id !== prodId)); // to remove from the page immediately
  } catch (error) {
    throw error;
  }
}










// ===================== Rating =====================

export async function rateProduct(userId, prodId, rating) {
  try {
    await axios.post(`http://localhost:5000/rating/${prodId}`, { user_id: userId, rating: rating })
  } catch (error) {
    throw error;
  }
}

export async function updateRating(userId, prodId, rate) {
  try {
    await axios.put(`http://localhost:5000/rating/${userId}/${prodId}`, { rate })
  } catch (error) {
    throw error;
  }
}

export async function checkIfRated(userId, prodId, setUserProdRating) {
  let res = await axios.get(`http://localhost:5000/rating/${userId}/${prodId}`);
  setUserProdRating(res.data);
}

export async function getProductRating(prodId, setRating) {
  let res = await axios.get(`http://localhost:5000/rating/${prodId}`);
  setRating(res.data);
}

export async function deleteRating(userId, prodId) {
  await axios.delete(`http://localhost:5000/rating/${userId}/${prodId}`);
}


