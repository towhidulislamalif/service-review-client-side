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
          {/* <div>
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
          </div> */}
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
