import { useParams } from "react-router-dom";
import ProductsSection from "../../Component/Product/ProductsSection";
import ProductCard from "../../Component/Product/ProductCard";
let testDescription = 'Canon is proud of its long and unwavering tradition of protecting and preserving our most precious of resources - the world we share. We work to harmonize environmental commitment and economic interests in all our business activities. We believe this balance is essential to sustain prosperity for future generations. Create detailed DSLR quality pictures and cinematic Full HD movies with ease, even in difficult low light situations, using the 24.1 Megapixel EOS 4000D. Share instantly and shoot remotely with Wi-Fi, NFC and Canon Camera Connect app.Step up to a 24.1 Megapixel sensor that has up to 19x more surface area than many smartphones to capture stories with beautiful background blur, even in tricky light.Enjoy guided Live View shooting with Creative Auto mode and add unique finishes with Creative Filters. Just point and shoot for great results with Scene Intelligent Auto.Turn spontaneous moments into creative films in Full HD, or use Video Snapshot to simply capture highlights of your day.Capture the moment just as you remember with precise Auto Focus, 3.0 fps and DIGIC 4+. Enjoy easy framing with the optical viewfinder and see results on a 7.5 cm LCD screen.';

export default function ProductDetailsPage({ product }) {

  const params = useParams(); // it's the parameters in the current url '/product/:id' the only param is the id

  // We must fetch data from api using the parameter (id) but for testing we consume that
  product = { id: 5, title: 'Canon Eos 80D', Category: 'Electronics', Brand: 'Canon', Price: 1200, rating: 4.5, description: testDescription };

  return (
    <div className="container d-flex flex-column gap-4 py-4">

      <div>
        Add Your Work Here
      </div>

      <ProductsSection title="Suggestions" btnTitle="More" pathText="/allproducts" >
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
        <ProductCard title="Nova Y70 Dual Sim Pearl White 4GB RAM 128GB" price='350.00' rating='4.5' />
      </ProductsSection>
    </div>
  )
}