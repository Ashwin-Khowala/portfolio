import React, { useRef } from 'react';
import './DevelopersDetails.css';
import { useNavigate } from 'react-router-dom';

export default function DeveloperDetails() {
  const cardsRef = useRef(null);

  const handleWheelScroll = (event) => {
    if (cardsRef.current) {
      event.preventDefault(); // Prevent vertical scroll
      cardsRef.current.scrollLeft += event.deltaY; // Horizontal scroll
    }
  };

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route); 
  };

  return (
    <div className='developer-details'>
      <h1>Developer Details</h1>
      <div 
        className="cards" 
        ref={cardsRef} 
        onWheel={handleWheelScroll}
      >
        <Card image="https://picsum.photos/seed/coding/250/200" text="Skills" onNavigate={handleNavigation} />
        <Card image="https://picsum.photos/seed/development/250/200" text="Projects" onNavigate={handleNavigation} />
        <Card image="https://picsum.photos/seed/badge/250/200" text="Certifications" onNavigate={handleNavigation} />
        <Card image="https://picsum.photos/seed/work/250/200" text="Experience" onNavigate={handleNavigation} />
        <Card image="https://picsum.photos/seed/networking/250/200" text="Recommendations" onNavigate={handleNavigation} />
        <Card image="https://picsum.photos/seed/connect/250/200" text="Contact Me" onNavigate={handleNavigation} />
      </div>
    </div>
  );
}

function Card({ image, text, onNavigate }) {
  return (
    <div className='card' onClick={() => onNavigate(`/${text.toLowerCase().replace(' ', '-')}`)}>
      <img src={image} className='card-image' alt='developer' />
      <div className='overlay'>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  );
}
