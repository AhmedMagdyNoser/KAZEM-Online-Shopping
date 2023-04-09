import { Link } from "react-router-dom";
import AdminTabs from "../../Component/Admin/AdminTabs";
import ProductCard from "../../Component/Product/ProductCard";
import ProductsSection from "../../Component/Product/ProductsSection";

// testing data
import { useSelector } from 'react-redux';

export default function AdminProdsCates() {

  // We must fetch data of all products and categroies from api but for testing we get them from redux
  let categories = useSelector(state => state.categories);
  let products = useSelector(state => state.products);

  return (
    <div className="d-flex flex-column gap-4 mb-4">

      <AdminTabs active='Products & Categories' />

      <div className="container d-flex flex-column gap-4">
        <WideLink destination='/admin/addNewCategory' icon='fa-solid fa-add' label='Add New Category' />
        <WideLink destination='/admin/addNewProduct' icon='fa-solid fa-add' label='Add New Product' />
      </div>

      <div className="container d-flex flex-column gap-4">

        {categories.map(cat => (
          <ProductsSection key={cat.id} category={cat} editable >
            {products.map(product =>
              product.categoryId === cat.id ? <ProductCard key={product.id} product={product} editable /> : null
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
