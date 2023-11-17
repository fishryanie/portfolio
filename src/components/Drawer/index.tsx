/** @format */

import { Link, useLocation } from 'react-router-dom';
import listMenu from '@constants/dataMenu';
import Logo from '../Logo';
import './style.scss';

export default function Drawer() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === '/' + path ? 'is-active' : '';
  };

  return (
    <nav
      className={`min-[280px]:w-0 min-[280px]:p-0 lg:p-8 lg:w-24 xl:w-56 md:border-r xl:border-0 lg:border-solid border-color  flex flex-col flex-shrink-0 overflow-y-auto overflow-x-hidden h-full duration-300`}
    >
      <Logo />
      <div className="logo-expand mb-6">Portfolio</div>
      {listMenu.map((menu, index) => (
        <div className={`min-[280px]:w-0 side-wrapper lg:w-8 xl:w-36 py-9 duration-300 ${index !== 0 && 'border-t border-color'}`} key={index}>
          <div className="min-[280px]:hidden md:block text-xs">{menu.group}</div>
          <div className="flex flex-col side-menu">
            {menu.childGroup.map((childMenu, idxChildMenu) => (
              <Link
                className={` hover:font-semibold hover:text-white flex items-center mt-7 sidebar-link discover animate__animated animate__fadeInUp ${isActive(childMenu.path)}`}
                style={{ animationDelay: `0.${idxChildMenu}s` }}
                key={idxChildMenu}
                to={childMenu.path}
                state={{ some: 'value' }}
              >
                <i className={`bx ${childMenu.icon} lg:mr-8 xl:mr-4 w-8 bg-btn p-2 rounded-xl flex-shrink-0 duration-300`}></i>
                {childMenu.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
