import React from 'react';
// hero image
import hero from '../../assets/img/hero/h1_hero.png';

function Banner() {
  return (
    <section>
      <div>
        <div className="relative">
          <img src={hero} alt="" className="w-full object-contain" />
          <div className="absolute top-12 md:top-24 xl:top-80 left-10 md:left-20 xl:left-60 w-1/2 space-y-1 md:space-y-3 xl:space-y-6">
            <span className="font-bold uppercase text-base md:text-2xl xl:text-3xl text-rose-800">
              with patrick potter
            </span>
            <h1 className="font-semibold text-lg md:text-4xl xl:text-5xl w-10/12 text-gray-100">
              Build Perfect body Shape for good and Healthy life.
            </h1>
            <div className="font-semibold  px-2 py-2 inline-block text-center   bg-rose-600 text-gray-100">
              <button>became a member</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
