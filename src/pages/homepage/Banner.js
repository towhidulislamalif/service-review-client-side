import React from 'react';
import { Link } from 'react-router-dom';
// hero image
import hero from '../../assets/img/hero/h1_hero.png';

function Banner() {
  return (
    <section>
      <div>
        <div className="relative">
          <img src={hero} alt="" className="w-full object-contain" />
          <div className="absolute top-12 md:top-24 xl:top-80 left-10 md:left-20 xl:left-60 w-1/2 space-y-1 md:space-y-3 xl:space-y-6">
            <span className="font-bold uppercase text-sm sm:text-2xl md:text-3xl text-rose-600">
              with patrick potter
            </span>
            <h1 className="font-medium text-base sm:text-4xl md:text-5xl w-10/12 text-white">
              Build Perfect body Shape for good and Healthy life.
            </h1>
            <div className="inline-block text-sm sm:text-base p-1 sm:p-3 text-center bg-rose-600 text-white">
              <Link to="/servicefeed">
                <button>Services</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
