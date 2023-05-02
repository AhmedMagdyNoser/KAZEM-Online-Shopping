const api = require('./api');

export const setAuthUser = (data) => {
  // Stringify OBJECT to TEXT and save is to local storage
  localStorage.setItem("user", JSON.stringify(data));
  updateStatus(data.id, '1');
};

export const getAuthUser = () => {
  // parse TEXT to OBJECT and get is from local storage
  return localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
};

export const removeAuthUser = () => {
  // remove the data from local storage if it exists
  updateStatus(getAuthUser().id, '0');
  localStorage.getItem("user") && localStorage.removeItem("user");
  window.location = ("/"); // reload the page
};

async function updateStatus(userId, status) {
  console.log(userId, status);
  await api.updateStatus(userId, status);
}
