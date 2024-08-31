import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import backImage from '../images/backreomove.png';

const DonationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: '',
    category: 'health',
    name: '',
    phone: '',
    email: '',
    paymentMethod: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleTabClick = (stepNumber) => {
    setStep(stepNumber);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      category: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className='flex justify-center items-center min-h-screen w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] m-auto mt-10 shadow-2xl border-l-8 border-b-8 border-red-400'
      style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover' }}
    >
      <div className='bg-white w-full p-6 rounded-md shadow-xl mt-10 relative bottom-12'>
        <div className='text-center mb-6'>
          <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
            <span style={{ color: 'red', fontWeight: 'bold' ,fontSize:'30px'}}>
              <Typewriter
                words={['You Help.', 'We Donate.', 'Make a Difference.', 'Support a Cause.', 'Help Those in Need.', 'Change Lives.']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div className='flex justify-between mb-6 space-x-2'>
          <button
            className={`p-1 w-1/3 ${step === 1 ? 'bg-red-500 text-white' : 'bg-transparent hover:bg-red-500 text-red-700'} font-semibold py-1 border ${step === 1 ? 'border-transparent' : 'border-red-500'} hover:text-white rounded transition duration-300`}
            onClick={() => handleTabClick(1)}
          >
            Make A Donation
          </button>
          <button
            className={`p-1 w-1/3 ${step === 2 ? 'bg-red-500 text-white' : 'bg-transparent hover:bg-red-500 text-red-700'} font-semibold py-1 border ${step === 2 ? 'border-transparent' : 'border-red-500'} hover:text-white rounded transition duration-300`}
            onClick={() => handleTabClick(2)}
          >
            Your Details
          </button>
          <button
            className={`p-1 w-1/3 ${step === 3 ? 'bg-red-500 text-white' : 'bg-transparent hover:bg-red-500 text-red-700'} font-semibold py-1 border ${step === 3 ? 'border-transparent' : 'border-red-500'} hover:text-white rounded transition duration-300`}
            onClick={() => handleTabClick(3)}
          >
            Payment Method
          </button>
        </div>

        {step === 1 && (
          <div className='space-y-4'>
            <h3 className='text-red-500 text-2xl font-bold'>Make A Donation</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            <div>
              <input
                type="number"
                name="amount"
                placeholder='Enter Amount (Rs)'
                className='border rounded-full border-black p-2 w-full'
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <select
                name="category"
                className='border rounded-full border-black p-2 w-full'
                value={formData.category}
                onChange={handleCategoryChange}
              >
                <option value="health">Health</option>
                <option value="food">Food</option>
                <option value="social welfare">Social Welfare</option>
                <option value="shelter">Shelter</option>
                <option value="education">Education</option>
              </select>
            </div>
            <div className='flex justify-end'>
              <button
                className='bg-red-500 text-white font-semibold py-1 px-3 border border-red-500 hover:border-transparent rounded transition duration-300'
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className='space-y-4'>
            <h3 className='text-red-500 text-2xl font-bold'>Your Details</h3>
            <div>
              <input
                type="text"
                name="name"
                placeholder='First Name'
                className='border rounded-full border-black p-2 w-full'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder='Phone Number'
                className='border rounded-full border-black p-2 w-full'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder='Email Address'
                className='border rounded-full border-black p-2 w-full'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='flex justify-between'>
              <button
                className='bg-red-500 text-white font-semibold py-1 px-3 border border-red-500 hover:border-transparent rounded transition duration-300'
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className='bg-red-500 text-white font-semibold py-1 px-3 border border-red-500 hover:border-transparent rounded transition duration-300'
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className='space-y-4'>
            <h3 className='text-red-500 text-2xl font-bold'>Payment Method</h3>
            <div>
              <select
                name="paymentMethod"
                className='border rounded-full border-black p-2 w-full'
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="visa">Visa Card</option>
                <option value="jazzcash">Jazz Cash</option>
                <option value="easypaisa">Easy Paisa</option>
              </select>
            </div>
            <div className='flex justify-between'>
              <button
                className='bg-red-500 text-white font-semibold py-1 px-3 border border-red-500 hover:border-transparent rounded transition duration-300'
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className='bg-red-500 text-white font-semibold py-1 px-3 border border-red-500 hover:border-transparent rounded transition duration-300'
                onClick={handleSubmit}
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationForm;