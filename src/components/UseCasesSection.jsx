import React from 'react';

const UseCasesSection = () => {
  return (
    <section id="usecases" className="py-16 bg-white text-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Case 1</h3>
            <p className="text-gray-700">Description of use case 1...</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Case 2</h3>
            <p className="text-gray-700">Description of use case 2...</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Case 3</h3>
            <p className="text-gray-700">Description of use case 3...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
