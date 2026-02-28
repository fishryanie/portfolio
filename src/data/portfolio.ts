import type { AppLocale } from "@/i18n/routing";
import sourceProjects from "./projects.json";

type LocalizedText = Record<AppLocale, string>;

export type ProjectLink = {
  label: string;
  link: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

type FeatureItem = {
  title: string;
  description: string;
};

type FeatureGroup = {
  featureGroup: string;
  featureList: FeatureItem[];
};

type RawProject = {
  id: string;
  title: string;
  customer: string;
  technology: string[];
  platform: string[];
  position: string;
  type: string;
  member: number;
  linkDownload?: string | ProjectLink[];
  description: string;
  responsibility: string[];
  features?: FeatureGroup[];
};

export type CompanyId = "eboost" | "freelance" | "ims";

export type PortfolioProject = RawProject & {
  companyId: CompanyId;
  period: string;
  image: string;
  galleryImages: string[];
  source: string;
  scope: string;
  links: ProjectLink[];
  note?: string;
};

type ProjectMeta = {
  companyId: CompanyId;
  period: LocalizedText;
  image: string;
  galleryImages?: string[];
  source: string;
  scope: LocalizedText;
  extraLinks?: ProjectLink[];
  note?: LocalizedText;
};

export type CompanyGroup = {
  id: CompanyId;
  name: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  location: string;
  cvDownloadHref: string;
  cvFileName: string;
  cvDownloadAtsPdfHref: string;
  cvDownloadDocxHref: string;
  cvDownloadTxtHref: string;
  contacts: ContactItem[];
};

type CompanyGroupContent = {
  id: CompanyId;
  name: LocalizedText;
  period: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  highlights: Record<AppLocale, string[]>;
};

type HeroStat = {
  label: string;
  value: string;
};

function sameLocale(text: string): LocalizedText {
  return { vi: text, en: text };
}

const sharedProfile = {
  name: "Phan Hồng Quân",
  cvDownloadHref: "/cv/Phan-Hong-Quan-Executive-CV.pdf",
  cvFileName: "Phan-Hong-Quan-Executive-CV.pdf",
  cvDownloadAtsPdfHref: "/cv/Phan-Hong-Quan-ATS-Resume.pdf",
  cvDownloadDocxHref: "/cv/Phan-Hong-Quan-ATS-Resume.docx",
  cvDownloadTxtHref: "/cv/Phan-Hong-Quan-ATS-Resume.txt",
  contacts: [
    {
      label: "Phone",
      value: "0979955925",
      href: "tel:0979955925",
    },
    {
      label: "Email",
      value: "qphanquan1998@gmail.com",
      href: "mailto:qphanquan1998@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/hong-quan-phan-119419292",
      href: "https://www.linkedin.com/in/h%E1%BB%93ng-qu%C3%A2n-phan-119419292/",
    },
    {
      label: "GitHub",
      value: "github.com/fishryanie",
      href: "https://github.com/fishryanie",
    },
    {
      label: "Website",
      value: "cv-dev-portfolio.vercel.app",
      href: "https://cv-dev-portfolio.vercel.app",
    },
  ] as ContactItem[],
} satisfies Omit<
  Profile,
  "role" | "headline" | "location"
>;

const profileContent: Record<
  AppLocale,
  Pick<Profile, "role" | "headline" | "location">
> = {
  vi: {
    role: "Frontend Engineer (React Native / React / Next.js)",
    headline:
      "Xây dựng sản phẩm thực chiến cho mobile và web admin, tập trung vào độ ổn định phát hành, hiệu năng và khả năng mở rộng theo business growth.",
    location: "Gò Vấp, Hồ Chí Minh, Việt Nam",
  },
  en: {
    role: "Frontend Engineer (React Native / React / Next.js)",
    headline:
      "Building production-grade mobile apps and web admin platforms with a focus on release stability, performance, and scalable product growth.",
    location: "Go Vap, Ho Chi Minh City, Vietnam",
  },
};

const companyGroupContent: CompanyGroupContent[] = [
  {
    id: "eboost",
    name: sameLocale("Eboost (EVMobility)"),
    period: { vi: "08/2024 - Hiện tại", en: "08/2024 - Present" },
    role: sameLocale("Frontend Engineer"),
    summary: {
      vi: "Phát triển đồng thời mobile app EV charging và CMS quản trị nội bộ cho vận hành, marketing, partnership và technical monitoring.",
      en: "Delivered both an EV charging mobile app and an internal CMS platform for operations, marketing, partnerships, and technical monitoring.",
    },
    highlights: {
      vi: [
        "Làm chủ delivery cho 2 sản phẩm chính: app người dùng và hệ thống CMS/admin.",
        "Tích hợp workflow realtime (MQTT, notifications, charging status).",
        "Xây nền tảng quản trị dữ liệu lớn với Next.js, Ant Design và React Query.",
      ],
      en: [
        "Owned delivery for two core products: consumer app and CMS/admin platform.",
        "Implemented realtime workflows with MQTT, notifications, and charging status updates.",
        "Built scalable data-management modules with Next.js, Ant Design, and React Query.",
      ],
    },
  },
  {
    id: "freelance",
    name: { vi: "Freelance Project", en: "Freelance Project" },
    period: sameLocale("10/2024 - 02/2025"),
    role: sameLocale("Frontend Developer (Freelance)"),
    summary: {
      vi: "Triển khai Kinis cho landing growth, investor/partnership pipeline và nền tảng vận hành liên quan.",
      en: "Built Kinis growth landing flows, investor/partnership pipelines, and related operational interfaces.",
    },
    highlights: {
      vi: [
        "Thiết kế website growth pages định hướng chuyển đổi.",
        "Xây contact + admin management flow cho lead investor/partner.",
        "Mở rộng hệ sinh thái gồm web, mobile, backend, dashboard theo nhu cầu dự án.",
      ],
      en: [
        "Developed conversion-focused growth pages for key business funnels.",
        "Implemented investor/partner contact capture and admin management workflows.",
        "Contributed across web, mobile, backend, and dashboard surfaces as project scope expanded.",
      ],
    },
  },
  {
    id: "ims",
    name: sameLocale("IMS Solution"),
    period: sameLocale("03/2022 - 08/2024"),
    role: sameLocale("Mobile App Developer"),
    summary: {
      vi: "Tham gia phát triển nhiều ứng dụng production trong domain mobility, delivery, e-commerce, membership và marketplace.",
      en: "Contributed to multiple production apps across mobility, delivery, e-commerce, membership, and marketplace domains.",
    },
    highlights: {
      vi: [
        "Phát triển và maintain nhiều ứng dụng mobile thuộc một product suite lớn.",
        "Thực hiện full app lifecycle: feature, bugfix, optimization, release OTA.",
        "Tích hợp Firebase, maps/location, payment, deeplink, push notifications.",
      ],
      en: [
        "Built and maintained multiple production apps in a large product suite.",
        "Handled full app lifecycle: feature delivery, bug fixing, optimization, and OTA release.",
        "Integrated Firebase, maps/geolocation, payments, deep links, and push notifications.",
      ],
    },
  },
];

const projectMeta: Record<string, ProjectMeta> = {
  "eboost-mobile-app": {
    companyId: "eboost",
    period: { vi: "2024 - Hiện tại", en: "2024 - Present" },
    image: "/images/eboost-app/eboost-app-main.png",
    galleryImages: [
      "/images/eboost-app/home.png",
      "/images/eboost-app/IMG_6875.png",
      "/images/eboost-app/IMG_6876.png",
      "/images/eboost-app/IMG_6877.png",
      "/images/eboost-app/IMG_6878.png",
      "/images/eboost-app/IMG_6879.png",
      "/images/eboost-app/IMG_6880.png",
      "/images/eboost-app/IMG_6881.png",
      "/images/eboost-app/IMG_6882.png",
      "/images/eboost-app/IMG_6883.png",
    ],
    source: "Company/Eboost/eboost-mobile-app",
    scope: {
      vi: "Ứng dụng sạc xe điện cho người dùng",
      en: "Consumer EV charging mobile app",
    },
    extraLinks: [{ label: "Eboost Website", link: "https://eboost.vn" }],
  },
  "eboost-cms": {
    companyId: "eboost",
    period: { vi: "2024 - Hiện tại", en: "2024 - Present" },
    image: "/images/eboost-cms/eboost-cms.png",
    galleryImages: [
      "/images/eboost-cms/cms-transactions-data.png",
      "/images/eboost-cms/cms-payments-data.png",
      "/images/eboost-cms/cms-locations-data.png",
      "/images/eboost-cms/cms-notifications-data.png",
      "/images/eboost-cms/cms-advertisements-data.png",
      "/images/eboost-cms/cms-terms-conditions-data.png",
    ],
    source: "Company/Eboost/new-cms",
    scope: {
      vi: "Nền tảng CMS quản trị và vận hành",
      en: "Admin and operations CMS platform",
    },
    extraLinks: [{ label: "Eboost Website", link: "https://eboost.vn" }],
  },
  kinis: {
    companyId: "freelance",
    period: sameLocale("10/2024 - 02/2025"),
    image: "/images/kinis/kinis-home-hero.png",
    galleryImages: [
      "/images/kinis/kinis-about-hero.png",
      "/images/kinis/kinis-home-desktop.png",
      "/images/kinis/kinis-about-desktop.png",
      "/images/kinis/kinis-vi-desktop.png",
      "/images/kinis/kinis-faq-desktop.png",
      "/images/kinis/kinis-home-mobile.png",
      "/images/kinis/kinis-about-mobile.png",
      "/images/kinis/kinis-faq-mobile.png",
    ],
    source:
      "MyProject/kinis (kinis_web, Kinis mobile app, kinis_server, kinis_dashboard)",
    scope: {
      vi: "Landing, investor/partnership, admin và mở rộng hệ sinh thái",
      en: "Landing + investor/partnership + admin + ecosystem expansion",
    },
  },
  sky: {
    companyId: "ims",
    period: sameLocale("2022 - 2024"),
    image: "/images/see/see.png",
    galleryImages: [
      "/images/see/1-chon-loai-xe.png",
      "/images/see/dat-xe-may.png",
      "/images/see/1Home.png",
      "/images/see/Home.png",
      "/images/see/1-tim-kiem.png",
      "/images/see/1-san-pham.png",
      "/images/see/chi-tiet-cua-hang.png",
      "/images/see/thanh-toan.png",
      "/images/see/don-hang.png",
      "/images/see/1-lich-su.png",
      "/images/see/diem-tich-luy.png",
    ],
    source: "Company/IMS/sky",
    scope: {
      vi: "Hệ sinh thái gọi xe, giao hàng, ẩm thực và mua sắm all-in-one",
      en: "All-in-one ride, delivery, food, and commerce ecosystem",
    },
    extraLinks: [
      {
        label: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.ims.sky",
      },
      { label: "App Store", link: "https://apps.apple.com/app/id6475276823" },
    ],
  },
  rpm: {
    companyId: "ims",
    period: sameLocale("2022 - 2024"),
    image: "/images/rpm/rpm.png",
    galleryImages: [
      "/images/rpm/rpm-splash-screen.png",
      "/images/rpm/dang-nhap.png",
      "/images/rpm/home-2.png",
      "/images/rpm/danh-muc.png",
      "/images/rpm/san-pham-danh-muc.png",
      "/images/rpm/gio-hang-4.png",
      "/images/rpm/thanh-toan.png",
      "/images/rpm/cong-no.png",
    ],
    source: "Company/IMS/rpm",
    scope: { vi: "Ứng dụng thương mại điện tử", en: "E-commerce app" },
    extraLinks: [{ label: "RPM Website", link: "https://rpmvietnam.com" }],
  },
  carta: {
    companyId: "ims",
    period: sameLocale("2022 - 2024"),
    image: "/images/carta/cartas.png",
    galleryImages: [
      "/images/carta/splash-screen.png",
      "/images/carta/List.jpg",
      "/images/carta/Goiychoban.jpg",
      "/images/carta/Thongbao.jpg",
      "/images/carta/CTKM.jpg",
    ],
    source: "Company/IMS/carta",
    scope: { vi: "Ứng dụng marketplace", en: "Marketplace mobile app" },
    extraLinks: [
      {
        label: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.ims.carta",
      },
      { label: "App Store", link: "https://apps.apple.com/app/id1661596013" },
      { label: "Dynamic Link", link: "https://cartashop.page.link" },
    ],
  },
  "e-member": {
    companyId: "ims",
    period: sameLocale("2022 - 2024"),
    image: "/images/checkin/checkin.png",
    galleryImages: [
      "/images/checkin/log-in.jpg",
      "/images/checkin/home.jpg",
      "/images/checkin/su-kien.jpg",
      "/images/checkin/thu-moi.jpg",
      "/images/checkin/chi-tiet.jpg",
      "/images/checkin/chi-tiet-su-kien-dang-dien-ra-1.png",
      "/images/checkin/lich-su.jpg",
    ],
    source: "Company/IMS/e-member",
    scope: {
      vi: "Quản lý check-in sự kiện, e-ticket và khách tham dự",
      en: "Event check-in, e-ticket and attendee management",
    },
    extraLinks: [
      {
        label: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.ims.emember",
      },
      {
        label: "App Store",
        link: "https://apps.apple.com/vn/app/dtm-online/id6444394684?l=vi",
      },
    ],
  },
  "hong-phuc": {
    companyId: "ims",
    period: sameLocale("2022 - 2024"),
    image: "/images/hong-phuc/hongphuc.png",
    galleryImages: [
      "/images/hong-phuc/dang-ky-dich-vu.png",
      "/images/hong-phuc/dich-vu-moi.png",
      "/images/hong-phuc/nhap-km.png",
      "/images/hong-phuc/qua-tang.png",
      "/images/hong-phuc/them-nhan-vien-yeu-thich.png",
      "/images/hong-phuc/tai-khoan.png",
      "/images/hong-phuc/thanh-toan.png",
    ],
    source: "Company/IMS/hong-phuc",
    scope: {
      vi: "Ứng dụng đặt dịch vụ giúp việc và chăm sóc",
      en: "Housekeeping and care service booking app",
    },
    note: {
      vi: "Ứng dụng đã ngừng hoạt động, hiện không còn link tải public.",
      en: "This app has been discontinued and no longer has a public download link.",
    },
  },
};

function normalizeLinks(linkDownload: RawProject["linkDownload"]): ProjectLink[] {
  if (!linkDownload) {
    return [];
  }

  if (typeof linkDownload === "string") {
    return [{ label: "Public Link", link: linkDownload }];
  }

  return linkDownload;
}

function uniqueLinks(links: ProjectLink[]): ProjectLink[] {
  const seen = new Set<string>();
  const output: ProjectLink[] = [];

  for (const link of links) {
    if (!seen.has(link.link)) {
      seen.add(link.link);
      output.push(link);
    }
  }

  return output;
}

function toPrimaryLink(links: ProjectLink[]): ProjectLink[] {
  const uniques = uniqueLinks(links);
  return uniques.length > 0 ? [uniques[0]] : [];
}

function buildProjects(locale: AppLocale): PortfolioProject[] {
  return (sourceProjects as RawProject[])
    .map((project) => {
      const meta = projectMeta[project.id];

      if (!meta) {
        return {
          ...project,
          companyId: "ims" as CompanyId,
          period: "2022 - 2024",
          image: "/images/sky/sky.png",
          galleryImages: [],
          source: "Company/IMS",
          scope: locale === "vi" ? "Dự án mobile" : "Mobile project",
          links: toPrimaryLink(normalizeLinks(project.linkDownload)),
        } satisfies PortfolioProject;
      }

      return {
        ...project,
        companyId: meta.companyId,
        period: meta.period[locale],
        image: meta.image,
        galleryImages: meta.galleryImages ?? [],
        source: meta.source,
        scope: meta.scope[locale],
        note: meta.note?.[locale],
        links: toPrimaryLink([
          ...normalizeLinks(project.linkDownload),
          ...(meta.extraLinks ?? []),
        ]),
      } satisfies PortfolioProject;
    })
    .sort((a, b) => {
      const order: Record<CompanyId, number> = {
        eboost: 0,
        freelance: 1,
        ims: 2,
      };
      return order[a.companyId] - order[b.companyId];
    });
}

export function getProfile(locale: AppLocale): Profile {
  return {
    ...sharedProfile,
    ...profileContent[locale],
  };
}

export function getCompanyGroups(locale: AppLocale): CompanyGroup[] {
  return companyGroupContent.map((item) => ({
    id: item.id,
    name: item.name[locale],
    period: item.period[locale],
    role: item.role[locale],
    summary: item.summary[locale],
    highlights: item.highlights[locale],
  }));
}

export function getGroupedProjects(locale: AppLocale) {
  const companyGroups = getCompanyGroups(locale);
  const projects = buildProjects(locale);

  return companyGroups.map((company) => ({
    ...company,
    projects: projects.filter((project) => project.companyId === company.id),
  }));
}

export function getHeroStats(locale: AppLocale): HeroStat[] {
  const projects = buildProjects(locale);

  if (locale === "en") {
    return [
      { label: "Company Groups", value: "3" },
      { label: "Projects Shown", value: String(projects.length) },
      { label: "Core Domains", value: "EV, Mobility, Commerce, Admin" },
      { label: "Main Stack", value: "React Native + Next.js + TypeScript" },
    ];
  }

  return [
    { label: "Nhóm công ty", value: "3" },
    { label: "Dự án hiển thị", value: String(projects.length) },
    { label: "Domain chính", value: "EV, Mobility, Commerce, Admin" },
    { label: "Stack chính", value: "React Native + Next.js + TypeScript" },
  ];
}

const defaultLocale: AppLocale = "vi";

export const profile = getProfile(defaultLocale);
export const companyGroups = getCompanyGroups(defaultLocale);
export const groupedProjects = getGroupedProjects(defaultLocale);
export const heroStats = getHeroStats(defaultLocale);

export function getMissingInfoChecklist(locale: AppLocale): string[] {
  if (locale === "en") {
    return [
      "If you have certificates or technical publications, they can be added to the contact section.",
      "If you add more production screenshots, each project gallery can be expanded further.",
      "For stronger recruiter conversion, add 2-3 measurable KPIs for each company group.",
    ];
  }

  return [
    "Nếu có thêm hồ sơ chứng chỉ hoặc bài viết kỹ thuật nổi bật, mình sẽ gắn vào contact section.",
    "Nếu có thêm ảnh screenshot thực tế (màn hình app/web), mình sẽ thay logo hiện tại bằng gallery từng dự án.",
    "Nếu bạn muốn đẩy conversion tuyển dụng cao hơn, gửi thêm 2-3 KPI thực tế cho mỗi company group.",
  ];
}
