/** @format */

import React, { Fragment } from 'react';
import ProfileCard from './components/ProfileCard';
import Skill from './components/Skill';
import Project from './components/Project';

export default function HomePage() {
  return (
    <Fragment>
      <div className="lg:h-[45%] lg:py-2 lg:px-4">
        <div className="lg:h-[12%] ms-4 text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold anim">Intro</div>
        <div className="lg:h-[88%] flex">
          <ProfileCard />
          <Skill />
        </div>
      </div>
      <div className="h-[45%] lg:p-2 lg:px-4">
        <div
          className="lg:h-[12%] ms-4 text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold anim"
          style={{ animationDelay: '0.3s' }}
        >
          Project
        </div>
        <Project />
      </div>
    </Fragment>
  );
}
