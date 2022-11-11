import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { AuthenticationContext } from '../context/Authentication';

function AddService() {
  // title
  useTitle('Add Services');

  // use context
  const { user } = useContext(AuthenticationContext);

  const add = (e) => {
    e.preventDefault();
    const service = {
      title: e.target.name.value,
      img: e.target.photo.value,
      price: e.target.price.value,
      desc: e.target.message.value,
    };

    fetch(
      'https://b6a11-service-review-server-side-towhidulislamalif.vercel.app/services',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(service),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          toast.success(json.message);
          e.target.reset();
        } else {
          toast.error(json.error);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900">
      <div className="w-full mx-auto space-y-4 text-center">
        <p className="text-xs font-semibold tracking-wider uppercase">Hello</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {user?.displayName}
        </h1>
      </div>
      <div className="pt-12 border-t border-gray-300">
        <section className="p-6 text-gray-800">
          <form
            onSubmit={add}
            noValidate=""
            className="container font-serif w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid"
          >
            <h2 className=" w-full text-3xl font-bold leading-tight">
              Add your service
            </h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Service name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Service name"
                required
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-1 ml-1">
                Service photo
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Service photo"
                required
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-1 ml-1">
                Service price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="Service price"
                required
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
                data-temp-mail-org="2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ml-1">
                Description
              </label>
              <textarea
                id="message"
                name="message"
                type="text"
                placeholder="Description..."
                required
                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-pink-600 bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-pink-700 focus:ring-pink-600 hover:ring-pink-600 text-gray-50"
              >
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </article>
  );
}

export default AddService;
