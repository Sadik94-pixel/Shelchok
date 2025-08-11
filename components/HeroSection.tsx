'use client';

import Link from 'next/link';

export default function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTechnology = () => {
    document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/fb2b4c46c4f8b7adb1406a63c2849a51.jfif')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Собери свою мебель за минуты.
              <span className="block text-amber-200">Без винтов.</span>
              <span className="block">Без инструментов.</span>
              <span className="block text-amber-200">Только щелчок.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Столы, табуреты и столики из экологичной фанеры высшего сорта.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToProducts}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Смотреть коллекцию
              </button>
              
              <button 
                onClick={scrollToTechnology}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Как это работает?
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}