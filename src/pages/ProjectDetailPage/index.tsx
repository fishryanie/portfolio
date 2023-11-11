/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataProject from '../../constants/dataProject.json';

type TypeProject = {
  id: string;
  title: string;
  picture: string;
  category: string[];
  listFeature: Array<{ title: string; content: string }>;
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  const [project, setProject] = useState<TypeProject>();

  useEffect(() => {
    if (projectId) {
      const result = dataProject.find(item => item.id === projectId);
      if (result) {
        setProject(result);
      }
    }
  }, [projectId]);

  return (
    <section className="h-full flex flex-row flex-shrink-0 p-4">
      <div className="lg:w-[65%]">
        <div className="lg:h-[50%] rounded-2xl overflow-hidden">
          <img className="w-full h-full object-cover" src={project?.picture} alt="" />
        </div>
      </div>
      <div className="lg:w-[35%]">
        <div className="lg:h-[100%] rounded-2xl ml-5 bg-primary overflow-y-auto">
          <div className="mx-4 py-4 sticky top-0 left-0 font-semibold text-white bg-primary border-b border-color">
            Tính năng nổi bật
          </div>
          <ul className="max-w-md p-4">
            {project?.listFeature.map((feature, index) => (
              <li className="py-2" key={index}>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/128/10629/10629607.png"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white mb-2">{feature.title}</p>
                    <p className="text-xs text-color-primary">{feature.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
