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
    <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 text-gray-900">
      <div className="w-full mx-auto space-y-4 text-center">
        <p className="text-xs font-semibold tracking-wider uppercase">Hello</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl text-rose-600">
          {user?.displayName}
        </h1>
      </div>
      <div className="pt-12 border-t border-gray-500">
        <section className="p-6">
          <form
            onSubmit={add}
            noValidate=""
            className="container w-full max-w-xl p-6 mx-auto space-y-6 rounded shadow bg-gray-50 ng-untouched ng-pristine ng-valid"
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
                className="block w-full p-2 rounded bg-gray-100"
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
                className="block w-full p-2 rounded bg-gray-100"
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
                className="block w-full p-2 rounded bg-gray-100"
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
                className="block w-full p-2 rounded autoexpand bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold shadow bg-rose-600 text-white"
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
