import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white text-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-md"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="block w-full py-4 bg-blue-500 text-white font-bold rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

