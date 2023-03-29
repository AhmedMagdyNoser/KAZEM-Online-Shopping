import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import NavBarLogin from "./Component/Uitility/NavBarLogin";
import Footer from "./Component/Uitility/Footer";
import LoginPgae from "./Pages/Auth/LoginPgae";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductPage from "./Pages/Products/ShopProductPage";

function App() {
  return (
    <div>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route  path="/login" element={<LoginPgae />} />
          <Route  path="/register" element={<RegisterPage />} />
          <Route  path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductPage  />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
