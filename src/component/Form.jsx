import React, { useState } from 'react';

const Form = () => {
  const [activeSection, setActiveSection] = useState('amount');
  const [formData, setFormData] = useState({
    amount: '',
    donationFor: '',
    name: '',
    email: '',
    password: '',
    paymentMethod: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple validation (can be enhanced)
  const validateSection = () => {
    if (activeSection === 'amount' && (!formData.amount || !formData.donationFor)) {
      alert('Please fill in the amount and donation type.');
      return false;
    }
    if (activeSection === 'details' && (!formData.name || !formData.email || !formData.password)) {
      alert('Please fill in all the details.');
      return false;
    }
    if (activeSection === 'payment' && !formData.paymentMethod) {
      alert('Please choose a payment method.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateSection()) {
      // Here you can handle the form submission, e.g., send the data to an API
      alert('Form Submitted Successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('path-to-your-background-image.jpg')` }}>
      <div className="flex justify-center pt-10">
        <button className="mx-2 px-4 py-2 bg-red-600 text-white" onClick={() => setActiveSection('amount')}>Amount</button>
        <button className="mx-2 px-4 py-2 bg-red-600 text-white" onClick={() => setActiveSection('details')}>Details</button>
        <button className="mx-2 px-4 py-2 bg-red-600 text-white" onClick={() => setActiveSection('payment')}>Payment</button>
      </div>

      {activeSection === 'amount' && (
        <div className="mt-10 p-4 bg-white max-w-md mx-auto shadow-lg rounded-lg">
          <h2 className="text-2xl mb-4">Enter Your Contribution Amount (PKR)</h2>
          <input
            name="amount"
            className="block w-full mb-4 p-2 border"
            type="text"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
          <h2 className="text-2xl mb-4">Donation For</h2>
          <select
            name="donationFor"
            className="block w-full mb-4 p-2 border"
            value={formData.donationFor}
            onChange={handleInputChange}
          >
            <option value="">Choose Option</option>
            <option value="palestine">Donation For Palestine</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="food">Food</option>
            <option value="social-welfare">Social Welfare</option>
            <option value="shelter">Shelter</option>
            <option value="zakat">Zakat</option>
            <option value="fitera">Fitera</option>
          </select>
          <button
            className="mx-2 px-4 py-2 bg-red-600 text-white"
            onClick={() => validateSection() && setActiveSection('details')}
          >
            Next
          </button>
        </div>
      )}

      {activeSection === 'details' && (
        <div className="mt-10 p-4 bg-white max-w-md mx-auto shadow-lg rounded-lg">
          <h2 className="text-2xl mb-4">Details</h2>
          <input
            name="name"
            className="block w-full mb-4 p-2 border"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            name="email"
            className="block w-full mb-4 p-2 border"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            name="password"
            className="block w-full mb-4 p-2 border"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button className="mx-2 px-4 py-2 bg-red-600 text-white" onClick={() => setActiveSection('amount')}>Previous</button>
          <button
            className="mx-2 px-4 py-2 bg-red-600 text-white"
            onClick={() => validateSection() && setActiveSection('payment')}
          >
            Next
          </button>
        </div>
      )}

      {activeSection === 'payment' && (
        <div className="mt-10 p-4 bg-white max-w-md mx-auto shadow-lg rounded-lg">
          <h2 className="text-2xl mb-4">Payment</h2>
          <select
            name="paymentMethod"
            className="block w-full mb-4 p-2 border"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="">Choose Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <button className="mx-2 px-4 py-2 bg-red-600 text-white" onClick={() => setActiveSection('details')}>Previous</button>
          <button className="mx-2 px-4 py-2 bg-red-600 text-white" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Form;
