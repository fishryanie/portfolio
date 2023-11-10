/** @format */

import React, { useRef } from 'react';

export default function ContactPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameValue = nameRef.current?.value || '';
    const emailValue = emailRef.current?.value || '';
    const phoneValue = phoneRef.current?.value || '';
    const messageValue = messageRef.current?.value || '';
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
    console.log('phone:', phoneValue);
    console.log('message:', messageValue);
  };

  return (
    <section className="lg:w-3/4 m-auto">
      <div className="text-3xl my-10 anim" style={{ animationDelay: '0.1s' }}>
        Contact
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-5 anim" style={{ animationDelay: '0.2s' }}>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-body px-2 peer-focus:px-2 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Your Name
          </label>
        </div>

        <div className="relative mb-5 anim" style={{ animationDelay: '0.3s' }}>
          <input
            type="text"
            id="phone"
            ref={phoneRef}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute text-sm text-white  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-body px-2 peer-focus:px-2 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Your Phone
          </label>
        </div>

        <div className="relative mb-5 anim" style={{ animationDelay: '0.4s' }}>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-white  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-body px-2 peer-focus:px-2 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Your Email
          </label>
        </div>

        <div className="relative mb-5 anim" style={{ animationDelay: '0.5s' }}>
          <textarea
            id="message"
            rows={5}
            ref={messageRef}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
          />
          <label
            htmlFor="message"
            className="absolute text-[19px] text-white  duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] bg-body px-2 peer-focus:px-2 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[.6] peer-focus:-translate-y-5 left-1"
          >
            Your Message
          </label>
        </div>

        <button
          type="button"
          style={{ animationDelay: '0.6s' }}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-10 mb-2 anim"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
