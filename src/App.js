import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./Pages/Home/HomePage";
import Header from "./Component/Uitility/Header";
import Footer from "./Component/Uitility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoriesPage from "./Pages/Categories/AllCategoriesPage";
import AllProductsPage from "./Pages/Products/AllProductsPage";
import BuyerProfile from "./Pages/Buyer/BuyerProfile";
import BuyerFavList from "./Pages/Buyer/BuyerFavList";
import BuyerCart from "./Pages/Buyer/BuyerCart";
import BuyerOrders from "./Pages/Buyer/BuyerOrders";
import AdminProdsCates from "./Pages/Admin/AdminProdsCates";
import AdminNewOrders from "./Pages/Admin/AdminNewOrders";
import AdminAllOrders from "./Pages/Admin/AdminAllOrders";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import AdminAllUsers from "./Pages/Admin/AdminAllUsers";
import AddNewCategory from "./Pages/Admin/AddNewCategory";
import AddNewProduct from "./Pages/Admin/AddNewProduct";
import AddNewUser from "./Pages/Admin/AddNewUser";
import EditUser from "./Pages/Admin/EditUser";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CategoryPage from "./Pages/Categories/CategoryPage";
import EditCategory from "./Pages/Admin/EditCategory";
import EditProduct from "./Pages/Admin/EditProduct";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allCategories" element={<AllCategoriesPage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />

          <Route>
            <Route path="/buyer/profile" element={<BuyerProfile />} />
            <Route path="/buyer/favList" element={<BuyerFavList />} />
            <Route path="/buyer/cart" element={<BuyerCart />} />
            <Route path="/buyer/orders" element={<BuyerOrders />} />
            <Route path="/buyer/checkout" element={<CheckoutPage />} />
          </Route>

          <Route>
            <Route path="/admin/products&categories" element={<AdminProdsCates />} />
            <Route path="/admin/newOrders" element={<AdminNewOrders />} />
            <Route path="/admin/allOrders" element={<AdminAllOrders />} />
            <Route path="/admin/allUsers" element={<AdminAllUsers />} />
            <Route path="/admin/addNewCategory" element={<AddNewCategory />} />
            <Route path="/admin/addNewProduct" element={<AddNewProduct />} />
            <Route path="/admin/addNewUser" element={<AddNewUser />} />
            <Route path="/admin/editCategory/:id" element={<EditCategory />} />
            <Route path="/admin/editProduct/:id" element={<EditProduct />} />
            <Route path="/admin/editUser/:id" element={<EditUser />} />
          </Route>

        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

// To scroll to top on routing
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}