/** @format */
import { ROUTER } from '@constants';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SkillPage from './SkillPage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';
import WorkExpPage from './WorkExpPage';
import EducationPage from './EducationPage';
import CertificatePage from './CertificatePage';
import ProjectDetailPage from './ProjectDetailPage';

export const page = {
  [ROUTER.HOME_PAGE]: <HomePage />,
  [ROUTER.ABOUT_PAGE]: <AboutPage />,
  [ROUTER.SKILL_PAGE]: <SkillPage />,
  [ROUTER.CONTACT_PAGE]: <ContactPage />,
  [ROUTER.PROJECT_PAGE]: <ProjectPage />,
  [ROUTER.WORK_EXP_PAGE]: <WorkExpPage />,
  [ROUTER.EDUCATION_PAGE]: <EducationPage />,
  [ROUTER.CERTIFICATE_PAGE]: <CertificatePage />,
  [ROUTER.PROJECT_DETAIL_PAGE]: <ProjectDetailPage />,
};
