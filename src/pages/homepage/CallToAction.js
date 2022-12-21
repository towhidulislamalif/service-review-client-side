import React from 'react';

function CallToAction() {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h1 className="text-xl sm:text-3xl font-semibold leading-tight text-center lg:text-left">
          December membership offer available Now
        </h1>
        <button className="px-4 py-2 sm:px-6 sm:py-2 text-base bg-red-600 text-white">
          More Services
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
