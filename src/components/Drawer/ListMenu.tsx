import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  IdentificationIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export const listMenu = [
  {
    group: "MENU",
    childGroup: [
      {
        title: "Home",
        path: "home",
        icon: <HomeIcon />,
      },
      {
        title: "About",
        path: "about",
        icon: <UserIcon />,
      },
      {
        title: "Project",
        path: "project",
        icon: <ClipboardDocumentListIcon />,
      },
      { title: "Working", icon: <BriefcaseIcon />, path: "working" },
      { title: "Education", icon: <AcademicCapIcon />, path: "education" },
      {
        title: "Certificate",
        path: "certificate",
        icon: <IdentificationIcon />,
      },
      {
        title: "Contacts",
        path: "contacts",
        icon: <ChatBubbleLeftRightIcon />,
      },
    ],
  },
];
