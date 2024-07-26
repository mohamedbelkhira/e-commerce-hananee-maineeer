import React from 'react';
import deliveryIcon from '../../assets/delivery-icon.png'; // Replace with actual path
import paymentIcon from '../../assets/payment-icon.png'; // Replace with actual path
import supportIcon from '../../assets/support-icon.png'; // Replace with actual path

const features = [
  {
    icon: deliveryIcon,
    title: 'Livraison gratuite',
    description: 'Livraison gratuite à partir de 8000 da d\'achats'
  },
  {
    icon: paymentIcon,
    title: 'Paiement flexible',
    description: 'Payer avec plusieurs méthodes: cash, ccp ou baridimob'
  },
  {
    icon: supportIcon,
    title: 'Soutien en ligne',
    description: '24 heures sur 24, 7 jours sur 7'
  }
];

const WhyUsSection = () => {
  return (
    <div className="bg-custom-light-pink py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Pourquoi nous ?</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0 md:flex-1">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;