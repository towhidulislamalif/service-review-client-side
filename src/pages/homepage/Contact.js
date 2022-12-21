import React from 'react';
import contact from '../../assets/img/gallery/contact_form.png';
import { toast } from 'react-toastify';
function Contact() {
  const handlecontact = (e) => {
    e.preventDefault();
    const client = e.target.client.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(client, email, message);
    toast.success('Email send!');
    e.target.reset();
  };
  return (
    <section className="pb-16">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-sm text-orange-400">CONTACT FORM</h1>
          <p className="text-xl sm:text-3xl pt-2 pb-4 text-gray-800">
            FEEL FREE TO CONTACT WITH US!
          </p>
          <div className="space-y-4">
            <img src={contact} alt="" className="object-cover" />
          </div>
        </div>
        <form
          onSubmit={handlecontact}
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              name="client"
              placeholder="John Doe"
              className="block w-full outline-none rounded shadow"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="block w-full outline-none rounded shadow"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              name="message"
              className="block w-full outline-none rounded shadow"
            ></textarea>
          </label>
          <button
            type="submit"
            className="self-start px-4 py-2 text-sm bg-red-600 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
