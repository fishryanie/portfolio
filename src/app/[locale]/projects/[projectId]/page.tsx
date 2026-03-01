import type { Metadata } from "next";
import { Building2, CalendarDays, CheckCircle2, ChevronLeft, Layers2, Sparkles } from "lucide-react";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProjectImageGallery } from "@/components/ui/project-image-gallery";
import { ProjectLinkQrGrid } from "@/components/ui/project-link-qr-grid";
import { getProjectById, getProjectIds } from "@/data/portfolio";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

type ProjectDetailPageProps = {
  params: Promise<{
    locale: string;
    projectId: string;
  }>;
};

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjectIds(locale).map((projectId) => ({
      locale,
      projectId,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, projectId } = await params;
  const safeLocale = hasLocale(routing.locales, locale)
    ? (locale as AppLocale)
    : routing.defaultLocale;
  const project = getProjectById(safeLocale, projectId);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | ${project.type}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale: localeParam, projectId } = await params;

  if (!hasLocale(routing.locales, localeParam)) {
    notFound();
  }

  const locale = localeParam as AppLocale;
  setRequestLocale(locale);

  const project = getProjectById(locale, projectId);

  if (!project) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "ProjectDetail" });
  const backHref = `/#company-${project.companyId}`;

  return (
    <main className="mx-auto w-[min(1180px,95vw)] pb-20 pt-7 sm:pt-10">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] bg-white/70 px-3 py-1.5 text-sm text-[var(--ink)]"
      >
        <ChevronLeft className="h-4 w-4" />
        {t("backToPortfolio")}
      </Link>

      <section className="mt-5 overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--card)] shadow-xl shadow-[color:var(--shadow)]">
        <div className="grid gap-0 lg:grid-cols-[340px_1fr]">
          <ProjectImageGallery
            title={project.title}
            coverImage={project.image}
            galleryImages={project.galleryImages}
          />

          <div className="p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="font-display text-2xl text-[var(--ink)]">
                  {project.title}
                </h1>
                <p className="mt-1 text-sm text-[var(--muted)]">{project.type}</p>
              </div>
              <span className="rounded-full border border-[var(--border-soft)] bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
                {project.period}
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <MetaItem
                icon={<Building2 className="h-4 w-4" />}
                label={t("metaCustomer")}
                value={project.customer}
              />
              <MetaItem
                icon={<Layers2 className="h-4 w-4" />}
                label={t("metaPlatform")}
                value={project.platform.join(", ")}
              />
              <MetaItem
                icon={<CalendarDays className="h-4 w-4" />}
                label={t("metaTeamSize")}
                value={`${project.member}`}
              />
              <MetaItem
                icon={<Sparkles className="h-4 w-4" />}
                label={t("metaScope")}
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
                  {t("featureGroups")}
                </p>
                <div className="mt-3 space-y-3">
                  {(project.features ?? []).map((feature) => (
                    <div
                      key={`${project.id}-${feature.featureGroup}`}
                      className="rounded-2xl border border-[var(--border-soft)] bg-white/60 p-3"
                    >
                      <h2 className="text-sm font-semibold text-[var(--ink)]">
                        {feature.featureGroup}
                      </h2>
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
                  {!project.features?.length ? (
                    <p className="text-sm text-[var(--muted)]">{t("noFeatureData")}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                  {t("responsibilities")}
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
                {t("linksAccess")}
              </p>
              <ProjectLinkQrGrid links={project.links} />
              {project.note ? (
                <p className="mt-1 text-xs text-[var(--muted)]">{project.note}</p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
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
