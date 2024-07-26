import React from 'react';
import Slider from 'react-slick';
import avatar1 from '../../assets/user-icon.png'; // Replace with actual path
import avatar2 from '../../assets/user-icon.png'; // Replace with actual path
import avatar3 from '../../assets/user-icon.png'; // Replace with actual path

// Import slick-carousel CSS directly in the JavaScript file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    avatar: avatar1,
    name: 'Neïla',
    review: 'Bonjour, je viens de recevoir mes mules je suis tres contente, elles sont vraiment trop belles.',
    rating: 5
  },
  {
    avatar: avatar2,
    name: 'Client 2',
    review: 'Fast delivery and excellent customer support. I am very satisfied with my purchase.',
    rating: 4
  },
  {
    avatar: avatar3,
    name: 'Client 3',
    review: 'The quality of the products is top-notch. Will definitely buy again.',
    rating: 5
  }
];

const ClientReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // 3 seconds
  };

  return (
    <div className="bg-white py-12">
        
      <div className="container mx-auto text-center">
      <div className="text-center mb-8">
        <h2 className="text-gray-500 text-lg mb-2 relative flex items-center justify-center">
          <span className="flex-grow border-t border-gray-300 mx-4"></span>
          Témoignage
          <span className="flex-grow border-t border-gray-300 mx-4"></span>
        </h2>
        <h1 className="text-3xl font-bold">Avis de nos clients</h1>
      </div>
      
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-md mx-auto bg-custom-light-grey p-8 m-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4 w-full">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">&#9733;</span>
                ))}
              </div>
              <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
              <p className="text-gray-500">“ {review.review} ”</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientReviewsSection;