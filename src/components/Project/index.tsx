import React, { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ImageView, { TypeImageStatus } from "../ImageView";

const dataProject = [
  {
    title: "Carta",
    category: "ecommerce",
    picture: `${process.env.PUBLIC_URL}/assets/carta.webp`,
  },
  {
    title: "Jobsbe",
    category: "ecommerce",
    picture: `${process.env.PUBLIC_URL}/assets/jobsbe.webp`,
  },
  {
    title: "Sgo",
    category: "ecommerce",
    picture: `${process.env.PUBLIC_URL}/assets/sgo.webp`,
  },
  {
    title: "DTM",
    category: "ecommerce",
    picture: `${process.env.PUBLIC_URL}/assets/hoivien.webp`,
  },
];

export default function Project() {
  const [imageStatus, setImageStatus] = useState<TypeImageStatus>({
    isShow: false,
    picture: "",
  });

  return (
    <Fragment>
      <ImageView imageStatus={imageStatus} onImageStatus={setImageStatus} />
      <div className="flex">
        {dataProject.map((item, index) => (
          <div
            key={index}
            className={`basis-1/4 h-64 rounded-3xl bg-primary overflow-hidden ${
              index !== 0 && "ms-5"
            }`}
          >
            <img
              onClick={() => {
                setImageStatus({ isShow: true, picture: item.picture });
              }}
              className="w-full h-3/5 object-cover"
              src={item.picture}
              alt=""
            />
            <div className="p-4">
              <p>{item.title}</p>
              {/* <p>Shopping</p> */}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
