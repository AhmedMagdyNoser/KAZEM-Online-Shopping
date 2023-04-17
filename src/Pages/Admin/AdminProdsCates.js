import AdminTabs from "../../Component/Admin/AdminTabs";
import ProductCard from "../../Component/Product/ProductCard";
import ProductsSection from "../../Component/Product/ProductsSection";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const api = require('../../Services/api');

export default function AdminProdsCates() {

  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);

  async function getAllCategories() {
    await api.getAllCategories(setCategories);
  }

  async function getAllProducts() {
    await api.getAllProducts(setProducts);
  }

  async function deleteCategory(categoryId) {
    await api.deleteCategory(categoryId, categories, setCategories);
  }

  async function deleteProduct(productId) {
    await api.deleteProduct(productId, products, setProducts);
  }

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  return (
    <div className="d-flex flex-column gap-4 mb-4">

      <AdminTabs active='Products & Categories' />

      <div className="container d-flex flex-column gap-4">
        <WideLink destination='/admin/addNewCategory' icon='fa-solid fa-add' label='Add New Category' />
        <WideLink destination='/admin/addNewProduct' icon='fa-solid fa-add' label='Add New Product' />
      </div>

      <div className="container d-flex flex-column gap-4">

        {categories.map(cat => (
          <ProductsSection key={cat.id} category={cat} editable deleteCategory={deleteCategory} >
            {products.map(product =>
              product.cat_id === cat.id ?
                <ProductCard key={product.id} product={product} editable deleteProduct={deleteProduct} />
                : null
            )}
          </ProductsSection>
        ))}

      </div>

    </div>
  )
}

function WideLink({ destination, icon, label }) {
  return (
    <Link to={destination} className="btn btn-success rounded-0 w-100">
      <i className={icon + ' me-2'}></i>
      {label}
    </Link>
  )
}