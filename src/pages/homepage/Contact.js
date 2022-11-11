import React from 'react';
// contact form image
import contact from '../../assets/img/gallery/contact_form.png';

function Contact() {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-base font-medium text-orange-400">
            CONTACT FORM
          </h1>
          <p className="text-3xl pt-2 pb-4 text-slate-600">
            FEEL FREE TO CONTACT WITH US!
          </p>
          <div className="space-y-4">
            <img src={contact} alt="" />
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-pink-400 dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-pink-400 dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-400 dark:bg-gray-800"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-start px-6 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-red-600 text-gray-100 focus:ring-pink-400 hover:ring-pink-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
