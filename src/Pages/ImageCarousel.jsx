// src/ImageCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const images = [
  '/edu 4.jpg',
  '/edu 5.jpg',
  'https://media.istockphoto.com/id/1205946261/photo/elementary-school-children-in-classroom.jpg?s=612x612&w=0&k=20&c=Rm8C-52ZWyRlFiSDKQlWYHBP_g3admv6zgBm6PGyFnA=',
  'https://media.istockphoto.com/id/1495037929/photo/happy-elementary-school-teacher-giving-high-five-to-her-student-during-class-in-the-classroom.jpg?s=612x612&w=0&k=20&c=Gn5Kqzd58Tr4sCu-9LKbvQSszJ6b9VmyFB21FOCCO98=',
  'https://media.istockphoto.com/id/1497849854/photo/happy-elementary-students-raising-their-hands-to-answer-teachers-question-during-a-class-at.jpg?s=612x612&w=0&k=20&c=Uder-TToIURBcwVifYHOOkbl-1zyWff4uOYI52vKUgE=',
];

const ImageCarousel = () => {
  return (
    <div className="carousel-container p-4"> {/* Add padding to the container */}
      <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image} 
              alt={`Slide ${index}`} 
              className="w-full h-auto object-cover" 
              style={{ margin: '0 auto', borderRadius: '8px' }} // Center the image and add border radius
              data-aos="fade-right"
              data-aos-duration="3000"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
