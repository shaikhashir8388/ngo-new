import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen text-red-600">
      <div
        className="md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/logo.jpg')" }}

      >
        {/* Placeholder image URL, replace with your own image URL */}
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-red-600 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 shadow-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-600 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 shadow-lg text-red-600 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-red-600 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-600 hover:bg-white hover:text-red-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
