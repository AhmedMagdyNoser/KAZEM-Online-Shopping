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
import CategoryDetailsPage from "./Pages/Categories/CategoryDetailsPage";
import EditCategory from "./Pages/Admin/EditCategory";
import EditProduct from "./Pages/Admin/EditProduct";
import PageNotFound from "./Pages/Global/PageNotFound";
import NotAuthorized from "./Pages/Global/NotAuthorized";
import { getAuthUser } from "./Services/Storage";
import AcountCreated from "./Pages/Auth/AcountCreated";
import Conditions from "./Pages/Global/ConditionsOfUse";

export default function App() {

  return (
    <HashRouter>
      <div style={{ minHeight: '101vh' }} className="d-flex flex-column">
        <Header />
        <ScrollToTop />
        <div className="flex-grow-1">
          <Routes>

            <Route index element={<HomePage />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/login" element={getAuthUser() ? <PageNotFound /> : <LoginPage /> } />
            <Route path="/register" element={getAuthUser() ? <PageNotFound /> : <RegisterPage />} />
            <Route path="/acountCreated" element={<AcountCreated />} />
            <Route path="/allCategories" element={<AllCategoriesPage />} />
            <Route path="/allProducts" element={<AllProductsPage />} />
            <Route path="/allProducts/:query" element={<AllProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/category/:id" element={<CategoryDetailsPage />} />

            <Route>
              <Route path="/buyer/profile" element={getAuthUser() ? <BuyerProfile /> : <PageNotFound />} />
              <Route path="/buyer/favList" element={getAuthUser() && getAuthUser().type === 0 ? <BuyerFavList /> : <PageNotFound />} />
              <Route path="/buyer/cart" element={getAuthUser() && getAuthUser().type === 0 ? <BuyerCart /> : <PageNotFound />} />
              <Route path="/buyer/orders" element={getAuthUser() && getAuthUser().type === 0 ? <BuyerOrders /> : <PageNotFound />} />
              <Route path="/buyer/checkout" element={getAuthUser() && getAuthUser().type === 0 ? <CheckoutPage /> : <PageNotFound />} />
            </Route>

            <Route>
              <Route path="/admin/products&categories" element={getAuthUser() && getAuthUser().type === 1 ? <AdminProdsCates /> : <NotAuthorized />} />
              <Route path="/admin/newOrders" element={getAuthUser() && getAuthUser().type === 1 ? <AdminNewOrders /> : <NotAuthorized />} />
              <Route path="/admin/allOrders" element={getAuthUser() && getAuthUser().type === 1 ? <AdminAllOrders /> : <NotAuthorized />} />
              <Route path="/admin/allUsers" element={getAuthUser() && getAuthUser().type === 1 ? <AdminAllUsers /> : <NotAuthorized />} />
              <Route path="/admin/addNewCategory" element={getAuthUser() && getAuthUser().type === 1 ? <AddNewCategory /> : <NotAuthorized />} />
              <Route path="/admin/addNewProduct" element={getAuthUser() && getAuthUser().type === 1 ? <AddNewProduct /> : <NotAuthorized />} />
              <Route path="/admin/addNewUser" element={getAuthUser() && getAuthUser().type === 1 ? <AddNewUser /> : <NotAuthorized />} />
              <Route path="/admin/editCategory/:id" element={getAuthUser() && getAuthUser().type === 1 ? <EditCategory /> : <NotAuthorized />} />
              <Route path="/admin/editProduct/:id" element={getAuthUser() && getAuthUser().type === 1 ? <EditProduct /> : <NotAuthorized />} />
              <Route path="/admin/editUser/:id" element={getAuthUser() && getAuthUser().type === 1 ? <EditUser /> : <NotAuthorized />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
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