import React from 'react';
import incentiveImage from '../../assets/incentive/incentive.svg'; 

const IncentiveSection = () => {
  return (
    <section
      id="incentive"
      className="p-3 pt-8 pb-8 md:p-8 2xl:pb-16 bg-[#E8F1FF] lg:px-12 lg:py-20 2xl:py-24 2xl:px-[12rem]"
    >
      <div className="flex flex-col 2xl:flex-row items-start gap-8 2xl:gap-16"> 
        <div className="flex-shrink-0">
          <img
            src={incentiveImage}
            alt="Umecorn Incentive"
            className="w-[215px] h-[215px] md:w-[352px] md:h-[352px] 2xl:w-[480px] 2xl:h-[480px]"
          />
        </div>

        <div className="flex-grow">
          <h2 className="text-blue-500 font-bold sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-2 lg:mb-4">Umecorn Incentive</h2>

          <h1 className="mb-2 text-[#00000A] font-bold 2xl:font-extrabold text-2xl md:text-3xl lg:text-[36px] 2xl:text-5xl lg:mb-4">
            Generate your Umecorn Social Score exclusively with us and receive benefits
          </h1>

          <p className="text-[#212126] sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-5 md:text-lg lg:mb-6">
            Umecorn aims to build the largest Social Scoring platform on the globe. To do that, it needs you. The more
            people and organisations that use our platform, the better we can optimise our tools with our Data team. The
            better we can optimise our tools, the more value we can add to job candidates and loan applicants all over
            the world. We want you to only use Umecorn for your Social Score and Referencing. As such, if you sign up
            with us and do so exclusively, you form part of the Umecorn Benefit pool where we allocate 20% of the
            company’s profits. These profits are then paid out to the benefit pool OR the payments can be forgone, and
            the profits sent to a charity of your choice.
          </p>

          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-base font-bold px-10 py-3 rounded-lg lg:px-16 lg:py-4"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default IncentiveSection;
