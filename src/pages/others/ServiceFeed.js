import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

function ServiceFeed() {
  useTitle('Service Feed');
  const [servicefeed, setServicefeed] = useState([]);

  useEffect(() => {
    fetch(
      'https://b6a11-service-review-server-side-towhidulislamalif.vercel.app/servicefeed'
    )
      .then((res) => res.json())
      .then((json) => setServicefeed(json.data));
  }, []);

  const truncate = (string, number) => {
    return string?.length > number ? string.substr(0, number) + '...' : string;
  };

  return (
    <section className="py-6 sm:py-12 bg-gray-100 text-gray-900">
      <div className="container p-4 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Explore our services</h2>
          <p className="text-sm text-gray-600">
            Authoritatively integrate highly efficient alignments with.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {servicefeed.map((service) => {
            const { _id, desc, img, price, title } = service;
            return (
              <article key={_id} className="flex flex-col bg-gray-50">
                <div
                  rel="noopener noreferrer"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <PhotoProvider>
                    <PhotoView src={img}>
                      <img
                        alt=""
                        className="object-cover w-full h-52"
                        src={img}
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p
                    rel="noopener noreferrer"
                    className="font-medium text-xs tracking-wider uppercase hover:underline text-rose-600"
                  >
                    ${price}
                  </p>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {title}
                  </h3>
                  <div className=" text-xs text-gray-600">
                    <p className="pb-4">{truncate(desc, 100)}</p>
                    <Link to={`/servicedetails/${_id}`}>
                      <button
                        type="button"
                        className="px-4 py-2 font-semibold rounded bg-rose-600 text-gray-100"
                      >
                        View Details
                      </button>
                    </Link>
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

export default ServiceFeed;
