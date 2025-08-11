'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'ri-instagram-line', href: '#' },
    { name: 'Pinterest', icon: 'ri-pinterest-line', href: '#' },
    { name: 'Telegram', icon: 'ri-telegram-line', href: '#' },
    { name: 'YouTube', icon: 'ri-youtube-line', href: '#' }
  ];

  const navigationLinks = [
    { name: 'Коллекция', action: () => scrollToSection('products') },
    { name: 'Технология', action: () => scrollToSection('technology') },
    { name: 'О качестве', action: () => scrollToSection('quality') },
    { name: 'Отзывы', action: () => scrollToSection('testimonials') }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-['Pacifico'] text-amber-400 mb-2">Щелчок</h3>
              <p className="text-gray-400 text-lg">Мебель. Собрано щелчком.</p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Революционная мебель из экологичной фанеры, которая собирается за минуты без инструментов. 
              Просто. Надежно. Красиво.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+74951234567" 
                className="flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                <i className="ri-phone-line mr-3"></i>
                +7 (495) 123-45-67
              </a>
              
              <a 
                href="mailto:info@click-furniture.ru" 
                className="flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                <i className="ri-mail-line mr-3"></i>
                info@click-furniture.ru
              </a>
              
              <div className="flex items-start text-gray-400">
                <i className="ri-map-pin-line mr-3 mt-1"></i>
                <div>
                  <p>Москва, ул. Мебельная, 15</p>
                  <p className="text-sm">Шоу-рум и склад</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-400">
                <i className="ri-time-line mr-3"></i>
                <div>
                  <p className="text-sm">Пн-Пт: 10:00-19:00</p>
                  <p className="text-sm">Сб-Вс: 11:00-17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <button className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Публичная оферта
              </button>
              <button className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Политика конфиденциальности
              </button>
              <button className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Доставка и оплата
              </button>
              <button className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Гарантия
              </button>
            </div>
            
            <div className="text-sm text-gray-400">
              © Щелчок, 2024. Все права защищены.
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 cursor-pointer"
        aria-label="Наверх"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </footer>
  );
}