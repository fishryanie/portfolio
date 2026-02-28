import sourceProjects from "./projects.json";

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
  period: string;
  image: string;
  galleryImages?: string[];
  source: string;
  scope: string;
  extraLinks?: ProjectLink[];
  note?: string;
};

export type CompanyGroup = {
  id: CompanyId;
  name: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: "Phan Hồng Quân",
  role: "Frontend Engineer (React Native / React / Next.js)",
  headline:
    "Xây dựng sản phẩm thực chiến cho mobile và web admin, tập trung vào độ ổn định phát hành, hiệu năng và khả năng mở rộng theo business growth.",
  location: "Gò Vấp, Hồ Chí Minh, Việt Nam",
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
};

export const companyGroups: CompanyGroup[] = [
  {
    id: "eboost",
    name: "Eboost (EVMobility)",
    period: "08/2024 - Hiện tại",
    role: "Frontend Engineer",
    summary:
      "Phát triển đồng thời mobile app cho EV charging và CMS quản trị nội bộ cho vận hành, marketing, partnerships và technical monitoring.",
    highlights: [
      "Làm chủ delivery cho 2 sản phẩm chính: app người dùng + hệ thống CMS/admin.",
      "Tích hợp realtime workflow (MQTT, notifications, charging status).",
      "Xây nền tảng quản trị dữ liệu lớn với Next.js + Ant Design + React Query.",
    ],
  },
  {
    id: "freelance",
    name: "Freelance Project",
    period: "10/2024 - 02/2025",
    role: "Frontend Developer (Freelance)",
    summary:
      "Triển khai dự án Kinis cho luồng landing growth, investor/partnership pipeline và nền tảng vận hành liên quan.",
    highlights: [
      "Thiết kế website growth pages có định hướng chuyển đổi.",
      "Xây contact + admin management flow cho lead investor/partner.",
      "Mở rộng sang hệ sinh thái gồm web, mobile, backend, dashboard theo nhu cầu dự án.",
    ],
  },
  {
    id: "ims",
    name: "IMS Solution",
    period: "03/2022 - 08/2024",
    role: "Mobile App Developer",
    summary:
      "Tham gia phát triển nhiều ứng dụng production trong các domain ride-hailing, delivery, e-commerce, membership, marketplace và food booking.",
    highlights: [
      "Phát triển và maintain nhiều ứng dụng mobile thuộc một product suite lớn.",
      "Thực hiện full app lifecycle: feature, bugfix, optimization, release OTA.",
      "Tích hợp sâu với Firebase, maps/location, payment, deeplink, push notifications.",
    ],
  },
];

const projectMeta: Record<string, ProjectMeta> = {
  "eboost-mobile-app": {
    companyId: "eboost",
    period: "2024 - Hiện tại",
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
    scope: "Consumer EV charging mobile app",
    extraLinks: [
      { label: "Eboost Website", link: "https://eboost.vn" },
    ],
  },
  "eboost-cms": {
    companyId: "eboost",
    period: "2024 - Hiện tại",
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
    scope: "Admin & operations CMS platform",
    extraLinks: [
      { label: "Eboost Website", link: "https://eboost.vn" },
    ],
  },
  kinis: {
    companyId: "freelance",
    period: "10/2024 - 02/2025",
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
    scope: "Landing + investor/partnership + admin + ecosystem expansion",
  },
  sky: {
    companyId: "ims",
    period: "2022 - 2024",
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
    scope: "All-in-one ride, delivery, food & commerce ecosystem",
    extraLinks: [
      { label: "Google Play", link: "https://play.google.com/store/apps/details?id=com.ims.sky" },
      { label: "App Store", link: "https://apps.apple.com/app/id6475276823" },
    ],
  },
  rpm: {
    companyId: "ims",
    period: "2022 - 2024",
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
    scope: "E-commerce app",
    extraLinks: [
      { label: "RPM Website", link: "https://rpmvietnam.com" },
      { label: "Google Play", link: "https://play.google.com/store/apps/details?id=com.ims.rpm" },
      { label: "App Store", link: "https://apps.apple.com/app/id6490306551" },
    ],
  },
  carta: {
    companyId: "ims",
    period: "2022 - 2024",
    image: "/images/carta/cartas.png",
    galleryImages: [
      "/images/carta/splash-screen.png",
      "/images/carta/List.jpg",
      "/images/carta/Goiychoban.jpg",
      "/images/carta/Thongbao.jpg",
      "/images/carta/CTKM.jpg",
    ],
    source: "Company/IMS/carta",
    scope: "Marketplace mobile app",
    extraLinks: [
      { label: "Google Play", link: "https://play.google.com/store/apps/details?id=com.ims.carta" },
      { label: "App Store", link: "https://apps.apple.com/app/id1661596013" },
      { label: "Dynamic Link", link: "https://cartashop.page.link" },
    ],
  },
  "e-member": {
    companyId: "ims",
    period: "2022 - 2024",
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
    scope: "Event check-in, e-ticket & attendee management",
    extraLinks: [
      { label: "Google Play", link: "https://play.google.com/store/apps/details?id=com.ims.emember" },
      {
        label: "App Store",
        link: "https://apps.apple.com/vn/app/dtm-online/id6444394684?l=vi",
      },
    ],
  },
  "hong-phuc": {
    companyId: "ims",
    period: "2022 - 2024",
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
    scope: "Housekeeping & care service booking app",
    note: "Ứng dụng đã ngừng hoạt động, hiện không còn link tải public.",
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

const projects = (sourceProjects as RawProject[])
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
        scope: "Mobile project",
        links: toPrimaryLink(normalizeLinks(project.linkDownload)),
      } satisfies PortfolioProject;
    }

    return {
      ...project,
      companyId: meta.companyId,
      period: meta.period,
      image: meta.image,
      galleryImages: meta.galleryImages ?? [],
      source: meta.source,
      scope: meta.scope,
      note: meta.note,
      links: toPrimaryLink([
        ...normalizeLinks(project.linkDownload),
        ...(meta.extraLinks ?? []),
      ]),
    } satisfies PortfolioProject;
  })
  .sort((a, b) => {
    const order: Record<CompanyId, number> = { eboost: 0, freelance: 1, ims: 2 };
    return order[a.companyId] - order[b.companyId];
  });

export const groupedProjects = companyGroups.map((company) => ({
  ...company,
  projects: projects.filter((project) => project.companyId === company.id),
}));

export const heroStats = [
  { label: "Company Groups", value: "3" },
  { label: "Projects Shown", value: String(projects.length) },
  { label: "Core Domains", value: "EV, Mobility, Commerce, Admin" },
  { label: "Main Stack", value: "React Native + Next.js + TypeScript" },
];

export const missingInfoChecklist = [
  "Nếu có thêm hồ sơ chứng chỉ hoặc bài viết kỹ thuật nổi bật, mình sẽ gắn vào contact section.",
  "Nếu có thêm ảnh screenshot thực tế (màn hình app/web), mình sẽ thay logo hiện tại bằng gallery từng dự án.",
  "Nếu bạn muốn đẩy conversion tuyển dụng cao hơn, gửi thêm 2-3 KPI thực tế cho mỗi company group.",
];
