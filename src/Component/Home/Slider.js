// images must be png without a background
// images must have the same dimintions as (width: 730, height: 550)
import img1 from "../../Images/Slider/slideImg1.png";
import img2 from "../../Images/Slider/slideImg2.png";
import img3 from "../../Images/Slider/slideImg3.png";

export default function Slider() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <Slide
          img={img1}
          title='up to 50% off'
          subTitle='on our products'
          bgColor='linear-gradient(175deg, #ffedf5 0%, #ffd5e7 100%)'
          className='active'
        />
        <Slide
          img={img2}
          title='up to 50% off'
          subTitle='on our products'
          bgColor='linear-gradient(175deg, #d3deff 0%, #a8badf 100%)'
        />
        <Slide
          img={img3}
          title='up to 50% off'
          subTitle='on our products'
          bgColor='linear-gradient(175deg, #f8f0d5 0%, #efdcab 100%)'
        />
      </div>

      <button className="carousel-control-prev" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}


function Slide({ img, title, subTitle, className, bgColor }) {
  return (
    <div className={"carousel-item " + className} style={{ background: bgColor }} >
      <div className='d-flex align-items-center justify-content-center gap-3 pt-3'>
        <img src={img} className='w-25' alt={img} />
        <div style={{ color: "#915970" }}>
          <p className='fw-bold mb-0 fs-4' style={{ textTransform: "uppercase" }}>{title}</p>
          <p style={{ textTransform: "capitalize" }}>{subTitle}</p>
        </div>
      </div>
    </div>
  )
}
