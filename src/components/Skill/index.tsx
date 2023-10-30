import React from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProgressBar from "react-animated-progress-bar";
// Import Swiper styles
import "swiper/css";
const dataSkill = [
  {
    title: "Javascript",
    value: 90,
    strokeColor: "#facc15",
    valueColor: "#facc15",
    textColor: "#ffffff",
  },
  {
    title: "React",
    value: 80,
    strokeColor: "#0ea5e9",
    valueColor: "#0ea5e9",
    textColor: "#ffffff",
  },
  {
    title: "Node",
    value: 70,
    strokeColor: "#16a34a",
    valueColor: "#16a34a",
    textColor: "#ffffff",
  },
  {
    title: `React Native`,
    value: 90,
    strokeColor: "#06b6d4",
    valueColor: "#06b6d4",
    textColor: "#ffffff",
  },
  {
    title: "Mongodb",
    value: 70,
    strokeColor: "#854d0e",
    valueColor: "#854d0e",
    textColor: "#ffffff",
  },
];

export default function Skill() {
  return (
    <section className="basis-2/5 h-72 ms-10 overflow-hidden anim" style={{animationDelay: '0.1s'}}>
      <div className="text-lg font-semibold mb-3">Career goal</div>
      <div className="mb-5">
        Become javascript full-stack developer. Can handle frameworks that
        related to ReactJS, NodeJS, React Native. Promote to middle position
        after 3 years after graduated
      </div>
      <div className="text-lg font-semibold mb-5">Specialist skills</div>
      <Swiper
        loop={true}
        spaceBetween={15}
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {dataSkill.map((item, index) => (
          <SwiperSlide
            className="me-3 z-10"
            key={index}
            style={{ animationDelay: `0.${index}s` }}
          >
            <Flat
              progress={item.value}
              range={{ from: 0, to: 100 }}
              sign={{ value: "%", position: "end" }}
              text={item.title}
              // showMiniCircle={true}
              showValue={true}
              sx={{
                barWidth: 6,
                textSize: 13,
                valueSize: 20,
                textColor: item.textColor,
                valueColor: item.valueColor,
                strokeColor: item.strokeColor,
                bgStrokeColor: "#353340",
                bgColor: { value: "#252936", transparency: "10" },
                shape: "full",
                valueWeight: "bold",
                textWeight: "bold",
                textFamily: "Trebuchet MS",
                loadingTime: 1000,
                miniCircleColor: "#ff0000",
                miniCircleSize: 0,
                valueAnimation: true,
                intersectionEnabled: true,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
