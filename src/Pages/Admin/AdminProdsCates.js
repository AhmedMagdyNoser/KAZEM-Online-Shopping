import AdminTabs from "../../Component/Admin/AdminTabs";

import ProductCard from "../../Component/Product/ProductCard";
import ProductsSection from "../../Component/Product/ProductsSection";

export default function AdminProdsCates() {
  return (
    <div>

      <AdminTabs active='Products & Categories' />

      <NewCategoryForm />

      <div className="container mb-4 d-flex flex-column gap-4">

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

function NewCategoryForm() {
  return (
    <div className="container my-4">
      <button className="btn btn-success rounded-0 w-100" data-bs-toggle='collapse' data-bs-target='form'>Add New Categories</button>
      <form id='form' className='collapse py-2' >
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input className="form-control shadow-none rounded-0" type="text" id="categoryName" placeholder="Category Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryDescription" className="form-label">Category Description</label>
          <textarea className="form-control shadow-none rounded-0" id="categoryDescription" placeholder="Category Description"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Select a photo for this category (prefered dimensions: 300 x 235)</label>
          <input className="form-control shadow-none rounded-0" type="file" id="formFile" />
        </div>
        <input type="submit" value='Add' className="btn btn-success w-100 rounded-0" />
      </form>
    </div>
  )
}