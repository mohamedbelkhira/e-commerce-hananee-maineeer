import React from 'react';
import aboutImage from '../../../assets/about-image.jpeg'; // Replace with the actual path to your image

const AboutSection = () => {
  return (
    <div className="container mx-auto my-16 px-4 md:px-0">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center">
          <span className="flex-grow border-t border-gray-700 mx-4"></span>
          <h1 className="text-4xl font-bold mb-4">
            Maison El Hanane
          </h1>
          <span className="flex-grow border-t border-gray-700 mx-4"></span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left animate-fade-in-left">
          <div className="relative mb-4">
            <span className="absolute left-0 top-0 transform -translate-y-full h-1 w-20 bg-black"></span>
            <h2 className="text-3xl font-semibold pt-4">Qui sommes-nous ?</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed pt-10">
            Nous sommes, une marque dédiée à l'habillement féminin de la tête aux pieds. Fondée sur les valeurs de qualité et d'originalité, nous créons des vêtements qui incarnent l'élégance, le confort, et le style unique. Notre mission est de proposer des pièces exceptionnelles qui permettent à chaque femme de se sentir belle et confiante, quel que soit le moment de la journée.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-center animate-fade-in-right">
          <img src={aboutImage} alt="About Maison El Hanane" className="rounded-lg shadow-lg max-w-xs md:max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
