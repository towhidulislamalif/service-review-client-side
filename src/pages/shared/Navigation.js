import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../context/Authentication';

import logo from '../../assets/img/logo/logo.png';
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signout } = useContext(AuthenticationContext);

  // signout
  const signoutUser = () => {
    signout()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <nav className="relative shadow bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link className=" font-bold text-2xl lg:text-3xl" to="/">
              <img
                src={logo}
                alt="brand"
                className="object-contain w-24 sm:w-32"
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='aria-label="toggle menu'
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={
              isOpen
                ? 'translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center '
                : 'opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center'
            }
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-rose-500"
                rel="noopener noreferrer"
                to="/"
              >
                Home
              </Link>
              {user?.uid && (
                <>
                  <Link
                    className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-rose-500"
                    rel="noopener noreferrer"
                    to="/addservice"
                  >
                    Add Services
                  </Link>
                  <Link
                    className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-rose-500"
                    rel="noopener noreferrer"
                    to="/myreviews"
                  >
                    My Reviews
                  </Link>
                </>
              )}
              <Link
                className="px-2 py-2 mx-3 mt-2 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-rose-500"
                rel="noopener noreferrer"
                to="/blogs"
              >
                Blogs
              </Link>
            </div>
            <div className="flex items-center mt-4 lg:mt-0">
              {user?.uid ? (
                <button
                  onClick={signoutUser}
                  type="button"
                  className="px-2 py-2 mt-2 bg-gray-700 text-white transition-colors duration-500 transform rounded lg:mt-0 hover:text-rose-500"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="px-2 py-2 mt-2 bg-rose-600 text-white transition-colors duration-500 transform rounded lg:mt-0"
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
