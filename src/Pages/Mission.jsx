import React, { useState, useEffect } from 'react';

const images = [
  { url: 'https://img.freepik.com/free-vector/flat-style-wedding-people_24908-57565.jpg?t=st=1716663323~exp=1716666923~hmac=31a86c27b76e5008533c36c0ef301e7ad40d4a6871d153619033827a4f51beb6&w=740', alt: 'Image 1' },
  { url: 'https://media.istockphoto.com/id/1211290695/photo/beautiful-photo-of-indian-bride-in-traditional-wedding-attire-as-per-hindu-custom-wearing.jpg?s=612x612&w=0&k=20&c=8cPIQ-FuQ_U7zXgrA_2zWKsdOyiF_j0XKzQPXrrTr0c=', alt: 'Image 2' },
  { url: 'https://img.freepik.com/free-vector/wedding-couple-flat-style_24908-56977.jpg?t=st=1716664664~exp=1716668264~hmac=dfcbe58c359d27e2d47efb2bea8edc2abd5f3169d07641ccc438fda1953e6f29&w=740', alt: 'Image 3' }
];

function Mission() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
<h1> Happy Lives </h1>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="relative h-64 sm:h-80 lg:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
    </>
  );
}

export default Mission;
