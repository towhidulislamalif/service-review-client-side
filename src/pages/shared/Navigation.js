import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../context/Authentication';
// navbar logo
import logo from '../../assets/img/logo/logo.png';
function Navigation() {
  const { user, signout } = useContext(AuthenticationContext);

  // signout
  const signoutUser = () => {
    signout()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-gradient-to-t from-gray-800 to-gray-900">
      <div className="p-6 space-y-8">
        <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-900">
          <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
            <img src={logo} alt="" />
          </Link>
          <div className="items-center hidden space-x-8 sm:flex">
            <div className="font-semibold italic space-x-4 text-gray-500">
              <Link rel="noopener noreferrer" to="/">
                Home
              </Link>
              {user?.uid && (
                <>
                  <Link rel="noopener noreferrer" to="/addservice">
                    Add Services
                  </Link>
                  <Link rel="noopener noreferrer" to="/myreviews">
                    My Reviews
                  </Link>
                </>
              )}
              <Link rel="noopener noreferrer" to="/blogs">
                Blogs
              </Link>
            </div>
            {user?.uid ? (
              <button
                onClick={signoutUser}
                className="font-semibold italic px-4 py-2 rounded-md bg-pink-700 text-gray-100"
              >
                Log out
              </button>
            ) : (
              <>
                <Link to="/signup">
                  <button className="font-semibold italic px-4 py-2 rounded-md bg-pink-700 text-gray-100">
                    Sign up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="font-semibold italic px-4 py-2 rounded-md bg-pink-700 text-gray-100">
                    Log in
                  </button>
                </Link>
              </>
            )}
          </div>
          <button className="flex items-center justify-center p-2 sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
