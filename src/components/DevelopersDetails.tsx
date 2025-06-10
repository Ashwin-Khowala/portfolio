import { useRef } from 'react';
import './DevelopersDetails.css';
import { useRouter } from 'next/navigation';

export default function DeveloperDetails() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleWheelScroll = (event:any) => {
    if (cardsRef.current && window.innerWidth >= 768) { // Only for medium and up
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY * 1.5;
    }
  };

  return (
    <div className='developer-details w-screen p-4'>
      <h1 className="text-3xl font-bold mb-4">Developer Details</h1>
      <div
        className="cards flex flex-col items-center md:flex-row gap-4 overflow-x-auto "
        ref={cardsRef}
        onWheel={handleWheelScroll}
      >
        {["Skills", "Projects", "Certifications", "Experience", "Recommendations", "Contact Me"].map((text, index) => (
          <Card
            key={index}
            image={`https://picsum.photos/seed/${text.replace(/\s/g, '')}/250/200`}
            text={text}
            onNavigate={router}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ image, text, onNavigate }:any) {
  return (
    <div
      className='card min-w-[250px] cursor-pointer relative rounded overflow-hidden shadow-lg w-full '
      onClick={() => onNavigate.push(`/${text.toLowerCase().replace(/\s/g, '-')}`)}
    >
      <img src={image} className='card-image w-full h-auto' alt='developer' />
      <div className='overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <p className='card-text text-white font-bold text-lg'>{text}</p>
      </div>
    </div>
  );
}