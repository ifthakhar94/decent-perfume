import Link from "next/link";
import { STORE_MAIN_NAV } from "@/config/store-navigation";
import { storeRoutes } from "@/lib/routes/store";
import { HeaderSocial } from "@/components/storefront/site-header/header-social";

const accountLinks = [
  { label: "Log in", href: storeRoutes.login },
  { label: "Register", href: storeRoutes.register },
  { label: "Account", href: storeRoutes.account },
  { label: "Orders", href: storeRoutes.orders },
  { label: "Wishlist", href: storeRoutes.wishlist },
] as const;

const footerLinkClass =
  "text-perfume-ink/90 hover:text-perfume-ink inline-flex rounded-lg px-1 py-0.5 text-sm font-medium transition-colors hover:bg-white/30 focus-visible:ring-rose-800/45 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white/50 focus-visible:outline-none";

const headingClass =
  "text-perfume-ink-muted text-xs font-bold tracking-[0.18em] uppercase";

/**
 * Global storefront footer — same width and glass language as `SiteHeader`.
 * Rendered from `StorefrontShell` so every `(store)` route shares it.
 */
export function StorefrontFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t border-white/40 bg-white/20 shadow-lg shadow-rose-950/6 backdrop-blur-xl"
      aria-labelledby="storefront-footer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2
              id="storefront-footer-heading"
              className="text-perfume-ink font-sans text-lg font-extrabold tracking-tight"
            >
              <Link
                href={storeRoutes.home}
                className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-rose-800/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white/50"
              >
                Decent Perfume
              </Link>
            </h2>
            <p className="text-perfume-ink mt-1 text-xs font-medium">
              Fine fragrance, frosted clarity
            </p>
            <p className="text-perfume-ink-muted mt-3 max-w-xs text-sm leading-relaxed">
              Curated bottles and honest notes—your boutique counter, online.
            </p>
            <div className="mt-6">
              <HeaderSocial />
            </div>
          </div>

          <nav aria-label="Shop">
            <h3 className={headingClass}>Shop</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {STORE_MAIN_NAV.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Account">
            <h3 className={headingClass}>Account</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {accountLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-2xl border border-white/55 bg-white/35 p-5 shadow-md ring-1 shadow-rose-950/8 ring-rose-950/8 backdrop-blur-md sm:col-span-2 lg:col-span-1">
            <h3 className={headingClass}>Cart</h3>
            <p className="text-perfume-ink-muted mt-3 text-sm leading-relaxed">
              Review your basket before checkout.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href={storeRoutes.cart} className={footerLinkClass}>
                  Shopping cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-perfume-ink-muted max-w-lg text-xs leading-relaxed">
            © {year} Decent Perfume. Mock storefront — add policies and legal
            links when ready.
          </p>
        </div>
      </div>
    </footer>
  );
}
