import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      'https://b6a11-service-review-server-side-towhidulislamalif.vercel.app/services'
    )
      .then((res) => res.json())
      .then((json) => setServices(json.data));
  }, []);

  const truncate = (string, number) => {
    return string?.length > number ? string.substr(0, number) + '...' : string;
  };

  return (
    <section className="my-16">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-red-600">
            OUR SERVICES FOR YOU
          </h2>
          <p className="text-sm text-gray-800">
            PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
          </p>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const { _id, desc, img, price, title } = service;
            return (
              <div
                key={_id}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
              >
                <PhotoProvider>
                  <PhotoView src={img}>
                    <img
                      alt=""
                      className="object-cover w-full h-44"
                      src={img}
                    />
                  </PhotoView>
                </PhotoProvider>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-2xl group-hover:underline group-focus:underline">
                    {title}
                  </h3>
                  <span className="text-base">${price}</span>
                  <p className="pb-4 text-sm text-gray-600">
                    {truncate(desc, 100)}
                  </p>
                  <Link to={`/servicedetails/${_id}`}>
                    <button
                      type="button"
                      className="font-semibold italic p-1 sm:px-4 sm:py-2  bg-red-600 text-white"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center pt-4">
          <Link to="/servicefeed">
            <button
              type="button"
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm hover:underline bg-red-600 text-white"
            >
              Load more services...
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
