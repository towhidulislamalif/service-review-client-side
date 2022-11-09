import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function Services() {
  const [servicefeed, setServicefeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/servicefeed')
      .then((res) => res.json())
      .then((json) => setServicefeed(json.data));
  }, []);

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num) + '...' : string;
  };
  return (
    <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
          <p className="font-serif text-sm text-gray-600">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {servicefeed.map((service) => {
            const { desc, _id, img, price, title } = service;
            return (
              <article key={_id} className="flex flex-col bg-gray-50">
                <PhotoProvider>
                  <PhotoView src={img}>
                    <img
                      alt=""
                      className="object-cover w-full h-52 bg-gray-500"
                      src="https://source.unsplash.com/200x200/?fashion?1"
                    />
                  </PhotoView>
                </PhotoProvider>

                <div className="flex flex-col flex-1 p-6">
                  <p
                    rel="noopener noreferrer"
                    className="text-sm font-semibold italic tracking-wider uppercase hover:underline text-pink-600"
                  >
                    ${price}
                  </p>
                  <h3 className="flex-1  text-lg py-1 font-semibold leading-snug">
                    {title}
                  </h3>
                  <h3 className="flex-1  text-sm  leading-snug text-gray-500">
                    {truncate(desc, 100)}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                    <button className="font-semibold italic px-4 py-2 rounded-md bg-pink-700 text-gray-100">
                      View details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
