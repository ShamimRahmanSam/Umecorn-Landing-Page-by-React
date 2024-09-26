import React from 'react';
import closeIcon from '../../assets/closeButton/close.svg';


const Modal = ({ id, image, name, title, description, onClose }) => {
  return (
      <div id={id} className={`p-4 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${onClose ? '' : 'hidden'}`}>
          <div className="bg-white rounded-lg p-4 lg:p-8 max-w-lg w-full sm:w-11/12 sm:max-w-full mx-auto sm:h-auto h-auto max-h-[90%] overflow-y-auto lg:w-[858px]">
              <button className="text-[#606066] hover:text-gray-700 float-right" onClick={onClose}>
              <img src={closeIcon} alt="close" className="w-5 h-5" />
              </button>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start">
                  <div className="flex flex-col md:gap-4 md:pb-4 md:flex-row items-start md:items-center">
                      <img src={image} alt={name} className="flex items-start h-16 w-16 md:w-28 md:h-28 rounded-full mb-2 md:mb-0" />
                      <div className="md:ml-4 text-left md:text-left">
                          <h3 className="text-[#00000A] text-xl md:text-3xl font-bold md:pb-2">{name}</h3>
                          <p className="text-[#606066] text-sm md:text-xl">{title}</p>
                      </div>
                  </div>
              </div>
              <p className="text-start text-[#212126] font-normal mt-4 text-base md:text-lg">{description}</p>
          </div>
      </div>
  );
};

export default Modal;
