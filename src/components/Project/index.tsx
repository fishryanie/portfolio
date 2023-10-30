/** @format */

import React, { Fragment, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ImageView, { TypeImageStatus } from '../ImageView';
import dataProject from './data.json';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Project() {
  const [imageStatus, setImageStatus] = useState<TypeImageStatus>({
    isShow: false,
    picture: '',
  });

  return (
    <Fragment>
      <ImageView imageStatus={imageStatus} onImageStatus={setImageStatus} />
      <div className="flex">
        {dataProject.map((item, index) => (
          <div
            key={index}
            style={{ animationDelay: `0.${4 + index}s` }}
            className={`basis-1/4 h-64 rounded-3xl bg-primary overflow-hidden anim ${index !== 0 && 'ms-5'}`}
          >
            <img
              onClick={() => setImageStatus({ isShow: true, picture: item.picture })}
              className="w-full h-3/5 object-cover"
              src={item.picture}
              alt=""
            />
            <div className="p-4">
              <div>{item.title}</div>
              {/* <div>{item.category}</div> */}
              <Link to={''} className="flex items-center hover:font-extrabold">
                <span className="text-xs">View detail</span>
                <ArrowLongRightIcon className="w-6 h-6 mx-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
