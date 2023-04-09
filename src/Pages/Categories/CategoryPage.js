import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import ProductCard from "../../Component/Product/ProductCard";

export default function CategoryPage() {

  const params = useParams(); // it's the parameters in the current url '/product/:id' the only param is the id
  
  // We must fetch data from api using the parameter (id) but for testing we use redux
  let products = useSelector(state => state.products);
  let categories = useSelector(state => state.categories)
  let currentCategory = {};
  categories.forEach(category => {
    if (category.id === parseInt(params.id)) {
      currentCategory = category;
    }
  })

  return (
    <div className="container bg-white p-0 my-4 border-bottom">
      <h2 className='m-0 py-3 bg-dark text-white text-center text-uppercase'>{currentCategory.title}</h2>
      <div className="kazem-grid p-3">
        {products.map(product =>
          product.categoryId === currentCategory.id ? <ProductCard key={product.id} product={product} editable /> : null
        )}
      </div>
    </div>
  )
}