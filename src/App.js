import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Uitility/Header";
import Footer from "./Component/Uitility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoriesPage from "./Pages/Category/AllCategoriesPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductPage from "./Pages/Products/ShopProductPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategories" element={<AllCategoriesPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
