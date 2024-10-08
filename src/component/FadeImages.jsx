import image1 from '../../public/bg1.jpg';
import image2 from '../../public/bg2.jpg';
import image3 from '../../public/bg3.jpg';
import image4 from '../../public/bg4.jpg';
import Slider from "react-slick";
const FadeImages = () => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <>
    <div className="slider-container mt-52">
      <Slider {...settings}>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2}/>
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
      </Slider>
    </div>
    </>
  )
}


export default FadeImages
