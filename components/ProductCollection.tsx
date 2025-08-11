
'use client';

import { useState } from 'react';
import ProductModal from './ProductModal';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  dimensions: string;
  colors: string;
  usp: string;
  description: string;
  price: string;
  features: string[];
}

export default function ProductCollection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Стол "Базис"',
      category: 'Обеденные/Рабочие столы',
      image: 'https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/4405af994d721d9d3f557f55b0bbcbb1.jfif',
      dimensions: '120×80×75 см',
      colors: 'Натуральная березa, Белый, Серый',
      usp: 'Сборка за 2 минуты. Надежное соединение "до щелчка".',
      description: 'Универсальный обеденный стол с уникальными треугольными ножками, который станет центром вашего дома. Идеально подходит для семейных ужинов и работы.',
      price: '15 900 ₽',
      features: ['Максимальная нагрузка: 80 кг', 'Влагостойкое покрытие', 'Разборная конструкция', 'Гарантия 5 лет']
    },
    {
      id: 2,
      name: 'Табурет "Контур"',
      category: 'Табуреты',
      image: 'https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/3aa6649123bf42cbdd5d6ff828bb15c7.jfif',
      dimensions: '35×35×75 см',
      colors: 'Натуральная березa, Черный, Белый',
      usp: 'Невероятно прочный и легкий. Собирается за 30 секунд.',
      description: 'Стильный барный табурет с геометрическими ножками для кухонного острова или высокого стола. Эргономичная форма обеспечивает максимальный комфорт.',
      price: '4 900 ₽',
      features: ['Максимальная нагрузка: 120 кг', 'Вес всего 2.5 кг', 'Нескользящие накладки', 'Штабелируется для хранения']
    },
    {
      id: 3,
      name: 'Столик "Фанерон"',
      category: 'Журнальные столики',
      image: 'https://static.readdy.ai/image/fd7d8d651fe2622c5b5977a2ec7a1620/a7903853bc447b40f09c8cf0a63a92f7.jfif',
      dimensions: '90×60×40 см',
      colors: 'Натуральная березa, Орех, Белый',
      usp: 'Элегантность и функциональность. Легкая сборка.',
      description: 'Изящный журнальный столик с треугольными ножками, который дополнит любую гостиную. Идеальные пропорции для современного интерьера.',
      price: '8 900 ₽',
      features: ['Скрытые полки для хранения', 'Закругленные углы', 'Легко перемещается', 'Подходит для маленьких пространств']
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Коллекция "Щелчок"
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простая сборка, безупречное качество, современный дизайн.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 font-medium mb-2">{product.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-600"><span className="font-medium">Размеры:</span> {product.dimensions}</p>
                  <p className="text-gray-600"><span className="font-medium">Цвета:</span> {product.colors}</p>
                </div>

                <div className="bg-amber-50 p-3 rounded-lg mb-6">
                  <p className="text-amber-800 font-medium text-sm">{product.usp}</p>
                </div>

                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
}
