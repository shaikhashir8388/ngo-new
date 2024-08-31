import  { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', form);
  };

  return (
    <section className="bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form className="mt-4 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded-md" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
