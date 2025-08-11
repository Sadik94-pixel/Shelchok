'use client';

export default function TechnologySection() {
  const steps = [
    {
      number: '01',
      title: 'Извлечение',
      description: 'Ножка извлекается из своего отсека в столешнице',
      image: 'https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/bbb0ee846098b353178624c72ee30304.jfif'
    },
    {
      number: '02',
      title: 'Установка',
      description: 'Ножка вставляется в специальный паз',
      image: 'https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/3b189bcd12adc5f9607ff0fa2bd34d00.jfif'
    },
    {
      number: '03',
      title: 'Щелчок!',
      description: 'Момент фиксации - соединение готово',
      image: 'https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/5f3e3b133b72d22e712305f764c243a8.jfif'
    },
    {
      number: '04',
      title: 'Готово',
      description: 'Надежное и красивое изделие за минуты',
      image: 'https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/544bd05be8105df7765e8267b147b934.jfif'
    }
  ];

  const features = [
    { icon: 'ri-tools-line', text: 'Без фурнитуры' },
    { icon: 'ri-shield-check-line', text: 'Защита от детей' },
    { icon: 'ri-time-line', text: 'Разборка за секунды' },
    { icon: 'ri-leaf-line', text: 'Экологично' }
  ];

  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Магия "Щелчка": <span className="text-amber-600">Сборка без усилий</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-amber-500 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Революционная система соединения
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Никаких винтов, гаек, отверток или сложных инструкций. Каждая деталь имеет уникальный паз. 
                Вставьте опору до характерного щелчка — соединение зафиксировано надежно. 
                Прочность, устойчивость, эстетика скрытого крепления.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <i className={`${feature.icon} text-amber-600 text-lg`}></i>
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/f3c180d64dafd0f9d506dc4a931f7822.jfif"
                  alt="Процесс сборки"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 cursor-pointer">
                  <i className="ri-play-fill text-2xl text-gray-700 ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}