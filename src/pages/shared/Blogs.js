import React from 'react';

function Blogs() {
  return (
    <div className="">
      <div className="container max-w-5xl px-10 py-6 mx-auto my-6 rounded-lg shadow-sm space-y-12 bg-gray-50">
        <div className="">
          <h2 className="text-2xl font-bold mb-4 hover:underline">
            Difference between Node.JS and Javascript
          </h2>
          <span className="font-semibold italic text-sm bg-pink-600 text-gray-100 ">
            NodeJs
          </span>
          <p className="font-semibold italic text-sm text-gray-600">
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
          </p>
          <span className="font-semibold italic text-sm bg-pink-600 text-gray-100 ">
            JavaScript
          </span>
          <p className="font-semibold italic text-sm text-gray-600">
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script.
          </p>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4 hover:underline">
            How NodeJS handle multiple client requests?
          </h2>
          <span className="font-semibold italic text-sm bg-pink-600 text-gray-100 ">
            NodeJs
          </span>
          <p className="font-semibold italic text-sm text-gray-600">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </p>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4 hover:underline">
            Difference between SQL and NoSQL
          </h2>
          <span className="font-semibold italic text-sm bg-pink-600 text-gray-100 ">
            SQL
          </span>
          <ul className="font-semibold italic text-sm text-gray-600">
            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
            <li>These databases have fixed or static or predefined schema</li>
            <li>
              These databases are not suited for hierarchical data storage.
            </li>
            <li>These databases are best suited for complex queries</li>
          </ul>
          <span className="font-semibold italic text-sm bg-pink-600 text-gray-100 ">
            NoSQL
          </span>
          <ul className="font-semibold italic text-sm text-gray-600">
            <li>Non-relational or distributed database system.</li>
            <li>They have dynamic schema</li>
            <li>
              These databases are best suited for hierarchical data storage.
            </li>
            <li>These databases are not so good for complex queries</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4 hover:underline">
            What is JWT ? How JWT (JSON Web Token) authentication works?
          </h2>
          <span className="font-semibold italic text-sm bg-pink-600 text-gray-100 ">
            JSON Web Token
          </span>
          <p className="font-semibold italic text-sm text-gray-600">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object.
          </p>
          <p className="font-semibold italic text-sm text-gray-600">
            It is compact, readable and digitally signed using a private key/ or
            a public key pair by the Identity Provider(IdP).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
