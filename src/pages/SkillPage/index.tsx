/** @format */

import React from 'react';
import { Flat } from '@alptugidin/react-circular-progress-bar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RESPONSIVE } from '@constants';
import { Autoplay } from 'swiper/modules';
import useDimensions from '@hooks/useDimensions';
import dataSkill from '@constants/dataSkill.json';
import styled from 'styled-components';

type TypeSkill = { title: string; value: number; color: string };

const listSoftSkills = [
  { title: 'Team management', value: 85, color: '#90F1EF' },
  { title: 'Time management', value: 95, color: '#FFD6E0' },
  { title: 'Quick leaning', value: 90, color: '#FFEF9F' },
  { title: 'Presentation', value: 80, color: '#C1FBA4' },
  { title: 'Sociable', value: 95, color: '#7BF1A8' },
];

const SkillPage: React.FC = () => {
  const { width } = useDimensions();
  return (
    <section className="h-full w-full p-5">
      <div className="lg:h-[40%]">
        <div className="lg:h-[12%] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold anim">Specialist skills</div>
        <Swiper
          loop={true}
          className="lg:h-[88%] w-full"
          slidesPerView={5}
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          {dataSkill.map((item, index) => (
            <SwiperSlide className="z-10 p-5" key={index} style={{ animationDelay: `0.${index}s` }}>
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
      </div>

      <div className="h-[60%] w-full">
        <div className="lg:h-[12%] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold anim">Specialist skills</div>
        <div className="lg:h-[88%] grid grid-cols-2 md:grid-cols-2 gap-8 content-start">
          {listSoftSkills.map((skill, idxSkill) => (
            <ItemSortSkill skill={skill} idxSkill={idxSkill} key={idxSkill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ItemSortSkill = ({ skill, idxSkill }: { skill: TypeSkill; idxSkill: number }) => {
  const AnimatedElement = styled.div`
    animation: increaseWidth 2s forwards;
    width: 0px;
    background: ${skill.color};
    @keyframes increaseWidth {
      to {
        width: ${skill.value}%;
      }
    }
  `;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{skill.title}</span>
        <span className="text-sm font-medium text-white">{skill.value}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-400 rounded-full ">
        <AnimatedElement className="h-2.5 rounded-full" />
      </div>
    </div>
  );
};

export default SkillPage;
