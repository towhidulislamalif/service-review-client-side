import React from 'react';
import useTitle from '../../hooks/useTitle';

import Banner from './Banner';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Services from './Services';
import Testimonial from './Testimonial';

function Homepage() {
  useTitle('Homepage');
  return (
    <div className="space-y-8 md:space-y-16 dark:bg-gray-800 dark:text-gray-100">
      <Banner />
      <Services />
      <Testimonial />
      <CallToAction />
      <Contact />
    </div>
  );
}

export default Homepage;
