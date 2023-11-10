/** @format */

import React from 'react';

interface TypeWorkExp {}

const dataWorking = [
  {
    logo: '',
    company: 'Công ty TNHH Giải Pháp IMS',
    position: 'Fresher React Native',
    timeStart: 'September 2022',
    timeEnd: 'Now',
    description:
      'Công Ty TNHH Giải pháp IMS ( IMS solution Co.LTD - Viết tắc là IMS) hoạt động trong lĩnh vực công nghệ thông tin, website, phần mềm cho doanh nghiệp và tổ chức.',
  },
  {
    logo: '',
    company: 'Công ty cổ phần Gcalls - Giải pháp tổng đài CSKH & Bán Hàng',
    position: 'Intern Full Stack',
    timeStart: 'April 2022',
    timeEnd: 'August 2022',
    description:
      'Dịch vụ cho thuê giải pháp tổng đài ảo Chăm Sóc Khách Hàng & Bán Hàng. Dành cho các doanh nghiệp ưu tiên nâng cao hiệu suất, chú trọng trải nghiệm khách hàng và yêu dữ liệu. Gcalls là giải pháp phần mềm số hoá hệ thống điện thoại của doanh nghiệp, có khả năng tích hợp với nhiều phần mềm khác, giúp doanh nghiệp quản lý tập trung dữ liệu khách hàng và cuộc gọi, dễ dàng đánh giá KPI của đội ngũ bán hàng và CSKH, từ đó tăng doanh thu và nâng cao dịch vụ.',
  },
];

const WorkExpPage: React.FC<TypeWorkExp> = () => {
  return (
    <section className="w-full h-full p-8">
      <ol className=" relative border-l border-gray-200 ">
        {dataWorking.map((item, index) => (
          <li className="mb-10 ml-8 anim" key={index} style={{ animationDelay: `0.${index}s` }}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-11 ring-8 ring-white">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              {item.company}
              {index === 0 && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {item.timeStart} - {item.timeEnd}
            </time>
            <p className="mb-4 text-sm font-normal text-white">{item.description}</p>
            <p className="lg:text-xs xl:text-sm inline  font-extrabold rounded py-1 px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
              {item.position}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WorkExpPage;
