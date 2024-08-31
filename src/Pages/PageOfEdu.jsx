
import React from 'react';
import ImageCarousel from './ImageCarousel';

const MainLayout = () => {


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full bg-red-600 text-white py-4 shadow text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold" data-aos="fade-left"
        data-aos-duration="3000"> Educationa Must For Everyone </h1>
        </div>
      </div>
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p className="text-gray-700 mb-4 text-justify pt-4" data-aos="fade-down"
        data-aos-duration="3000">Education is a fundamental right, yet many students around the world face significant financial barriers that prevent them from accessing the learning opportunities they deserve. If you are one of these students, know that your dreams and aspirations are incredibly valuable, and your determination can open doors that may seem closed. Remember, there are numerous resources available, such as scholarships, grants, community programs, and online courses, designed to support individuals like you. Keep believing in yourself and stay persistent in your pursuit of knowledge. Reach out to mentors, educators, and organizations dedicated to helping students overcome financial challenges.
           Your passion for learning is your greatest asset, and with perseverance, you can achieve your goals and make a meaningful impact on the world.</p>
          <h2 className="text-2xl font-bold mb-4 text-justify"> <span></span></h2>
          <p className="text-gray-700 mb-4 text-justify">
</p>
          <h2 className="text-2xl font-bold mb-4" data-aos="fade-left"
        data-aos-duration="3000"><span> Support and Advocacy: </span></h2>
    <p className="text-gray-700 text-justify" data-aos="fade-left"
        data-aos-duration="3000">Providing support services such as tutoring, mentorship, and counseling to help students succeed.
   Advocating for policies that promote free and equitable access to education globally.
      At Help Human Rights Organization, we are committed to breaking down barriers
       to education and fostering a future where everyone has the opportunity to 
       learn and thrive. Join us in our mission to make free education a reality for all.
  </p>
        </div>
        <div className="w-full md:w-1/2">
          <ImageCarousel />
        </div>
      </main>
    </div>
 

);
};

export default MainLayout;
