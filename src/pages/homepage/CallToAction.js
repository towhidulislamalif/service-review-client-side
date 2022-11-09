import React from 'react';

function CallToAction() {
  return (
    <section className="py-6 bg-gray-100 text-gray-900">
      <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold leading-none">Stay in the loop</h1>
          <p className="text-sm text-gray-400">
            Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus
            recusandae a veritatis optio cumque, in harum ad nam!
          </p>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
          <div className="flex flex-row font-serif">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-pink-700 text-gray-50"
            >
              update
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
