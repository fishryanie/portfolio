/** @format */

import React from 'react';
import { Flat } from '@alptugidin/react-circular-progress-bar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import dataSkill from './data.json';
import 'swiper/css';
import useDimensions from '../../../../hook/useDimensions';
import { RESPONSIVE } from '../../../../constants';

const Skill: React.FC = () => {
  const { width } = useDimensions();
  return (
    <section className="lg:basis-[45%] lg:ms-6 h-full overflow-hidden anim" style={{ animationDelay: '0.1s' }}>
      <div className="lg:text-lg mb-1 font-semibold">Career goal</div>
      <div className="lg:text-base mb-2">
        Become javascript full-stack developer. Can handle frameworks that related to ReactJS, NodeJS, React Native.
        Promote to middle position after 3 years after graduated
      </div>
      <div className="lg:text-lg font-semibold mb-2">Specialist skills</div>
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={width > RESPONSIVE['lg'] ? 4 : 3}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {dataSkill.map((item, index) => (
          <SwiperSlide className="z-10" key={index} style={{ animationDelay: `0.${index}s` }}>
            <Flat
              progress={item.value}
              range={{ from: 0, to: 100 }}
              sign={{ value: '%', position: 'end' }}
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
                bgStrokeColor: '#353340',
                bgColor: { value: '#252936', transparency: '10' },
                shape: 'full',
                valueWeight: 'bold',
                textWeight: 'bold',
                textFamily: 'Trebuchet MS',
                loadingTime: 1000,
                miniCircleColor: '#ff0000',
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
};

export default Skill;
