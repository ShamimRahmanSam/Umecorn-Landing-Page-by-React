import React from 'react';

const HowCanHelpSection = () => {
  return (
    <section id="howcanhelp" className="py-16 bg-gray-200 text-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How We Can Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Service 1</h3>
            <p className="text-gray-700">Details of service 1...</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Service 2</h3>
            <p className="text-gray-700">Details of service 2...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCanHelpSection;
