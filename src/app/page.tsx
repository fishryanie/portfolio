import type { Metadata } from "next";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  Download,
  Layers2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ProjectImageGallery } from "@/components/ui/project-image-gallery";
import { ProjectLinkQrGrid } from "@/components/ui/project-link-qr-grid";
import { Reveal } from "@/components/ui/reveal";
import {
  groupedProjects,
  heroStats,
  profile,
  type PortfolioProject,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Phan Hồng Quân | Portfolio Projects by Company",
  description:
    "Portfolio hiển thị chi tiết dự án theo công ty: Eboost, Freelance Kinis và IMS (React Native / Next.js).",
};

const navItems = [
  { label: "Tổng quan", href: "#overview" },
  { label: "Eboost", href: "#company-eboost" },
  { label: "Freelance", href: "#company-freelance" },
  { label: "IMS", href: "#company-ims" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Home() {
  const primaryContact =
    profile.contacts.find((item) => item.label === "Email")?.href ??
    "mailto:qphanquan1998@gmail.com";

  return (
    <main className="relative overflow-x-clip pb-24">
      <BackgroundDecor />

      <FloatingNav
        name={profile.name}
        items={navItems}
        ctaHref={primaryContact}
        ctaLabel="Liên hệ nhanh"
      />

      <section
        id="top"
        className="mx-auto w-[min(1180px,95vw)] pt-12"
        aria-label="Hero"
      >
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--card)] px-4 py-2 text-xs font-semibold text-[var(--muted)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent-2)]" />
            Portfolio chi tiết theo công ty và từng dự án
          </p>
        </Reveal>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <Reveal delay={0.08}>
            <h1 className="font-display text-[clamp(2.05rem,10vw,3.75rem)] leading-[1.1] text-[var(--ink)]">
              {profile.role}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {profile.headline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.cvDownloadHref}
                download={profile.cvFileName}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Tải CV (Executive PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="grid gap-3 rounded-3xl border border-[var(--border-soft)] bg-[var(--card)] p-6 shadow-xl shadow-[color:var(--shadow)]">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Thông tin liên hệ
              </p>
              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <MapPin className="h-4 w-4 text-[var(--accent-2)]" />
                {profile.location}
              </div>
              <div className="grid gap-2">
                {profile.contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-white/55 px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--ink)]"
                  >
                    <span>{item.label}</span>
                    <span className="truncate pl-3 text-right">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="overview" className="mx-auto mt-12 w-[min(1180px,95vw)]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-[var(--border-soft)] bg-[var(--card)] p-5 shadow-lg shadow-[color:var(--shadow)]">
                <p className="text-xs uppercase tracking-[0.17em] text-[var(--muted)]">
                  {metric.label}
                </p>
                <p className="mt-2 font-display text-2xl text-[var(--ink)]">
                  {metric.value}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-[min(1180px,95vw)]">
        <Reveal>
          <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card)] p-6 shadow-xl shadow-[color:var(--shadow)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Work Timeline
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {groupedProjects.map((company) => (
                <article
                  key={company.id}
                  className="rounded-2xl border border-[var(--border-soft)] bg-white/65 p-4"
                >
                  <p className="text-xs text-[var(--muted)]">
                    {company.period}
                  </p>
                  <h2 className="mt-1 font-display text-xl text-[var(--ink)]">
                    {company.name}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {company.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto mt-16 grid w-[min(1180px,95vw)] gap-16">
        {groupedProjects.map((company, companyIndex) => (
          <section key={company.id} id={`company-${company.id}`}>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Company Group
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-[var(--ink)] sm:text-4xl">
                    {company.name}
                  </h2>
                  <p className="mt-2 flex items-center gap-2 text-sm text-[var(--muted)]">
                    <CalendarDays className="h-4 w-4 text-[var(--accent)]" />
                    {company.period} · {company.role}
                  </p>
                </div>
                <div className="max-w-xl rounded-2xl border border-[var(--border-soft)] bg-[var(--card)] px-4 py-3 text-sm leading-7 text-[var(--muted)]">
                  {company.summary}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05 + companyIndex * 0.03}>
              <ul className="mt-4 space-y-2 rounded-2xl border border-[var(--border-soft)] bg-[var(--card)] p-5 text-sm leading-7 text-[var(--muted)]">
                {company.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-6 grid gap-6">
              {company.projects.map((project, projectIndex) => (
                <Reveal key={project.id} delay={projectIndex * 0.06}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--card)] shadow-xl shadow-[color:var(--shadow)]">
      <div className="grid gap-0 lg:grid-cols-[340px_1fr]">
        <ProjectImageGallery
          title={project.title}
          coverImage={project.image}
          galleryImages={project.galleryImages}
        />

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl text-[var(--ink)]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{project.type}</p>
            </div>
            <span className="rounded-full border border-[var(--border-soft)] bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              {project.period}
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <MetaItem
              icon={<Building2 className="h-4 w-4" />}
              label="Customer"
              value={project.customer}
            />
            <MetaItem
              icon={<Layers2 className="h-4 w-4" />}
              label="Platform"
              value={project.platform.join(", ")}
            />
            <MetaItem
              icon={<CalendarDays className="h-4 w-4" />}
              label="Team Size"
              value={`${project.member}`}
            />
            <MetaItem
              icon={<Sparkles className="h-4 w-4" />}
              label="Scope"
              value={project.scope}
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <span
                key={`${project.id}-${tech}`}
                className="rounded-full border border-[var(--border-soft)] bg-white/70 px-3 py-1 text-xs font-medium text-[var(--ink)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                Feature Groups
              </p>
              <div className="mt-3 space-y-3">
                {(project.features ?? []).map((feature) => (
                  <div
                    key={`${project.id}-${feature.featureGroup}`}
                    className="rounded-2xl border border-[var(--border-soft)] bg-white/60 p-3"
                  >
                    <h4 className="text-sm font-semibold text-[var(--ink)]">
                      {feature.featureGroup}
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-sm leading-6 text-[var(--muted)]">
                      {feature.featureList.map((item) => (
                        <li
                          key={`${project.id}-${feature.featureGroup}-${item.title}`}
                        >
                          <span className="font-semibold text-[var(--ink)]">
                            {item.title}:
                          </span>{" "}
                          {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                Responsibilities
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                {project.responsibility.map((item) => (
                  <li key={`${project.id}-${item}`} className="flex gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--border-soft)] bg-white/55 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
              Links & Access
            </p>
            <ProjectLinkQrGrid links={project.links} />

            {project.note ? (
              <p className="mt-1 text-xs text-[var(--muted)]">{project.note}</p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border-soft)] bg-white/60 px-3 py-3">
      <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
        {icon}
        {label}
      </p>
      <p className="mt-1 text-sm text-[var(--ink)]">{value}</p>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
    </div>
  );
}
