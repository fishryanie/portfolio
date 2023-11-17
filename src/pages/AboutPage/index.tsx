/** @format */

import React from 'react';
import './style.css';
type Props = {};

function AboutPage({}: Props) {
  return (
    <section className="w-full h-full flex">
      <div className="lg:w-[45%] flex justify-end mt-20 mr-10 p-5">
        <div className="lg:w-[80%]">
          <div className="card anim">
            <div className="card-empty" />
            <img
              className="w-full h-full absolute bottom-8 right-8 object-cover z-10"
              src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/313440400_3250610998514861_8225329897513153135_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4PiSMrWyAfEAX9vbGBv&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDe2D95PcrTBIhMefWe8szgcXBfao3PIiPkK4rP2kGRBA&oe=655A442E"
              alt=""
            />
          </div>
          <div className="w-4/5 flex justify-around my-10">
            <a href="https://www.facebook.com/fishryanie/">
              <i className="bx bxl-facebook xl:text-2xl 2xl:text-3xl anim" style={{ animationDelay: '0.1s' }} />
            </a>
            <a href="mailto:qphanquan1998@mail.com">
              <i className="bx bxl-google xl:text-2xl 2xl:text-3xl anim" style={{ animationDelay: '0.2s' }} />
            </a>
            <a href="https://www.instagram.com/phryan217/">
              <i className="bx bxl-instagram xl:text-2xl 2xl:text-3xl anim" style={{ animationDelay: '0.3s' }} />
            </a>
            <a href="http://github.com/fishryanie/">
              <i className="bx bxl-github xl:text-2xl 2xl:text-3xl anim" style={{ animationDelay: '0.4s' }} />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-[55%] mt-20 p-5">
        <h1 className="mb-5 lg:text-xl xl:text-3xl 2xl:text-4xl font-bold uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About Me</span>
        </h1>
        <div className="mb-3 anim">
          <span className="mr-2 lg:text-xl">Hello, my name is</span>
          <span className="lg:text-xl xl:text-2xl tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Phan Hồng Quân</span>
        </div>
        <div className="mb-5 anim">
          <span className="text-white bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-5 py-2 text-center me-2 ">
            Mobile Developer
          </span>
        </div>

        <RenderRow delay="0.10s" title="Career goal" content="Become javascript full-stack developer. Can handle frameworks that related to ReactJS, NodeJS, React Native. Promote to middle position after 3 years after graduated" />
        <RenderRow delay="0.15s" title="Gender" content="Male" />
        <RenderRow delay="0.20s" title="Birthday" content="21/07/1998" />
        <RenderRow delay="0.25s" title="Phone" content="0979955925" />
        <RenderRow delay="0.30s" title="Email" content="qphanquan1998@gmail.com" />
        <RenderRow delay="0.35s" title="Address" content="Gò Vấp, Hồ Chí Minh" />
        <RenderRow delay="0.40s" title="Education" content="<br> - FPT College Polytechnic - ( Majors: Mobile java app - Average score 8.8 ) <br> - CyberSoft Academy - ( Majors: fe-web javascript, React, Angular )" />

        <button className="my-5 anim" style={{ animationDelay: '0.45s' }}>
          <span className="text-white bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-5 py-3 text-center">
            Download CV
            <i className="bx bxs-download bx-fade-down ml-2"></i>
          </span>
        </button>
      </div>
    </section>
  );
}

const RenderRow = ({ title, content, delay }: { title: string; content: string; delay: string }) => {
  return (
    <div className="mb-3 anim" style={{ animationDelay: delay }}>
      <span className="mr-2 lg:text-lg text-transparent font-bold bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{title}:</span>
      <span className="lg:text-base font-normal" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AboutPage;
