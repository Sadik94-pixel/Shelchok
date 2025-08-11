'use client';

import { useState } from 'react';

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

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  
  const colorOptions = product.colors.split(', ');
  
  const additionalImages = [
    product.image,
    `https://readdy.ai/api/search-image?query=Flat%20pack%20furniture%20packaging%20box%20opened%20showing%20$%7Bproduct.name.toLowerCase%28%29%7D%20components%20neatly%20organized%2C%20all%20parts%20visible%2C%20assembly%20instruction%20sheet%2C%20premium%20plywood%20pieces%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20detailed%20view%20of%20precision-cut%20components&width=600&height=400&seq=modal-${product.id}-002&orientation=landscape`,
    `https://readdy.ai/api/search-image?query=Step%20by%20step%20assembly%20process%20of%20$%7Bproduct.name.toLowerCase%28%29%7D%2C%20hands%20inserting%20furniture%20leg%20into%20slot%20mechanism%2C%20close-up%20of%20click%20connection%20system%2C%20high-quality%20plywood%20furniture%2C%20professional%20instructional%20photography%2C%20clean%20background%2C%20focus%20on%20precision%20joint%20mechanism&width=600&height=400&seq=modal-${product.id}-003&orientation=landscape`
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src={additionalImages[selectedColor] || product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {additionalImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 cursor-pointer ${
                      selectedColor === index ? 'border-amber-500' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} вид ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-amber-600 font-medium mb-2">{product.category}</div>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Размеры</h4>
                  <p className="text-gray-600">{product.dimensions}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Доступные цвета</h4>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`px-3 py-1 text-sm rounded-full cursor-pointer whitespace-nowrap ${
                          selectedColor === index 
                            ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Особенности</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <p className="text-amber-800 font-medium">{product.usp}</p>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-gray-900">{product.price}</div>
                <div className="text-sm text-gray-500">Доставка по России</div>
              </div>
              
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 text-lg transition-colors duration-300 whitespace-nowrap cursor-pointer">
                Добавить в корзину
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Бесплатная доставка при заказе от 10 000 ₽
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}