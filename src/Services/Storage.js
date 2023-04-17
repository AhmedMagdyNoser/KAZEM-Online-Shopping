
export const setAuthUser = (data) => {
  // Stringify OBJECT to TEXT and save is to local storage
  localStorage.setItem("user", JSON.stringify(data));
};

export const getAuthUser = () => {
  // parse TEXT to OBJECT and get is from local storage
  return localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
};

export const removeAuthUser = () => {
  // remove the data from local storage if it exists
  localStorage.getItem("user") && localStorage.removeItem("user");
  window.location = ("/"); // reload the page
};