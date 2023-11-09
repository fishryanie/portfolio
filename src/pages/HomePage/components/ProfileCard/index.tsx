/** @format */

import React from 'react';
import './style.scss';
import acs from './IMG_0027.jpg';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function ProfileCard() {
  return (
    <div className="lg:basis-[55%] h-full relative rounded-2xl overflow-hidden anim">
      <div className="z-10 w-full h-full rounded-2xl absolute top-0 left-0 right-0 bottom-0 profile-card__overlay" />
      <div className="h-full flex flex-row absolute top-0 left-0 right-0 bottom-0">
        <div className="basis-1/2 h-full">
          <img className="w-full h-full max-h-full object-fill" src={acs} alt="" />
        </div>
      </div>
      <div className="h-full z-20 flex flex-row absolute top-0 left-0 right-0 bottom-0 ">
        <div className="basis-2/5 h-full" />
        <div className="basis-3/5 h-full p-3">
          <div className="lg:text-xl xl:text-2xl uppercase tracking-wider font-extrabold mb-2">Phan Hồng Quân</div>
          <div className="lg:text-xs xl:text-sm uppercase inline  font-extrabold rounded-xl py-1 px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Mobile Developer
          </div>
          <div className="flex items-center mt-3 mb-2 cursor-pointer">
            <div className="flex w-1/2 items-center">
              <i className="bx bx-male-female rounded-full p-2 me-2 bg-zinc-600"></i>
              <span className="text-sm">Male</span>
            </div>
            <div className="w-1/2">
              <i className="bx bxs-calendar rounded-full p-2 me-2 bg-zinc-600"></i>
              <span className="text-sm">21/07/1998</span>
            </div>
          </div>
          <div className="mb-2 cursor-pointer">
            <i className="bx bxs-phone rounded-full p-2 me-2 bg-zinc-600"></i>
            <span className="text-sm">0979955925</span>
          </div>
          <div className="mb-2 cursor-pointer">
            <i className="bx bxs-envelope rounded-full p-2 me-2 bg-zinc-600"></i>
            <span className="text-sm">qphanquan1998@gmail.com</span>
          </div>
          <div className="mb-2 cursor-pointer">
            <i className="bx bxs-home rounded-full p-2 me-2 bg-zinc-600"></i>
            <span className="text-sm">Gò Vấp, Hồ Chí Minh</span>
          </div>

          <Link to={''} className="flex items-center absolute bottom-2 right-5">
            <ArrowLongRightIcon className="w-6 h-6 mx-5 bx-fade-right" />
            <span className="text-xs">Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
