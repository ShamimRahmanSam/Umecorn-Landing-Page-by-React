import React, { useEffect, useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');
    setSubmitDisabled(!allFieldsFilled);
  }, [formData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section className="flex flex-col items-center justify-center bg-[#0A0B5C] px-3 pt-8 pb-8 md:pt-14 md:pb-14 lg:pt-[72px] 2xl:pb-[5.5rem]">
      <h2 className="text-2xl font-bold text-center text-white mb-3 lg:mb-8 md:text-3xl lg:text-4xl 2xl:text-5xl">Contact Us</h2>
      <p className="text-center text-white mb-4 font-normal md:text-lg lg:text-xl md:px-10 lg:px-32 xl:px-[12rem] 2xl:px-[30rem]">
        In order to understand how our unique solution can help your business, please fill in this contact form and we will respond to you as soon as possible.
      </p>
      <p className="text-center text-white mb-4 font-normal md:text-lg md:mb-8">
        You can also email us at <a href="mailto:enquiries@umecorn.com" className="font-normal text-[#85A8FF] md:text-lg">enquiries@umecorn.com</a>
      </p>

      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl bg-white rounded-xl lg:rounded-2xl shadow-lg px-3 md:px-6 pt-4 md:pt-8 pb-3 md:pb-6">
        <form className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div className="pb-6 md:pb-0">
            <label htmlFor="fullName" className="block text-sm font-normal text-[#45454D] md:pb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              className="mt-1 block w-full h-[48px] md:h-[56px] px-4 py-3 border border-[#E4E4E5] rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base placeholder-[#CCCACA]"
              onChange={handleInputChange}
            />
          </div>

          <div className="pb-6 md:pb-0">
            <label htmlFor="company" className="block text-sm font-normal text-[#45454D] md:pb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              placeholder="Enter your company name"
              className="mt-1 block w-full h-[48px] md:h-[56px] px-4 py-3 border border-[#E4E4E5] rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base placeholder-[#CCCACA]"
              onChange={handleInputChange}
            />
          </div>

          <div className="pb-6 md:pb-0">
            <label htmlFor="email" className="block text-sm font-normal text-[#45454D] md:pb-1">
              Business Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter business email address"
              className="mt-1 block w-full h-[48px] md:h-[56px] px-4 py-3 border border-[#E4E4E5] rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base placeholder-[#CCCACA]"
              onChange={handleInputChange}
            />
          </div>

          <div className="pb-6 md:pb-0">
            <label htmlFor="phone" className="block text-sm font-normal text-[#45454D] md:pb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              className="mt-1 block w-full h-[48px] md:h-[56px] px-4 py-3 border border-[#E4E4E5] rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base placeholder-[#CCCACA]"
              onChange={handleInputChange}
            />
          </div>

          <div className="md:col-span-2 relative pb-4 md:pb-2">
            <label htmlFor="message" className="block text-sm font-normal text-[#45454D] md:pb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write your message here ..."
              rows="5"
              className="mt-1 block w-full h-[136px] py-2 px-4 border border-[#E4E4E5] rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base placeholder-[#CCCACA] resize-none"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="pb-0 md:col-span-2 flex justify-center">
            <button
              id="submitBtn"
              type="submit"
              className={`w-full h-[48px] md:w-[152px] lg:w-[224px] lg:h-[56px] inline-flex justify-center py-3 px-6 lg:items-center border border-transparent shadow-sm text-sm font-medium rounded-lg text-white ${
                isSubmitDisabled ? 'bg-[#B3CCFF]' : 'bg-blue-500'
              }`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
