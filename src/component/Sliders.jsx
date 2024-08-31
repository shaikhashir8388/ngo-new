import Slider from "react-slick";
import image1 from '../images/bg1.jpg';
import image2 from '../images/bg2.jpg';
import image3 from '../images/bg3.jpg';
import image4 from '../images/bg4.jpg';
import image5 from '../images/bg3.jpg'; // Assuming this is intended image
import image6 from '../images/bg2.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: true, // Ensure this is set to true
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 954,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 639, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <> 
    <div className="text-Black">
      <h1 className='text-center text-5xl font-bold'>Our Works</h1>
      <Slider {...settings} className='mt-10 rounded-lg'>
        <div className="p-7">
          <img src={image1} alt="Slide 1" className='w-full h-96 object-cover max-w-full rounded-lg' />
        </div>
        <div className="p-7">
          <img src={image2} alt="Slide 2" className='w-full h-96 object-cover max-w-full rounded-lg' />
        </div>
        <div className="p-7">
          <img src={image3} alt="Slide 3" className='w-full h-96 object-cover max-w-full rounded-lg' />
        </div>
        <div className="p-7">
          <img src={image4} alt="Slide 4" className='w-full h-96 object-cover max-w-full rounded-lg' />
        </div>
        <div className="p-7">
          <img src={image5} alt="Slide 5" className='w-full h-96 object-cover max-w-full rounded-lg' />
        </div>
        <div className="p-7">
          <img src={image6} alt="Slide 6" className='w-full h-96 object-cover max-w-full rounded-lg' />
        </div>
      </Slider>
    </div>
    </>
  );
}

export default Sliders;
