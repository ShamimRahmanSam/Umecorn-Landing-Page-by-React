import React from 'react';

const AboutSection = () => {
  return (
    <section className="text-center h-auto px-4 py-8 md:px-11 md:py-14 lg:px-14 lg:py-20 2xl:px-[21rem] bg-white text-[#00000A] mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl p-2 md:p-3 lg:px-12 2xl:px-20 2xl:p-7 2xl:font-extrabold mb-3">
        Revolutionising Global Understanding through Data
      </h1>
      <p className="text-[#212126] md:text-lg lg:text-xl 2xl:text-2xl space-y-6">
        The Umecorn Platform has been developed by industry experts and leaders in the field of Big Data, AI, and Gen AI to unlock totally unique tools that are revolutionizing the way we understand people across various{' '}
        <a href="#cases" className="text-blue-500 underline">
          Use Cases
        </a>
        . Umecorn wants to encourage individuals and organizations globally to use our platform. The more data we see, the better our tools become and the more we can help people access better products. As such, Umecorn offers all individual users an incentive to sign up with us exclusively for the purpose of generating a Social Score. To learn more, please read{' '}
        <a href="#incentive" className="text-blue-500 lg:underline">
          Umecorn Incentive
        </a>
        .
      </p>
    </section>
  );
};

export default AboutSection;
