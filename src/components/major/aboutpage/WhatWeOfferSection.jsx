import React from 'react';
import qualityIcon from '../../../assets/manquin-icon.png'; // Replace with the actual path to your icon
import priceIcon from '../../../assets/price-tag.png'; // Replace with the actual path to your icon
import ethicsIcon from '../../../assets/ethics-icon.png'; // Replace with the actual path to your icon

const features = [
  {
    icon: qualityIcon,
    title: 'Produits de qualité',
    description: 'Matériaux de première qualité, durabilité, confort.'
  },
  {
    icon: priceIcon,
    title: 'Prix imbattables',
    description: 'Tarifs compétitifs, accessibilité, qualité sans compromis.'
  },
  {
    icon: ethicsIcon,
    title: 'Engagement éthique',
    description: 'Production responsable, respect de l\'environnement, mode durable.'
  }
];

const WhatWeOfferSection = () => {
  return (
    <div className="bg-custom-light-pink py-12">
      <div className="container mx-auto text-center">
        <span className="h-1 w-20 bg-black inline-block mb-3"></span>
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-bold mb-5">Ce que nous offrons ?</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center w-64 min-h-64 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;