'use client';

export default function QualitySection() {
  const qualitySteps = [
    {
      title: 'Отбор материала',
      description: 'Используем только сертифицированную фанеру высшего сорта класса E0/E1',
      image: 'https://readdy.ai/api/search-image?query=High-grade%20birch%20plywood%20sheets%20stacked%20showing%20beautiful%20wood%20grain%20texture%2C%20premium%20quality%20lumber%20warehouse%2C%20natural%20wood%20colors%2C%20professional%20material%20photography%2C%20focus%20on%20clean%20edges%20and%20consistent%20grain%20patterns%2C%20industrial%20lighting%2C%20quality%20control%20environment&width=600&height=400&seq=quality-material-001&orientation=landscape'
    },
    {
      title: 'Точная резка',
      description: 'Детали вырезаются с ювелирной точностью на ЧПУ станках',
      image: 'https://readdy.ai/api/search-image?query=CNC%20machine%20cutting%20precision%20plywood%20furniture%20parts%2C%20industrial%20manufacturing%20equipment%20in%20action%2C%20wood%20chips%20flying%2C%20professional%20workshop%20environment%2C%20high-tech%20precision%20cutting%20process%2C%20clean%20industrial%20setting%2C%20focus%20on%20accuracy%20and%20craftsmanship&width=600&height=400&seq=quality-cnc-001&orientation=landscape'
    },
    {
      title: 'Ручная обработка',
      description: 'Каждая кромка тщательно обрабатывается и шлифуется вручную',
      image: 'https://readdy.ai/api/search-image?query=Skilled%20craftsman%20hand-sanding%20plywood%20furniture%20edge%2C%20detailed%20woodworking%20process%2C%20professional%20workshop%20setting%2C%20focus%20on%20precision%20hand%20finishing%2C%20wood%20shavings%2C%20artisan%20at%20work%2C%20quality%20control%20attention%20to%20detail%2C%20natural%20lighting%20on%20workspace&width=600&height=400&seq=quality-sanding-001&orientation=landscape'
    },
    {
      title: 'Финишное покрытие',
      description: 'Безопасные эмали и масла для долговечности и красоты',
      image: 'https://readdy.ai/api/search-image?query=Professional%20application%20of%20eco-friendly%20wood%20finish%20to%20plywood%20furniture%2C%20brush%20applying%20natural%20oil%20coating%2C%20workshop%20environment%2C%20focus%20on%20smooth%20even%20coverage%2C%20protective%20finishing%20process%2C%20quality%20craftsmanship%2C%20clean%20workspace%20with%20finishing%20materials&width=600&height=400&seq=quality-finish-001&orientation=landscape'
    }
  ];

  const qualityFeatures = [
    { icon: 'ri-leaf-line', text: 'Экологично' },
    { icon: 'ri-shield-check-line', text: 'Прочность' },
    { icon: 'ri-heart-pulse-line', text: 'Безопасность' },
    { icon: 'ri-hand-heart-line', text: 'Ручной контроль' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Фанера высшего сорта. <span className="text-amber-600">Точность производства.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {qualitySteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Премиальное качество в каждой детали
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы используем только сертифицированную фанеру высшего сорта класса E0/E1, что гарантирует 
                экологическую безопасность и долговечность изделий. Каждый этап производства контролируется 
                мастерами с многолетним опытом.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className={`${feature.icon} text-green-600 text-lg`}></i>
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-amber-800 font-medium">
                  Каждое изделие проходит контроль качества на всех этапах производства
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">E0/E1</div>
                  <div className="text-sm text-gray-600">Класс экологичности</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">±0.1мм</div>
                  <div className="text-sm text-gray-600">Точность резки</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">5 лет</div>
                  <div className="text-sm text-gray-600">Гарантия качества</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Ручной контроль</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}