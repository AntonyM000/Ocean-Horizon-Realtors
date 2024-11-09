import React, { useRef } from 'react';
import Home from '../Pages/Home';
import Aboutus from '../Pages/Aboutus';
import Properties from '../Pages/Properties';
import Whyus from '../Pages/Whyus';
import Faq from '../Pages/Faq';
import Footer from '../Pages/Footer';
import Paradise from '../Pages/Paradise';

const HomeLayout = () => {
  const propertiesSectionRef = useRef(null);

  const scrollToProperties = () => {
    if (propertiesSectionRef.current) {
      propertiesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Home scrollToProperties={scrollToProperties} />
      <Paradise />
      <Properties ref={propertiesSectionRef} />
      <Aboutus />
      <Whyus />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomeLayout;
