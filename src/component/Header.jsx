
import { FaFacebook, FaYoutube, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='w-full h-9  bg-red-600 flex items-center justify-evenly'>
      <div className='flex justify-around w-52 text-white p-2'>
      <a href="https://www.facebook.com/profile.php?id=61558394109139" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
        </a>
        <a href="https://www.youtube.com/@helphumanrights" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagramSquare />
        </a>
        
        <FaTwitterSquare />
      </div>
      <div className='flex items-center text-center text-white'>
        <div className='flex items-center space-x-1'>
          <h1>Contact Us</h1>
        </div>
        <div className='ml-4'>
          <h1>+92 3245678910</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
