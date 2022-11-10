import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo192.png';

function Footer() {
  return (
    <div className=" dark:bg-gray-800 dark:text-gray-100">
      <div className="p-6 space-y-8">
        <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
          <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
            <div className="flex flex-row pr-3 gap-12 space-x-8 sm:space-x-8">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-rose-400">
                <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
                  <div className="flex items-center relative">
                    <img className="w-16 object-contain" src={logo} alt="" />
                    <span className="font-serif font-semibold italic text-base text-gray-800 absolute -right-12">
                      Fitney
                    </span>
                  </div>
                </Link>
              </div>
              <ul className="font-semibold  flex flex-wrap items-center italic space-x-4 sm:space-x-8 text-gray-500">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <ul className="font-semibold flex flex-wrap italic pl-3 space-x-4 sm:space-x-8 text-gray-500">
              <li>
                <a rel="noopener noreferrer" href="https://github.com/">
                  Github
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.instagram.com/">
                  Instagram
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
