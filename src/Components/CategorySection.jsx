import React from 'react';
import ManCetegory from '../assets/Images/man.png';
import WomanCetegory from '../assets/Images/Woman.png';
import KidCetegory from '../assets/Images/Kids.png';

const categories = [
  {
    title: 'Men',
    imageUrl: ManCetegory,
    bgColor: 'bg-blue-100', // Tailwind class
  },
  {
    title: 'Women',
    imageUrl: WomanCetegory,
    bgColor: 'bg-pink-100', // Tailwind class
  },
  {
    title: 'Kids',
    imageUrl: KidCetegory,
    bgColor: 'bg-gray-100', // Tailwind class
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer ${category.bgColor}`}
        >
          <img
            src={category.imageUrl}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">view All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
