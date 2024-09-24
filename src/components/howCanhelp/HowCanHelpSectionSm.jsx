import React from 'react';
import image1 from '../../assets/howCanHelp/help image 1.png';
import image2 from '../../assets/howCanHelp/help image 2.png';
import image3 from '../../assets/howCanHelp/help image 3.png';
import image4 from '../../assets/howCanHelp/help image 4.png';
import arrowImage from '../../assets/howCanHelp/arrow-right.svg';

const HelpSectionSm = () => {
  const helpItems = [
    {
      title: "Umecorn for Employers",
      description:
        "Do you want a deeper and more transparent understanding of what is happening in your workplace? Register your organisation here and unlock the true dynamics and potential of your workforce.",
      imgSrc: image1,
    },
    {
      title: "Umecorn for Recruitment",
      description:
        "Do you want to make better hires? Do you want to optimise the process and save time? Register your organisation here and revolutionise the way you recruit.",
      imgSrc: image2,
    },
    {
      title: "Umecorn for Financial Institutions",
      description:
        "Do you want to truly understand the intention and risk of new potential customers? Register your organisation here and revolutionise the way you underwrite.",
      imgSrc: image3,
    },
    {
      title: "Umecorn for Individuals",
      description:
        "Want to know your Umecorn Social Score? Find out how you are truly perceived by others. Understand your strengths and the areas that need some work. Get insights into the type of roles that may be ideal for you based on your character maps. Access exclusive training tools to help you improve your Social Score over time. Also seamlessly offer referrals to other Umecorn members and enhance your own reliability scores.",
      imgSrc: image4,
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white lg:hidden">
      <div className="container mx-auto px-3">
        <h2 className="text-[#00000A] font-bold text-2xl md:text-3xl text-center mb-3">
          How can Umecorn help you?
        </h2>
        <p className="text-center text-[#212126] mb-4 md:text-lg md:px-8">
          Explore tailored solutions for employers, recruiters, and financial institutions; and unlock your Social Score.
        </p>
        <div className="grid grid-cols-12 gap-3 md:gap-6 md:px-8">
          {helpItems.map((item, index) => (
            <div key={index} className="col-span-12 lg:col-span-7 bg-white relative group">
              <div className="shadow rounded-b-xl pb-3 md:pb-5">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-screen h-auto object-cover rounded-t-xl md:h-[308px]"
                />
                <h3 className="px-3 pt-3 md:px-6 md:pt-6 text-xl text-[#212126] font-bold md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-[#212126] font-normal px-3 md:px-6 pt-2 md:pt-4 md:text-lg pb-3 md:pb-4">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <a href="#" className="pl-3 pr-1 md:pl-6 md:pr-2 underline text-[#2F45FF] font-normal md:text-lg">
                    Register Now
                  </a>
                  <img src={arrowImage} alt="Right arrow" /> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSectionSm;
