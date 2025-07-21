import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function DeveloperDetails() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleWheelScroll = (event: any) => {
    if (cardsRef.current && window.innerWidth >= 768) {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY * 2;
    }
  };

  const cardData = [
    { text: "Skills", color: "from-blue-400/70 to-purple-500/70" },
    { text: "Projects", color: "from-green-400/70 to-teal-500/70" },
    { text: "Certifications", color: "from-yellow-400/70 to-orange-500/70" },
    { text: "Experience", color: "from-red-400/70 to-pink-500/70" },
    { text: "Recommendations", color: "from-indigo-400/70 to-blue-500/70" },
    { text: "Contact", color: "from-purple-400/70 to-indigo-500/70" }
  ];

  const handleNavigation = (text: string) => {
    router.push(text.toLowerCase().replace(/\s/g, '-'));
    console.log(`Navigate to: ${text.toLowerCase().replace(/\s/g, '-')}`);
  };

  return (
    <div className='w-full flex flex-col items-center px-5 py-5 bg-gray-950'>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-center">
        Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Details</span>
      </h1>
      
      {/* Cards Container */}
      <div
        className="flex gap-4 overflow-x-auto py-4 px-4 w-full max-w-7xl mx-auto scroll-smooth"
        ref={cardsRef}
        onWheel={handleWheelScroll}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {cardData.map((item, index) => (
          <Card
            key={index}
            image={`https://picsum.photos/seed/${item.text.replace(/\s/g, '')}/300/300`}
            text={item.text}
            gradient={item.color}
            onNavigate={() => handleNavigation(item.text)}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      {/* <div className="mt-4 text-gray-400 text-sm text-center flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
          <span>🖱️ Scroll horizontally with mouse wheel</span>
        </div>
        <div className="md:hidden">
          <span>👆 Swipe horizontally to see more</span>
        </div>
      </div> */}
    </div>
  );
}

function Card({ image, text, gradient, onNavigate, delay }: { 
  image: string, 
  text: string, 
  gradient: string, 
  onNavigate: () => void,
  delay: number 
}) {
  return (
    <div
      className='group relative flex-shrink-0 w-[250px] h-[250px] cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 animate-fadeInUp bg-white my-2'
      onClick={onNavigate}
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 100, 255, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
      }}
    >
      {/* Background Image */}
      <img 
        src={image} 
        className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110' 
        alt={text}
        loading="lazy"
      />
      
      {/* Overlay for Text */}
      <div className='absolute inset-0 bg-black/60 flex items-center justify-center z-10'>
        <div className="text-center">
          <h3 
            className='text-white font-bold text-xl transition-colors duration-300 ease-in-out group-hover:text-blue-400'
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
          >
            {text}
          </h3>
        </div>
      </div>

      {/* Optional: Gradient Overlay for subtle color */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-5`}></div>
    </div>
  );
}

// Add fadeInUp animation
const fadeInUpStyle = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
`;