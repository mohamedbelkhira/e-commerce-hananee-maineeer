import React from 'react';

const QuoteSection = () => {
  return (
    <div className="container mx-auto my-20 px-4 md:px-0">
      <div className="flex justify-center px-4 md:px-0 overflow-hidden">
        <blockquote className="relative text-xl text-gray-700 italic max-w-3xl text-center">
          <div className="absolute top-0 right-0 transform -translate-y-1/2 h-2 w-20 bg-black"></div>
          <p className="mt-6 px-4 md:px-0">
            “ Chez Maison El Hanane, nous mettons un point d'honneur à respecter des standards élevés pour garantir votre satisfaction et sublimer votre garde-robe avec des créations authentiques et intemporelles “
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteSection;
