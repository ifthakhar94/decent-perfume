"use client";

import { Button, Spin, Tag } from "antd";
import Link from "next/link";
import {
  type ComingSoonSection,
  useGetComingSoonCopyQuery,
} from "@/lib/api/baseApi";
import { storeRoutes } from "@/lib/routes/store";

const sectionLabels: Record<ComingSoonSection, string> = {
  store: "Shop",
  dashboard: "Dashboard",
};

export type ComingSoonVariant = "embedded" | "standalone";

type ComingSoonPageProps = {
  section: ComingSoonSection;
  /** `embedded`: under storefront shell (shared header). `standalone`: full-page (e.g. dashboard). */
  variant?: ComingSoonVariant;
};

export function ComingSoonPage({
  section,
  variant = "standalone",
}: ComingSoonPageProps) {
  const { data, isFetching } = useGetComingSoonCopyQuery(section);

  const article = (
    <article className="rounded-3xl border border-white/55 bg-white/25 p-8 shadow-2xl ring-1 shadow-rose-950/12 ring-white/40 backdrop-blur-2xl sm:p-12">
      <p className="text-perfume-wine mb-3 inline-block rounded-full border border-white/50 bg-white/35 px-4 py-1 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
        {sectionLabels[section]}
      </p>

      {isFetching || !data ? (
        <div className="flex min-h-[180px] items-center justify-center py-8">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <h1 className="text-perfume-ink mt-4 font-sans text-3xl leading-tight font-extrabold tracking-tight drop-shadow-sm sm:text-4xl">
            {data.title}
          </h1>
          <p className="text-perfume-body/95 mt-6 max-w-2xl text-lg leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </>
      )}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="primary"
          size="large"
          className="bg-perfume-wine/95! hover:bg-perfume-wine-hover! h-12 border-0! font-bold! text-white! shadow-lg shadow-rose-950/25 backdrop-blur-sm"
          disabled
        >
          Get notified
        </Button>
        {section === "dashboard" ? (
          <Link href={storeRoutes.home} className="sm:ml-2">
            <Button
              size="large"
              className="text-perfume-ink! h-12 border border-white/60! bg-white/35! font-bold! shadow-lg shadow-rose-950/10 backdrop-blur-md hover:bg-white/45!"
            >
              Back to shop
            </Button>
          </Link>
        ) : null}
      </div>
    </article>
  );

  if (variant === "embedded") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:py-16">
        <div className="relative z-10 w-full max-w-3xl">
          {article}
          {section === "store" ? (
            <p className="text-perfume-ink-muted mt-8 text-center text-sm font-medium">
              Storefront navigation and search live in the header — catalog
              pages ship next.
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100/95 via-rose-100/85 to-amber-50/90 px-4 py-16">
      <div
        className="pointer-events-none absolute top-16 -left-24 h-80 w-80 rounded-full bg-rose-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-8 h-96 w-96 rounded-full bg-amber-400/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/15 blur-3xl"
        aria-hidden
      />

      <header className="relative z-10 mb-10 flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/20 px-5 py-4 shadow-xl shadow-rose-950/10 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <span className="text-perfume-wine inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-gradient-to-br from-amber-50/50 to-white/20 text-base font-extrabold shadow-lg shadow-rose-950/12 backdrop-blur-md">
            DP
          </span>
          <div>
            <p className="text-perfume-ink-muted text-xs font-semibold tracking-[0.2em] uppercase">
              Decent Perfume
            </p>
            <p className="text-perfume-ink text-sm font-medium">
              Fine fragrance, frosted clarity
            </p>
          </div>
        </div>
        <Tag className="text-perfume-wine m-0 rounded-full border border-white/55 bg-white/30 px-3 py-1 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
          Coming soon
        </Tag>
      </header>

      <main className="relative z-10 w-full max-w-3xl">
        {article}
        <p className="text-perfume-ink-muted mt-8 text-center text-sm font-medium">
          Glass surfaces use{" "}
          <span className="text-perfume-wine">backdrop-blur</span>,{" "}
          <span className="text-rose-700">blush highlights</span>, and a{" "}
          <span className="text-amber-800">cream · wine · gold</span> palette —
          tailored for luxury fragrance retail.
        </p>
      </main>
    </div>
  );
}
