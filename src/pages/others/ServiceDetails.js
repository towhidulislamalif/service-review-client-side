import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthenticationContext } from '../context/Authentication';

function ServiceDetails() {
  useTitle('Service Details');
  const service = useLoaderData();
  const { user } = useContext(AuthenticationContext);
  const { data } = service;

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/otherreviews?itemId=${data.itemId}`)
      .then((res) => res.json())
      .then((json) => setReview(json));
  }, []);

  console.log(service);

  const addReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const servicename = event.target.service.value;
    const photo = event.target.photo.value;
    const email = user?.email || 'NOT FOUND';
    const message = event.target.message.value;

    const review = {
      service: data._id,
      service_name: data.title,
      reviewer: name,
      photo,
      email,
      message,
    };
    console.log(review);
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((json) => {
        event.target.reset();
        console.log(json);
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-4xl p-4 shadow-md bg-gray-50 text-gray-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={data.img}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span className="font-medium italic text-base text-gray-600">
                  ${data.price}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-pink-600">
                {data.title}
              </h3>
              <p className="font-medium italic text-sm text-gray-600">
                {data.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* see others review */}
      <div>
        {review.map((rev) => {
          console.log(rev);
          const { _id, message, photo, reviewer } = rev;
          return (
            <div
              key={_id}
              className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800"
            >
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={photo}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{reviewer}</h4>
                    <span className="text-xs text-gray-600">2 days ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-600">
                <p>{message}</p>
              </div>
            </div>
          );
        })}
      </div>
      <section className="p-6 text-gray-800">
        <form
          onSubmit={addReview}
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Add your review
          </h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              required
              defaultValue={user?.displayName}
              readOnly
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Service name
            </label>
            <input
              id="name"
              name="service"
              type="text"
              placeholder="Service name"
              required
              defaultValue={service.data.title}
              readOnly
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1 ml-1">
              Photo Url
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              placeholder="Photo Url"
              required
              defaultValue={user?.photoURL}
              readOnly
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
              data-temp-mail-org="2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Message..."
              required
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-pink-600 focus:ring-pink-600 hover:ring-pink-600 text-gray-50"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ServiceDetails;
