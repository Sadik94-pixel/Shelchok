'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Насколько надежно соединение "до щелчка"?',
      answer: 'Наша система соединений прошла тщательные испытания на прочность. Каждое соединение выдерживает нагрузку до 150 кг и сохраняет надежность даже после тысяч циклов сборки-разборки. Мы даем пожизненную гарантию на механизм соединения.'
    },
    {
      question: 'Можно ли разбирать и собирать мебель многократно?',
      answer: 'Да, абсолютно! Это одно из главных преимуществ нашей технологии. Мебель можно разбирать и собирать неограниченное количество раз без потери прочности соединений. Идеально для переездов или изменения планировки.'
    },
    {
      question: 'Какие варианты цвета и финиша доступны?',
      answer: 'Мы предлагаем несколько вариантов отделки: натуральная березовая фанера (прозрачное масло), белая эмаль, серая эмаль, темный орех. Все покрытия экологически безопасны и сертифицированы для использования в жилых помещениях.'
    },
    {
      question: 'Как ухаживать за мебелью?',
      answer: 'Уход максимально простой! Достаточно протирать поверхности влажной тканью. Для глубокой очистки можно использовать мягкие моющие средства. Раз в год рекомендуем обновлять масляное покрытие на натуральной фанере.'
    },
    {
      question: 'Каковы сроки и стоимость доставки?',
      answer: 'Доставка по Москве и МО - бесплатно при заказе от 10 000 ₽. По России доставляем транспортными компаниями за 3-7 дней. Стоимость рассчитывается индивидуально. Все изделия надежно упакованы в компактные коробки.'
    },
    {
      question: 'Как происходит возврат?',
      answer: 'У вас есть 14 дней на возврат товара без объяснения причин. Мы заберем мебель за свой счет и вернем полную стоимость. Единственное условие - сохранность товарного вида и упаковки.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на самые популярные вопросы наших клиентов
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-xl text-amber-600 transition-transform duration-200`}></i>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 mb-6">
              Наши специалисты с радостью помогут вам разобраться с любыми вопросами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+74951234567" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                +7 (495) 123-45-67
              </a>
              <a 
                href="mailto:info@click-furniture.ru" 
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2"></i>
                Написать нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}