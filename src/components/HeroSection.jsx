import React from 'react';
import heroImage from '../assets/heroImage.png'; // Adjust the path as necessary
import curveImage from '../assets/Curve.svg'; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-blue-500 to-blue-900 text-center text-white pt-24"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold lg:font-extrabold px-3 mt-3 md:px-0 md:mt-6 md:mb-1 2xl:mt-14 lg:mt-12 2xl:mt-20">
        Perception into Science
      </h1>
      <p className="mx-auto text-base font-normal max-w-xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl md:text-lg lg:text-xl 2xl:text-2xl 2xl:leading-9 mb-5 md:mb-7 2xl:mb-16 p-3 md:p-4 lg:p-6 lg:mb-10 2xl:mt-4">
        Umecorn is a Research and Development Company in the Psychometrics space. Umecorn provides a highly sophisticated social referencing tool that allows third parties to score people's core character traits and behavioral propensities. Umecorn goes way beyond self-perception tools and leverages the knowledge and assessments of others.
      </p>

      <div className="relative">
        <img
          src={heroImage}
          alt="Devices"
          className="mx-auto w-[319px] md:w-[677px] lg:w-[850px] 2xl:w-[1000px] h-auto object-contain"
        />

        <img
          src={curveImage}
          alt="Curve Decoration"
          className="absolute inset-x-0 bottom-[-4px] md:mb-[-20px] lg:mb-[-30px] 2xl:mb-[-50px] w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
