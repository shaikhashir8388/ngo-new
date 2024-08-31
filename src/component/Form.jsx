import React, { useState } from 'react';

const Form = () => {
  const [activeSection, setActiveSection] = useState('amount');

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('path-to-your-background-image.jpg')` }}>
      <div className="flex justify-center pt-10">
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white" onClick={() => setActiveSection('amount')}>Amount</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white" onClick={() => setActiveSection('details')}>Details</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white" onClick={() => setActiveSection('payment')}>Payment</button>
      </div>
      
      {activeSection === 'amount' && ( 
        <div className="mt-10 p-4 bg-white max-w-md mx-auto shadow-lg rounded-lg">
          <h2 className="text-2xl mb-4">Enter Your Contribution Amount (PKR) </h2>
          <input className="block w-full mb-4 p-2 border" type="text" placeholder="Amount" />
          
          <h2 className="text-2xl mb-4">Donation For</h2>
          <select className="block w-full mb-4 p-2 border">
            <option value="choose">Choose Option</option>
            <option value="palestine">Donation For Palestine</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="food">Food</option>
            <option value="social-welfare">Social Welfare</option>
            <option value="shelter">Shelter</option>
            <option value="zakat">Zakat</option>
            <option value="fitera">Fitera</option>
          </select>
          <button className="mx-2 px-4 py-2 bg-blue-500 text-white" onClick={() => setActiveSection('details')}>Next</button>
        </div>
      )}
      
      {activeSection === 'details' && (
        <div className="mt-10 p-4 bg-white max-w-md mx-auto shadow-lg rounded-lg">
          <h2 className="text-2xl mb-4">Details</h2>
          <input className="block w-full mb-4 p-2 border" type="text" placeholder="Name" />
          <input className="block w-full mb-4 p-2 border" type="email" placeholder="Email" />
          <input className="block w-full mb-4 p-2 border" type="password" placeholder="Password" />
          <button className="mx-2 px-4 py-2 bg-blue-500 text-white" onClick={() => setActiveSection('amount')}>Previous</button>
          <button className="mx-2 px-4 py-2 bg-blue-500 text-white" onClick={() => setActiveSection('payment')}>Next</button>
        </div>
      )}
      
      {activeSection === 'payment' && (
        <div className="mt-10 p-4 bg-white max-w-md mx-auto shadow-lg rounded-lg">
          <h2 className="text-2xl mb-4">Payment</h2>
          <select className="block w-full mb-4 p-2 border">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <button className="mx-2 px-4 py-2 bg-blue-500 text-white" onClick={() => alert('Form Submitted')}>Submit</button>       
        </div>
      )}
    </div>
  );
}

export default Form;
