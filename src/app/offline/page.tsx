import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offline | Phan Hong Quan Portfolio",
  description: "Offline fallback page for portfolio PWA mode.",
};

export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-screen w-[min(760px,92vw)] flex-col items-center justify-center py-16 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Offline Mode</p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-[var(--ink)]">
        Bạn đang offline
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
        Ứng dụng vẫn khả dụng với dữ liệu đã cache. Khi có mạng lại, trang sẽ tự cập nhật nội dung mới.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white"
      >
        Quay lại trang chính
      </Link>
    </main>
  );
}
