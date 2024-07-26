import React from 'react';
import AboutSection from '../components/major/aboutpage/AboutSection';
import Banner from '../components/major/Banner';
import WhatWeOfferSection from '../components/major/aboutpage/WhatWeOfferSection';
import QuoteSection from '../components/major/aboutpage/QuoteSection';

const About = () => {
  return (
    <div className="about">
      <Banner />
      <AboutSection/>
      <WhatWeOfferSection />
      <QuoteSection />

    </div>
  );
};

export default About;