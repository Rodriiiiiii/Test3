import React, { useState } from 'react';
import { Heart, HeartCrack, Gift as GiftBox, PartyPopper, Stars } from 'lucide-react';

function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(35)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        >
          <Heart
            className="text-pink-400 opacity-65"
            style={{
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`
            }}
          />
        </div>
      ))}
    </div>
  );
}

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showGift, setShowGift] = useState(false);

  const handleNoHover = () => {
    // Calculate the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate a random position within a 300px radius of the center
    const radius = 300;
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius;
    
    const newX = centerX + distance * Math.cos(angle) - 50; // 50px offset for button width
    const newY = centerY + distance * Math.sin(angle) - 25; // 25px offset for button height
    
    // Ensure the button stays within viewport bounds with some padding
    const padding = 20;
    const boundedX = Math.min(Math.max(padding, newX), window.innerWidth - 150);
    const boundedY = Math.min(Math.max(padding, newY), window.innerHeight - 60);
    
    setNoButtonPosition({ x: boundedX, y: boundedY });
    setNoCount(noCount + 1);
  };

  const handleNoClick = () => {
    handleNoHover(); // Move the button when clicked too
  };

  const phrases = [
    "¿Seguro que no? 🥺",
    "¿Lo piensas bien? ❤️",
    "¡Inténtalo de nuevo! 💝",
    "¡No te resistas al amor! 💖",
    "¡El amor está en el aire! 💕",
    "¡Vamos, di que sí! 🌹",
    "¡No me hagas esto! 😢",
    "¡Pero si somos el uno para el otro! 💑",
    "¡Dame una oportunidad! 🎀",
    "¡No seas tímida! 💝",
    "¡Mira qué bonito botón rojo! ⬆️",
    "¡El botón de 'Sí' te está esperando! 💘",
    "¡Casi le das! ¡Prueba otra vez! 🎯",
    "¡El amor nos está llamando! 📞",
    "¡Seríamos tan felices juntos! 🥰",
    "¡El destino nos quiere juntos! ⭐",
    "¡No hay nadie como tú! 👑",
    "¡Eres mi persona especial! 🌟",
    "¡Hagamos este día inolvidable! 🎉",
    "¡Di que sí, por favor! 🙏"
  ];

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-200 to-red-100 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
        <FloatingHearts />
        <div className="z-10 space-y-8">
          <div className="flex gap-4 justify-center">
            <div className="animate-bounce-slow">
              <Heart className="w-16 h-16 text-red-500" fill="currentColor" />
            </div>
            <div className="animate-bounce">
              <PartyPopper className="w-16 h-16 text-yellow-500" />
            </div>
            <div className="animate-bounce-slow">
              <Heart className="w-16 h-16 text-red-500" fill="currentColor" />
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-red-600 mb-6">
              ¡Esoooo! ¡Noss vemooooooos! 💑
            </h1>
            <p className="text-xl text-pink-700 mb-6">
              Que sea un dia muy bonito ❤️
            </p>
            {!showGift && (
              <button
                onClick={() => setShowGift(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transform hover:scale-110 transition-all"
              >
                <span className="flex items-center gap-2">
                  <GiftBox className="w-6 h-6" />
                  Abrir regalo especial
                </span>
              </button>
            )}
            {showGift && (
              <div className="animate-fade-in">
                <div className="flex justify-center mb-4">
                  <Stars className="w-12 h-12 text-yellow-500 animate-spin-slow" />
                </div>
                <p className="text-2xl text-red-600 font-bold">
                  Te amo muchisimo! 💖
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-red-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center z-10">
        <div className="mb-8 space-y-4">
          <div className="flex justify-center gap-4">
            <Heart className="w-16 h-16 text-red-500 animate-pulse" fill="currentColor" />
            <Heart className="w-16 h-16 text-pink-500 animate-bounce" fill="currentColor" />
            <Heart className="w-16 h-16 text-red-500 animate-pulse" fill="currentColor" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Holaa mi amor</h1>
          <h2 className="text-2xl font-bold text-gray-800">¿Le gustaría a usted ser mi San Valentín ?</h2>
          {noCount > 0 && (
            <div className="flex items-center justify-center gap-2 text-pink-600">
              <HeartCrack className="w-5 h-5" />
              <p>{phrases[Math.min(noCount - 1, phrases.length - 1)]}</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => setAccepted(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transform hover:scale-110 transition-all shadow-lg hover:shadow-xl"
          >
            ¡Sí! ❤️
          </button>
          
          <button
            style={{
              position: noCount > 0 ? 'fixed' : 'static',
              left: noButtonPosition.x,
              top: noButtonPosition.y,
              transition: 'all 0.2s ease'
            }}
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg z-20"
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;