import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://b6a11-service-review-server-side-zeta.vercel.app/services')
      .then((res) => res.json())
      .then((json) => setServices(json.data));
  }, []);

  const truncate = (string, number) => {
    return string?.length > number ? string.substr(0, number) + '...' : string;
  };

  return (
    <section className=" bg-gray-100 text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-rose-700">
            OUR SERVICES FOR YOU
          </h2>
          <p className="font-serif text-sm text-gray-600">
            PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
          </p>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const { _id, desc, img, price, title } = service;
            return (
              <div
                key={_id}
                rel="noopener noreferrer"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
              >
                <PhotoProvider>
                  <PhotoView src={img}>
                    <img
                      alt=""
                      className="object-cover w-full  h-44 bg-gray-500"
                      src={img}
                    />
                  </PhotoView>
                </PhotoProvider>
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {title}
                  </h3>
                  <span className="font-medium italic text-base text-gray-600">
                    ${price}
                  </span>
                  <p className="font-normal  pb-4 text-sm">
                    {truncate(desc, 100)}
                  </p>
                  <Link to={`/servicedetails/${_id}`}>
                    <button
                      type="button"
                      className="font-semibold italic px-4 py-2  bg-rose-600 text-gray-100"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link to="/servicefeed">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
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
