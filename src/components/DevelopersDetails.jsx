import React, { useRef } from 'react';
import './DevelopersDetails.css';
import { useNavigate } from 'react-router-dom';

export default function DeveloperDetails() {
  const cardsRef = useRef(null);
  const navigate = useNavigate();

  const handleWheelScroll = (event) => {
    if (cardsRef.current) {
      event.preventDefault(); // Prevent vertical scroll
      cardsRef.current.scrollLeft += event.deltaY * 1.5; // Smooth horizontal scroll
    }
  };

  return (
    <div className='developer-details'>
      <h1>Developer Details</h1>
      <div 
        className="cards" 
        ref={cardsRef} 
        onWheel={handleWheelScroll}
      >
        {["Skills", "Projects", "Certifications", "Experience", "Recommendations", "Contact Me"].map((text, index) => (
          <Card key={index} image={`https://picsum.photos/seed/${text.replace(/\s/g, '')}/250/200`} text={text} onNavigate={navigate} />
        ))}
      </div>
    </div>
  );
}

function Card({ image, text, onNavigate }) {
  return (
    <div className='card' onClick={() => onNavigate(`/${text.toLowerCase().replace(/\s/g, '-')}`)}>
      <img src={image} className='card-image' alt='developer' />
      <div className='overlay'>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  );
}

