import { useState } from 'react';
import './accordion.css';

const Accordion = ({ title, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;
      setArrowDirection(newIsOpen ? "up" : "down");
      return newIsOpen;
    });
  };

  return (
    <div className="accordion">
      <div className="header" onClick={toggleOpen} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0 }}>{title}</p>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${arrowDirection === 'down' ? 0 : 180}deg)` }}>
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={`content ${isOpen ? "open" : ''}`}>
        {isOpen ?
        <>
         {children}
        </>
        :
         <h2>no</h2>
        }
      </div>
    </div>
  );
};

export default Accordion;
