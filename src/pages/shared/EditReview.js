import React, { useContext, useEffect, useState } from 'react';
import { json, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthenticationContext } from '../context/Authentication';

function EditReview() {
  const router = useParams();
  const { id } = router;

  // use context
  const { user } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [myreview, setMyreview] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-towhidulislamalif.vercel.app/reviews/${id}`
    )
      .then((res) => res.json())
      .then((json) => setMyreview(json.data));
  }, [refresh, id]);

  console.log(myreview);

  const formSubmit = (e) => {
    e.preventDefault();
    const update = {
      name: e.target.name.value,
      photo: e.target.photo.value,
      message: e.target.message.value,
    };
    fetch(
      `https://b6a11-service-review-server-side-towhidulislamalif.vercel.app/reviews/${id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          toast.success(json.message);
          navigate('/myreviews');
        } else {
          toast.error(json.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <section className="p-6 text-gray-800">
      <form
        onSubmit={formSubmit}
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
            defaultValue={myreview?.reviewer}
            // readOnly
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
            defaultValue={myreview?.photo}
            // readOnly
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
            defaultValue={myreview?.message}
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
  );
}

export default EditReview;
