import HomePage from "./Pages/Home/HomePage";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Component/Uitility/Header";
import Footer from "./Component/Uitility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoriesPage from "./Pages/Categories/AllCategoriesPage";
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
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

export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategories" element={<AllCategoriesPage />} />
          <Route path="/allbrands" element={<AllBrandsPage />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />

          <Route>
            <Route path="/buyer/profile" element={<BuyerProfile />} />
            <Route path="/buyer/favList" element={<BuyerFavList />} />
            <Route path="/buyer/cart" element={<BuyerCart />} />
            <Route path="/buyer/orders" element={<BuyerOrders />} />
            <Route path="/buyer/cart/checkout" element={<CheckoutPage />} />
          </Route>

          <Route>
            <Route path="/admin/products&categories" element={<AdminProdsCates />} />
            <Route path="/admin/newOrders" element={<AdminNewOrders />} />
            <Route path="/admin/allOrders" element={<AdminAllOrders />} />
            <Route path="/admin/allUsers" element={<AdminAllUsers />} />
            <Route path="/admin/addNewCategory" element={<AddNewCategory />} />
            <Route path="/admin/addNewProduct" element={<AddNewProduct />} />
            <Route path="/admin/addNewUser" element={<AddNewUser />} />
            <Route path="/admin/editUser/:id" element={<EditUser />} />
          </Route>

        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}
