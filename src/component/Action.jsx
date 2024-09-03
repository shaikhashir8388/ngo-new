import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../public/bg1.jpg';
import { useNavigate } from 'react-router-dom';

const Action = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  // Handle click to navigate to the donation page
  const handleDonateClick = () => {
    navigate('/donation'); // Navigate to donation form page
  };

  return (
    <> 
      <div className='flex flex-col lg:flex-row justify-around items-center lg:items-start min-h-screen relative text-black'>
        
        {/* Left Side Image */}
        <div className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] mt-10 lg:mt-32'>
          <div className='space-y-4' data-aos="fade-right">
            <img src={image} alt="Image Here" className='rounded-lg w-full' />
          </div>
        </div>
        
        {/* Descriptions */}
        <div className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-6'>
          <div className='lg:sticky top-6'>
            <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-white text-center lg:text-left' data-aos="fade-up">
              Make a Difference Today
            </h1>
            <p className='text-sm sm:text-base md:text-lg text-justify mt-5' data-aos="fade-up" data-aos-delay="200">
              For the past five years, Help human rights has been dedicated to improving the lives of those in need. Our mission spans across multiple departments, from providing essential resources to underserved communities to supporting education, healthcare, and beyond. Our work is driven by a commitment to uplift the poor and marginalized, offering them hope and opportunities for a better future. Join us in making a difference today. Your contributions, whether big or small, help us continue our vital work. Together, we can change lives, one step at a time. Be a part of our journey and help us create a brighter tomorrow for all.
            </p>
            <div className='flex justify-center lg:justify-start mt-4' data-aos="zoom-in">
              <button
                className='bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-900'
                onClick={handleDonateClick} // Navigate to the donation page
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Action;
