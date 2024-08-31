import React, { useState, useEffect } from 'react';

const images = [
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
  '../src/images/Capture1.PNG',
  '../src/images/Capture2.PNG',
  '../src/images/Capture3.PNG',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 1 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [current]);

  return (
    <div className="slider relative flex justify-center items-center w-full h-36 overflow-hidden">
      <button
        className="absolute left-0 text-white bg-red-600 bg-opacity-50 
        hover:bg-opacity-75 p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <div className="slides w-full h-full flex transition-transform duration-200 ease-in-out bg-repeat-x" 
      
      data-aos="fade-up"
        data-aos-duration="3000"
       style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <button
        className="absolute right-0 text-white bg-red-600
         bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
