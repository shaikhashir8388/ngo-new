import { FaFacebook, FaYoutube, FaInstagramSquare, FaTwitterSquare, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-red-600 pt-8 pb-6 text-white ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let is keep in touch!</h4>
            <h5 className="text-lg mt-4 mb-2 lg:mt-0">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
                <FaFacebook />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
                <FaYoutube />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
                <FaInstagramSquare />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
                <FaTwitterSquare />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 flex flex-wrap items-top">
            <div className="w-full lg:w-6/12 px-4 lg:pl-0">
              <span className="block uppercase mb-7 text-2xl font-semibold text-white">About HELP</span>
              <ul className="list-unstyled">
                <li className='mb-2'>
                  <a href="#" className="text-lg">Home</a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-lg">About Us</a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-lg">Our Work</a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-lg">Our Impact</a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-lg">Our Members</a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-lg ">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-6/12 px-4 lg:ml-auto lg:mr-0">
              <span className="block uppercase mb-7 text-2xl font-semibold text-white ">Information</span>
              <ul className="list-unstyled">
                <li className="flex items-center mb-4">
                  <FaEnvelope className="text-lg mr-2 " />
                  <span className='text-white'>info@helphumanrights.com.pk
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <FaPhoneAlt className="text-lg mr-2" />
                  <span className='text-white'>021-34922256</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-lg mr-2" />
                  <span className='text-white'>Askari Amusement Park, Old Sabzi Mandi, near Faizan e Madina، Gulshan-e-Iqbal,Karachi,75300</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-3 border-blueGray-300 shadow-2xl border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold ">
              Copyright © <span id="get-current-year" className='text-white'>2024</span>
              <a className="hover:text-gray-300" target="_blank" href="#"> HELP</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
