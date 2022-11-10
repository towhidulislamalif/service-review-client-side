import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { AuthenticationContext } from '../context/Authentication';

function MyReviews() {
  // title
  useTitle('My Reviews');

  // use context
  const { user } = useContext(AuthenticationContext);

  const [myreviews, setMyreviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?name=${user?.displayName}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setMyreviews(json.data));
  }, [user?.displayName, refresh]);

  const deleteReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          toast.success(json.message);
          setRefresh(!refresh);
        } else {
          toast.error(json.message);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      {myreviews.length > 0 ? (
        <div>
          {myreviews.map((myreview) => {
            const { _id, message, photo, reviewer } = myreview;
            return (
              <div
                key={_id}
                className="container flex flex-col w-full max-w-3xl p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800"
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
                      <h4 className="font-bold"> {reviewer} </h4>
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
                <div className="flex gap-4 text-sm py-4 divide-x">
                  <button
                    onClick={() => deleteReview(_id)}
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1 font-medium italic text-sm bg-gray-600 text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1 font-medium italic text-sm bg-pink-600 text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center font-semibold italic text-3xl text-gray-600">
          <h2>No reviews were added</h2>
        </div>
      )}
    </>
  );
}

export default MyReviews;
