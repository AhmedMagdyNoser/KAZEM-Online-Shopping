import { Link } from "react-router-dom";
import AdminTabs from "../../Component/Admin/AdminTabs";
import ProductCard from "../../Component/Product/ProductCard";
import ProductsSection from "../../Component/Product/ProductsSection";

export default function AdminProdsCates() {
  return (
    <div className="d-flex flex-column gap-4 mb-4">

      <AdminTabs active='Products & Categories' />

      <div className="container d-flex flex-column gap-4">
        <Link to={'/admin/addNewCategory'} className="btn btn-success rounded-0 w-100">
          <i className='fa-solid fa-add me-2'></i>
          Add New Category
        </Link>
        <Link to={'/admin/addNewProduct'} className="btn btn-success rounded-0 w-100">
          <i className='fa-solid fa-add me-2'></i>
          Add New Product
        </Link>
      </div>

      <div className="container d-flex flex-column gap-4">

        <ProductsSection title="Electronics" editable >
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
        </ProductsSection>

        <ProductsSection title="Moblies & Accessories" editable >
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
        </ProductsSection>

        <ProductsSection title="Men's Fashion" editable >
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
        </ProductsSection>

        <ProductsSection title="Women's Fashion" editable >
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
          <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' editable />
        </ProductsSection>

      </div>
    </div>
  )
}
