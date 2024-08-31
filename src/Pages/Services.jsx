import React from 'react';

const Services = () => (
  <section className="bg-gray-100 p-6">
    <h2 className="text-3xl font-bold text-center"><span> Our Services </span></h2>
    <div className="mt-4 space-y-4">
      <div className="bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold text-red-400">Wedding Planning</h3>
        <p className="mt-1">We offer complete wedding planning services, from venue selection to decorations and catering.</p>
      </div>
      <div className="bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold text-red-400">Financial Assistance</h3>
        <p className="mt-1">We provide financial support to cover wedding expenses for those in need.</p>
      </div>
      <div className="bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold text-red-400">Counseling Services</h3>
        <p className="mt-1">Our team offers pre-marriage counseling to help couples build a strong foundation for their future.</p>
      </div>
    </div>
  </section>
);

export default Services;
