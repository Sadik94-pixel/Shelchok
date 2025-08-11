'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'ri-truck-line',
      title: 'Компактная доставка',
      description: 'Все детали аккуратно упакованы в плоскую коробку',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-time-line',
      title: 'Мгновенная сборка',
      description: 'От распаковки до готового изделия - минуты, а не часы',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Экологичность',
      description: 'Натуральные материалы, безопасные покрытия',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Пожизненная гарантия',
      description: 'Ваш "щелчок" всегда будет надежным',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'ri-palette-line',
      title: 'Уникальный дизайн',
      description: 'Современный минимализм, который впишется в любой интерьер',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Легко перевезти',
      description: 'Разбирается так же быстро, как и собирается',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему <span className="text-amber-600 font-['Pacifico']">Щелчок</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-20 h-20 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${benefit.icon} ${benefit.iconColor} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Мебель будущего уже здесь
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Наша технология "щелчок" революционизирует способ сборки мебели. 
                Больше никаких потерянных винтов, сломанных инструментов или многочасовых мучений с инструкциями.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">2 мин</div>
                  <div className="text-sm text-gray-600">Средняя сборка</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Инструментов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Удовлетворение</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=Happy%20family%20easily%20assembling%20modern%20plywood%20furniture%20together%2C%20smiling%20parents%20and%20children%2C%20bright%20living%20room%20interior%2C%20natural%20lighting%2C%20contemporary%20home%20setting%2C%20showing%20joy%20and%20simplicity%20of%20furniture%20assembly%2C%20Scandinavian%20style%20interior%20design%2C%20warm%20family%20moment&width=600&height=450&seq=benefits-family-001&orientation=landscape"
                  alt="Семейная сборка мебели"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Собирается прямо сейчас!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}