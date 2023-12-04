import React, { useState } from 'react'
import addIcon from '../assets/icons/addIcon.svg'

const Accordion = ({ heading, description }) => {

  const [accordion, openAccordion] = useState([0, 0, 0, 0, 0]);

  const openAcc = (index) => {
    openAccordion((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = prevArray[index] === 0 ? 1 : 0;
      return newArray;
    });
  };

  return (
    <div className="bg-[#f7f8fd] rounded-xl my-5 py-5 px-5">
      <div className="flex justify-between items-center" onClick={() => openAcc(0)}>
        <h4
          className="font-bold text-[22px] md:text-[26px] "
          style={{ color: `${accordion[0] === 1 ? "#8247ff" : "#1c1c1c"}` }}
        >
          {heading}
        </h4>
        <img
          src={addIcon}
          alt="Add Icon"
          className="accordion-icon"
          style={{
            transform: `${accordion[0] === 1 ? "rotate(45deg)" : "none"}`,
          }}
        />
      </div>

      <p
        className="font-medium text-[#6c757d]"
        style={{
          display: `${accordion[0] === 1 ? "block" : "none"}`,
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default Accordion