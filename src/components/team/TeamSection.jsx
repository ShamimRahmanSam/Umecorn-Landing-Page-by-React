import React, { useState, useEffect } from 'react';
import Modal from './Modal'; 
import jordanImage from '../../assets/team/jordan.png';
import anowarImage from '../../assets/team/anwar bhai.png';
import ianImage from '../../assets/team/lan.png';
import prashantImage from '../../assets/team/kumar.png';
import drImage from '../../assets/team/dr.png';
import faisalImage from '../../assets/team/faisal bhai.png';
import dawnImage from '../../assets/team/dawn.png';
import justinImage from '../../assets/team/justin.png';


const teamMembers = [
  {
    name: "Jordan Taylor",
    role: "Founder and Group CEO",
    description: "A systems designer with a deep working knowledge of consumer credit and related systems. He has designed, documented...",
    image: jordanImage,
    modalId: 'modalJordan',
    modalContent: " A systems designer with a deep working knowledge of consumer credit and related systems. He has designed, documented and built successful loan product platforms including the first fully online car retailer and finance broker in the UK integrated with over 50 lenders and dozens of large UK car dealerships. He is a founder of Baskefy Ltd a multi-lender digital point of sale finance solution and advisor to a Forever 8 Inc, a Nasdaq listed inventory finance business.",
  },
  {
    name: "Anowar Hossain",
    role: "Co-Founder and Chief Technology Officer",
    description: "A tech specialist and experienced digital operator, skilled in architecting technical platforms, and developing infrastructure...",
    image: anowarImage,
    modalId: 'modalAnowar',
    modalContent: "A tech specialist and experienced digital operator, skilled in architecting technical platforms, and developing infrastructure builds across multiple sectors, including financial services, automotive and media. Having completed hundreds of integrations across varied businesses and projects, Anowar is able to clearly define and translate business requirements into robust automated processes to maximize opportunities. He is a founder of DocTime Limited.",
  },
  {
    name: "Ian Feeney",
    role: "Co-Founder and CEO Umecorn Career",
    description: "Ian is a prominent visionary leader in the talent acquisition and HR technology space, bringing over two decades of unp...",
    image: ianImage,
    modalId: 'modalFeeney',
    modalContent: " Ian is a prominent visionary leader in the talent acquisition and HR technology space, bringing over two decades of unparalleled expertise. Most recently, he served as the Director of Talent Acquisition for EMEA at the global IT leader, Dell Technologies, where he spearheaded the integration of cutting-edge HR solutions that transformed the organisation's recruitment capabilities. As the global lead for Dell's Innovation Council, Ian pioneered the identification and implementation of transformative talent technologies. His unwavering commitment to data-driven insights and masterful approach to driving organisational change have been instrumental in professionalising recruitment processes, elevating the candidate experience, and ensuring strategic alignment. Now, Ian draws from his previous entrepreneurial experience in the SaaS domain to channel his energy into developing Umecorn, a game-changing recruitment enablement platform poised to disrupt the talent acquisition and HR technology markets. Recognised as a trusted advisor and driving force within the industry, Ian's deep domain expertise and innovative spirit have solidified his reputation as a leader in this space.",
  },
  {
    name: "Prashant Kumar",
    role: "Chief Data and Strategy Officer",
    description: "Prashant Kumar is the Chief Innovation Officer for Elisa Polystar. In this role, he is responsible for exploring new concepts...",
    image: prashantImage,
    modalId: 'modalKumar',
    modalContent: "  Prashant Kumar is the Chief Innovation Officer for Elisa Polystar. In this role, he is responsible for exploring new concepts and directions for our portfolio. In addition, he is currently serving as advisor to a few deep tech start-ups and scales in the domain of AI/ML, cloud infrastructure and scaled customer applications. Previously, he was CTO and a co-founder of Cardinality Limited where he successfully led the product portfolio, strategy and direction of the organisation and raising multiple rounds of funding. He was pivotal in convincing some of the Tier-1 operators on the Cardinality platform and delivered some of the first and biggest big data solutions harnessing the power of billions of events everyday. Before founding Cardinality, Prashant spent over a decade working with major telecommunications service providers like Telefonica, Deutsche Telekom, Hutchison (3), and AT&T. During this time, he was the architect of some of the biggest online charging solutions. Whilst working for Telefonica UK he was responsible for the solution architecture of their big data analytics solution; he evaluated potential suppliers and prototyping approaches, architected the solution and assisted in the implementation of one of Europe’s largest Hadoop clusters. Prashant has a Master's degree from London School of Economics, focusing on System Design in Context and a Bachelor's degree in software engineering focusing on designing scalable business data systems and mobile communication protocols.",
  },
  {
    name: "Dr of Psychometrics",
    role: "Chief Psychometrics Officer",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a...",
    image: drImage,
    modalId: 'modalDr',
    modalContent: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    name: "Faisal Mohammad",
    role: "Head of Engineering",
    description: "A computer science graduate and specialist in architecting technical platforms, overseeing development proje...",
    image: faisalImage,
    modalId: 'modalFaisal',
    modalContent: "A computer science graduate and specialist in architecting technical platforms, overseeing development projects, team management, infrastructure builds and UI/UX design across industries such as financial services, logistics, e-commerce, retail, and healthcare. He has over 14 years of  technical development and leadership expertise across Europe, the Middle East, and Asia.",
  },
  {
    name: "Dawn Coulter",
    role: "Chief Marketing Officer",
    description: "A brand expert with 25 years’ experience in brand strategy, communications, positioning and re-positioning. Former Global Head of ...",
    image: dawnImage,
    modalId: 'modalDawn',
    modalContent: "A brand expert with 25 years’ experience in brand strategy, communications, positioning and re-positioning. Former Global Head of Strategy with McCann Erickson Worldwide.. Dawn has worked with international brands, including Smythson; Hackett; Sergio Rossi; Credit Suisse; Gucci Group; M&S  Pepe Jeans London; Unilever Ice Cream and Frozen Food; Forte Hotels.",
  },
  {
    name: "Justin Inniss",
    role: "Chief Commercial Officer",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a...",
    image: justinImage,
    modalId: 'modalJustin',
    modalContent: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
];


const TeamSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';  // Disable scrolling
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';    // Enable scrolling
  };

  const currentMember = teamMembers.find(member => member.modalId === activeModal);

  return (
    <>
      <section id="team" className="pt-8 pb-12 bg-white text-center px-4 md:px-10 md:py-12 md:pb-16 lg:pt-16 xl:pt-20 2xl:px-[12rem]">
        <div className="max-w-3xl 2xl:max-w-5xl mx-auto text-center mb-6 lg:mb-8">
          <h2 className="text-[#00000A] font-bold 2xl:font-extrabold text-2xl pb-1 md:text-3xl lg:text-4xl 2xl:text-5xl">Our Team</h2>
          <p className="text-[#212126] text-base pt-3 lg:text-xl 2xl:text-2xl pb-2">
            Umecorn was founded and built by a team of industry experts in Recruitment, HR, Big Data, AI, Psychometrics and Technology. We are a team that is committed to unlocking the potential in people that traditional methods cannot do. We believe in the power of perception and community.
          </p>
        </div>

        <div className="max-w-full mx-auto gap-8 md:gap-10 lg:gap-11 xl:gap-12 2xl:gap-14 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative transition-transform duration-300 ease-in-out hover:translate-y-[-0.2rem] bg-white">
              <div className="rounded-2xl p-2 transition-shadow duration-300 ease-in-out group-hover:shadow-[0px_6px_24px_0px_#0000000F]">
                <img src={member.image} alt={member.name} className="w-28 h-28 mx-auto rounded-full mb-4 lg:w-36 lg:h-36" />
                <h3 className="text-[#00000A] font-bold text-xl lg:text-2xl lg:py-2">{member.name}</h3>
                <p className="text-[#606066] text-sm lg:text-base font-normal">{member.role}</p>
                <p className="text-[#212126] py-2 pb-1 text-sm lg:text-base font-normal lg:py-4">{member.description}</p>
                <button className="text-[#2F45FF] text-sm underline lg:text-base font-normal" onClick={() => openModal(member.modalId)}>
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modals */}
      {activeModal && (
        <Modal
          key={currentMember.modalId}
          id={currentMember.modalId}
          image={currentMember.image}
          name={currentMember.name}
          title={currentMember.role}
          description={currentMember.modalContent}
          onClose={closeModal}
          isVisible={!!activeModal}
        />
      )}
    </>
  );
};

export default TeamSection;
