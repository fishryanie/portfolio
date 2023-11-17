/** @format */

import { ROUTER } from '@constants';

const Menu = [
  {
    group: 'MENU',
    childGroup: [
      { title: 'Home', path: ROUTER.HOME_PAGE, icon: 'bxs-home' },
      {
        title: 'About',
        icon: 'bxs-id-card',
        path: ROUTER.ABOUT_PAGE,
      },
      {
        title: 'Project',
        icon: 'bx-code-block',
        path: ROUTER.PROJECT_PAGE,
      },
      {
        title: 'Working',
        icon: 'bxs-briefcase',
        path: ROUTER.WORK_EXP_PAGE,
      },
      {
        title: 'Education',
        icon: 'bxs-graduation',
        path: ROUTER.EDUCATION_PAGE,
      },
      {
        title: 'Skill',
        icon: 'bxs-extension',
        path: ROUTER.SKILL_PAGE,
      },
      {
        title: 'Certificate',
        icon: 'bxs-medal',
        path: ROUTER.CERTIFICATE_PAGE,
      },
      {
        title: 'Contact',
        icon: 'bxs-contact',
        path: ROUTER.CONTACT_PAGE,
      },
    ],
  },
  {
    group: 'OTHER',
    childGroup: [
      {
        title: 'Settings',
        path: 'settings',
        icon: 'bxs-cog',
      },
      {
        title: 'Logout',
        path: 'about',
        icon: 'bx-log-out',
      },
    ],
  },
];

export default Menu;
