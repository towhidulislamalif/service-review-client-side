import React from 'react';

function CallToAction() {
  return (
    <section className="py-20 bg-slate-900 text-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
          April membership offer available Now
        </h1>
        <button className="px-6 py-2 text-lg  bg-red-600 text-gray-50">
          More Services
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
