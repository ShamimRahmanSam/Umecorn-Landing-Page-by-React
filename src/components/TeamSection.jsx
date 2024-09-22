import React, { useState } from 'react';
import jordanImage from '../assets/jordan.png';
import anwarImage from '../assets/anwar bhai.png';

const teamData = [
  {
    id: 1,
    name: 'Jordan Taylor',
    role: 'Founder and Group CEO',
    shortDescription: 'A systems designer with a deep working knowledge of consumer credit and related systems. He has designed, documented an...',
    fullDescription: 'A systems designer with a deep working knowledge of consumer credit and related systems. He has designed, documented and built successful loan product platforms including the first fully online car retailer and finance broker in the UK integrated with over 50 lenders and dozens of large UK car dealerships. He is a founder of Baskefy Ltd a multi-lender digital point of sale finance solution and advisor to a Forever 8 Inc, a Nasdaq listed inventory finance business.',
    image: jordanImage,
  },
  {
    id: 2,
    name: 'Anwar Hossain',
    role: 'Co-Founder and Chief Technology Officer',
    shortDescription: 'A tech specialist and experienced digital operator, skilled in architecting technical platforms, and developing infrastructure...',
    fullDescription: 'A tech specialist and experienced digital operator, skilled in architecting technical platforms, and developing infrastructure builds across multiple sectors, including financial services, automotive and media. Having completed hundreds of integrations across varied businesses and projects, Anowar is able to clearly define and translate business requirements into robust automated processes to maximize opportunities. He is a founder of DocTime Limited.',
    image: anwarImage,
  },
  // Add more team members here
];

const TeamSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleInfo = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="team" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="bg-white p-8 shadow-md rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-center font-semibold mb-4">{member.role}</p>
              <p className="text-gray-700 text-center">
                {expandedId === member.id ? member.fullDescription : member.shortDescription}
              </p>
              <button
                onClick={() => toggleInfo(member.id)}
                className="block mx-auto mt-4 bg-blue-500 text-white py-2 px-4 rounded-full"
              >
                {expandedId === member.id ? 'Show Less' : 'Show More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
