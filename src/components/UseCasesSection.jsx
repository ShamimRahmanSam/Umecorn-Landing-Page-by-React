import React from 'react';
import icon1 from '../assets/Colored Icon 1.svg';
import icon2 from '../assets/Colored Icon 2.svg';
import icon3 from '../assets/Colored Icon 3.svg';

const useCases = [
  {
    title: 'Umecorn for Recruitment',
    description:
      'Umecorn offers Employers and Recruiters new ways of understanding applicants. The recruitment process needs to ensure cultural fit and character matching for specific roles.',
    imgSrc: icon1,
    altText: 'Icon for Recruitment',
  },
  {
    title: 'Umecorn for Employers',
    description:
      'Umecorn allows employers to unlock the true dynamics happening in the workplace. All anonymised referrals and the unique scoring tools allow employers to see blind spots and other issues that may otherwise go unseen.',
    imgSrc: icon2,
    altText: 'Icon for Employers',
  },
  {
    title: 'Umecorn for Financial Institutions',
    description:
      'Umecorn provides new ways for lenders, banks, insurance companies, and other financial institutions to understand applicants’ intentions and propensities. This drives financial inclusion across the developing world, especially in the absence of predictive credit data.',
    imgSrc: icon3,
    altText: 'Icon for Financial Institutions',
  },
];

const UseCasesSection = () => {
  return (
    <section id="cases" className="pt-4 pb-8 md:pb-14 lg:pb-20 2xl:pb-12 bg-[#F7F7F7] lg:pt-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center text-[#00000A] p-4 md:p-10 md:pb-6 lg:px-[8rem] 2xl:px-[30rem] 2xl:font-extrabold 2xl:text-5xl 2xl:pt-16">
        The Umecorn platform has a number of key use cases
      </h2>
      <div className="grid grid-cols-1 gap-3 md:gap-4 lg:gap-6 px-3 md:px-10 lg:px-12 lg:grid-cols-3 2xl:px-[12rem] 2xl:py-12 2xl:gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white p-4 rounded-lg text-center">
            <img
              src={useCase.imgSrc}
              alt={useCase.altText}
              className="mx-auto mb-2 md:h-24 md:w-24 lg:h-[104px] lg:w-[104px]"
            />
            <h3 className="text-lg md:text-xl mb-2 text-[#00000A] font-bold 2xl:text-2xl">
              {useCase.title}
            </h3>
            <p className="text-[#212126] text-sm md:text-base font-normal 2xl:text-lg">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
