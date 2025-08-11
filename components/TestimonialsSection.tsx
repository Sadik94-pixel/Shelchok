'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Анна Морозова',
      role: 'Дизайнер интерьеров',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20female%20interior%20designer%2C%20smiling%2C%20natural%20lighting%2C%20professional%20headshot%2C%20modern%20office%20background%2C%20confident%20and%20friendly%20expression%2C%20business%20casual%20attire%2C%20high-quality%20portrait%20photography&width=100&height=100&seq=avatar-anna-001&orientation=squarish',
      text: 'Невероятно! Собрала обеденный стол за 3 минуты. Клиенты в восторге от такой простоты. Теперь рекомендую только эту мебель.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20modern%20dining%20room%20with%20plywood%20table%2C%20interior%20design%20showcase%2C%20natural%20lighting%2C%20Scandinavian%20minimalist%20style%2C%20professional%20interior%20photography%2C%20elegant%20table%20setting%2C%20contemporary%20home%20decor%2C%20clean%20lines%20and%20warm%20wood%20tones&width=400&height=300&seq=review-anna-room-001&orientation=landscape'
    },
    {
      name: 'Михаил Петров',
      role: 'Владелец коворкинга',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20middle-aged%20businessman%2C%20smiling%2C%20confident%20expression%2C%20modern%20office%20setting%2C%20business%20suit%2C%20friendly%20demeanor%2C%20high-quality%20corporate%20headshot%2C%20professional%20lighting&width=100&height=100&seq=avatar-mikhail-001&orientation=squarish',
      text: 'Заказал 20 столов для коворкинга. Сотрудники собрали всё за час! Качество на высоте, клиенты постоянно спрашивают где купить.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Modern%20coworking%20space%20with%20multiple%20plywood%20tables%20and%20chairs%2C%20open%20office%20environment%2C%20natural%20lighting%2C%20contemporary%20workspace%20design%2C%20people%20working%20at%20computers%2C%20clean%20minimalist%20aesthetic%2C%20professional%20space%20photography&width=400&height=300&seq=review-mikhail-space-001&orientation=landscape'
    },
    {
      name: 'Елена Смирнова',
      role: 'Мама троих детей',
      avatar: 'https://readdy.ai/api/search-image?query=Portrait%20of%20friendly%20mother%20in%20her%2030s%2C%20warm%20smile%2C%20natural%20lighting%2C%20home%20environment%2C%20casual%20clothing%2C%20approachable%20and%20caring%20expression%2C%20family%20lifestyle%20photography%2C%20positive%20and%20confident%20demeanor&width=100&height=100&seq=avatar-elena-001&orientation=squarish',
      text: 'Дети помогали собирать табуреты - им было интересно услышать тот самый "щелчок"! Мебель красивая и очень прочная.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Family%20kitchen%20with%20children%20sitting%20on%20plywood%20bar%20stools%2C%20happy%20family%20moment%2C%20natural%20lighting%2C%20cozy%20home%20interior%2C%20kids%20and%20mother%20together%2C%20warm%20family%20atmosphere%2C%20contemporary%20kitchen%20design%2C%20safe%20and%20functional%20furniture&width=400&height=300&seq=review-elena-kitchen-001&orientation=landscape'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Архитектор',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20male%20architect%2C%20confident%20smile%2C%20creative%20professional%2C%20modern%20studio%20background%2C%20architectural%20drawings%20visible%2C%20professional%20attire%2C%20innovative%20designer%2C%20natural%20lighting%2C%20high-quality%20headshot&width=100&height=100&seq=avatar-dmitry-001&orientation=squarish',
      text: 'Как архитектор ценю инновационные решения. Система соединений гениальна! Использую в своих проектах.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Modern%20architectural%20studio%20with%20sleek%20plywood%20furniture%2C%20professional%20workspace%2C%20drafting%20tables%2C%20clean%20lines%2C%20contemporary%20office%20design%2C%20architectural%20drawings%20and%20models%2C%20natural%20lighting%2C%20minimalist%20aesthetic&width=400&height=300&seq=review-dmitry-studio-001&orientation=landscape'
    }
  ];

  const pressLogos = [
    { name: 'Design Magazine', logo: 'ri-book-open-line' },
    { name: 'Eco Living', logo: 'ri-leaf-line' },
    { name: 'Modern Home', logo: 'ri-home-smile-line' },
    { name: 'Innovation Today', logo: 'ri-lightbulb-line' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши клиенты о <span className="text-amber-600">"Щелчке"</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 2000 довольных покупателей уже оценили наши инновационные решения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-amber-400"></i>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={testimonial.image} 
                  alt={`Интерьер ${testimonial.name}`}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">О нас пишут</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {pressLogos.map((press, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition-colors duration-300">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className={`${press.logo} text-2xl`}></i>
                </div>
                <span className="font-medium">{press.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">2000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют друзьям</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}