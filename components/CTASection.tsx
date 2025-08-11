'use client';

export default function CTASection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20plywood%20furniture%20assembly%20workspace%2C%20scattered%20furniture%20components%2C%20precision%20tools%2C%20natural%20wood%20textures%2C%20workshop%20environment%20with%20soft%20lighting%2C%20artisan%20craftsmanship%20atmosphere%2C%20warm%20industrial%20setting%2C%20focus%20on%20quality%20materials&width=1920&height=1080&seq=cta-bg-001&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Готовы к мебели <span className="text-amber-400">без хлопот</span>?
        </h2>
        
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Выберите свой стол, табурет или столик и соберите его сегодня. 
          Доставим в течение 3 дней по всей России.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={scrollToProducts}
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
          >
            <i className="ri-shopping-cart-line mr-2"></i>
            Выбрать мебель
          </button>
          
          <a 
            href="tel:+74951234567"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Консультация
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-amber-400 mb-2">2-3 мин</div>
            <div className="text-gray-300">Время сборки</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">5 лет</div>
            <div className="text-gray-300">Гарантия</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">0 ₽</div>
            <div className="text-gray-300">Доставка от 10 000 ₽</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
    </section>
  );
}