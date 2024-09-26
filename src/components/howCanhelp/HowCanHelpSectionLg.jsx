import React from 'react';
import img1 from '../../assets/howCanHelp/help image 1.png';
import img2 from '../../assets/howCanHelp/help image 2.png';
import img3 from '../../assets/howCanHelp/help image 3.png';
import img4 from '../../assets/howCanHelp/help image 4.png';
import overlayImg from '../../assets/howCanHelp/Black - Overlay.svg';
import arrowImg from '../../assets/howCanHelp/arrow-right 2.svg';

const helpCases = [
  {
    title: 'Umecorn for Employers',
    description: 'Do you want a deeper and more transparent understanding of what is happening in your workplace? Register your organisation here and unlock the true dynamics and potential of your workforce.',
    imgSrc: img1,
  },
  {
    title: 'Umecorn for Recruitment',
    description: 'Do you want to make better hires? Do you want to optimise the process and save time? Register your organisation here and revolutionise the way you recruit.',
    imgSrc: img2,
  },
  {
    title: 'Umecorn for Financial Institutions',
    description: 'Do you want to truly understand the intention and risk of new potential customers? Register your organisation here and revolutionise the way you underwrite.',
    imgSrc: img3,
  },
  {
    title: 'Umecorn for Individuals',
    description: 'Do you want to gain more control and insight into your own work environment and performance? Register here and get started with Umecorn.',
    imgSrc: img4,
  },
];


const HelpSection = () => {
  return (
    <section className="lg:py-20 bg-white hidden lg:block">
      <div className="container mx-auto px-3">
        <h2 className="text-[#00000A] font-bold lg:text-4xl 2xl:text-5xl text-center lg:mb-6 2xl:font-extrabold">
          How can Umecorn help you?
        </h2>
        <p className="text-center text-[#212126] lg:mb-6 lg:text-xl 2xl:text-2xl lg:px-28 2xl:px-60">
          Explore tailored solutions for employers, recruiters, and financial institutions; and unlock your Social Score.
        </p>
        <div className="grid grid-cols-12 lg:gap-5 2xl:gap-8">
          {helpCases.map((helpCase, index) => {
            const colSpan = index === 1 || index === 2 ? 'lg:col-span-5' : 'lg:col-span-7';
            return (
              <div
                key={index}
                className={`col-span-12 ${colSpan} bg-white rounded-lg relative group overflow-hidden`} // Added overflow-hidden
              >
                <div className="w-full object-cover rounded-t-lg mb-3 lg:h-full relative">
                  <img src={helpCase.imgSrc} alt={helpCase.title} className="w-full object-cover rounded-t-lg lg:h-full" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg transition-all duration-500 ease-in-out group-hover:opacity-0"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end rounded-lg overflow-hidden"> {/* Added overflow-hidden */}
                  <div className="absolute inset-0 rounded-lg transition-all duration-500 ease-in-out bg-transparent group-hover:bg-black group-hover:bg-opacity-50"></div>
                  <img src={overlayImg} alt="black overlay on image" className="lg:w-1 max-w-full" />
                  <h3 className="text-xl font-bold text-white mb-4 px-6 relative transition-all duration-500 ease-in-out group-hover:translate-y-[-8rem]">
                    {helpCase.title}
                  </h3>
                  <div className="absolute bottom-0 w-full py-6 px-6 flex flex-col transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0"> {/* Adjusted translate-y-full */}
                    <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      {helpCase.description}
                    </p>
                    <div className="flex">
                      <a href="#" className="underline pr-2 group-hover:text-white font-semibold transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        Register Now
                      </a>
                      <img src={arrowImg} alt="Right arrow" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
