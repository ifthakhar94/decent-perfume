/**
 * Storefront primary navigation — single source of truth for header menus.
 * Add routes under `src/app/(store)/…` as pages go live.
 */
export type StoreNavItem = {
  /** Stable id for analytics / active-state keys */
  id: string;
  label: string;
  href: string;
};

export const STORE_MAIN_NAV: StoreNavItem[] = [
  { id: "shop", label: "Shop", href: "/shop" },
  { id: "new", label: "New arrivals", href: "/new" },
  { id: "brands", label: "Brands", href: "/brands" },
  { id: "gifts", label: "Gift sets", href: "/gifts" },
  { id: "journal", label: "Journal", href: "/journal" },
];
