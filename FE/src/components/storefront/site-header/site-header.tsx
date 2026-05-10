"use client";

import {
  Menu01Icon,
  SearchIcon,
  ShoppingCart01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import type { MenuProps } from "antd";
import { Badge, Button, Drawer, Dropdown, Input, Space } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { HugeIcon } from "@/components/ui/huge-icon";
import { STORE_MAIN_NAV } from "@/config/store-navigation";
import { storeRoutes } from "@/lib/routes/store";
import { HeaderSocial } from "./header-social";

function StoreLogo() {
  return (
    <Link
      href={storeRoutes.home}
      className="flex shrink-0 items-center gap-3 rounded-xl ring-rose-800/45 outline-none focus-visible:ring-2"
    >
      <span
        className="text-perfume-wine inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-gradient-to-br from-amber-50/50 to-white/20 text-sm font-extrabold shadow-md shadow-rose-950/12 backdrop-blur-md sm:h-11 sm:w-11"
        aria-hidden
      >
        DP
      </span>
      <span className="hidden flex-col sm:flex">
        <span className="text-perfume-ink-muted text-xs font-semibold tracking-[0.18em] uppercase">
          Decent Perfume
        </span>
        <span className="text-perfume-ink text-xs font-medium">
          Fine fragrance, frosted clarity
        </span>
      </span>
    </Link>
  );
}

function MainNavDesktop() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden items-center gap-1 lg:flex lg:flex-wrap"
      aria-label="Primary"
    >
      {STORE_MAIN_NAV.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== storeRoutes.home && pathname.startsWith(item.href));
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              active
                ? "text-perfume-ink bg-white/40 shadow-sm backdrop-blur-md"
                : "text-perfume-ink/90 hover:text-perfume-ink hover:bg-white/25"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function HeaderSearch({ idPrefix }: { idPrefix: string }) {
  const searchId = `${idPrefix}-search`;

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Wired to catalog search route or command palette in a later iteration.
  }, []);

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className="min-w-0 flex-1"
      aria-label="Site search"
    >
      <label htmlFor={searchId} className="sr-only">
        Search products
      </label>
      <Input
        id={searchId}
        type="search"
        placeholder="Search perfumes, notes, brands…"
        allowClear
        prefix={
          <span className="text-perfume-gold/75 flex items-center">
            <HugeIcon icon={SearchIcon} size={18} strokeWidth={1.7} />
          </span>
        }
        className="[&_input]:placeholder:text-perfume-ink-muted/55 border-white/55! bg-white/35! backdrop-blur-md"
      />
    </form>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const accountMenuItems = useMemo<MenuProps["items"]>(
    () => [
      {
        key: "account",
        label: <Link href={storeRoutes.account}>Your account</Link>,
      },
      {
        key: "orders",
        label: <Link href={storeRoutes.orders}>Orders</Link>,
      },
      {
        key: "wishlists",
        label: <Link href={storeRoutes.wishlist}>Wishlist</Link>,
      },
      { type: "divider" },
      {
        key: "sign-out",
        label: "Sign out",
        disabled: true,
      },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/20 shadow-lg shadow-rose-950/6 backdrop-blur-xl">
      <a
        href="#main-content"
        className="focus:bg-perfume-wine sr-only focus:absolute focus:top-2 focus:left-4 focus:z-[100] focus:inline-block focus:h-auto focus:w-auto focus:rounded-lg focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Row 1: brand, search, cart, account, social */}
      <div className="border-b border-white/25">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2.5 sm:gap-4">
          <StoreLogo />

          <div className="mx-2 hidden max-w-xl min-w-0 flex-1 md:block lg:max-w-2xl">
            <HeaderSearch idPrefix="desktop" />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <Badge count={0} showZero={false} offset={[-2, 2]}>
              <Link href={storeRoutes.cart} aria-label="Shopping cart">
                <Button
                  type="text"
                  className="text-perfume-ink! flex items-center justify-center"
                  icon={
                    <HugeIcon
                      icon={ShoppingCart01Icon}
                      size={22}
                      strokeWidth={1.7}
                    />
                  }
                />
              </Link>
            </Badge>

            <Dropdown
              menu={{ items: accountMenuItems }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button
                type="text"
                className="text-perfume-ink! flex items-center justify-center"
                icon={
                  <HugeIcon icon={UserCircleIcon} size={22} strokeWidth={1.7} />
                }
                aria-label="Account menu"
              />
            </Dropdown>

            <HeaderSocial />
          </div>
        </div>

        <div className="px-4 pb-2.5 md:hidden">
          <HeaderSearch idPrefix="mobile" />
        </div>
      </div>

      {/* Row 2: primary nav + auth */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Button
            type="text"
            className="text-perfume-ink flex shrink-0 items-center justify-center lg:!hidden"
            icon={<HugeIcon icon={Menu01Icon} size={22} strokeWidth={1.7} />}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          />
          <MainNavDesktop />
        </div>

        <Space className="shrink-0" size="small" wrap>
          <Link href={storeRoutes.login}>
            <Button
              type="text"
              size="small"
              className="text-perfume-ink! px-2! font-semibold sm:px-3!"
            >
              Log in
            </Button>
          </Link>
          <Link href={storeRoutes.register}>
            <Button
              type="primary"
              size="small"
              className="bg-perfume-wine/95! hover:bg-perfume-wine-hover! border-white/45! font-semibold shadow-md shadow-rose-950/25 sm:text-sm!"
            >
              Register
            </Button>
          </Link>
        </Space>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        classNames={{
          body: "!p-0",
        }}
      >
        <nav className="flex flex-col px-2 py-2" aria-label="Primary mobile">
          {STORE_MAIN_NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-perfume-ink rounded-lg px-4 py-3 text-base font-semibold hover:bg-rose-100/55"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-rose-200/55 pt-4">
            <Link
              href={storeRoutes.login}
              className="text-perfume-ink block rounded-lg px-4 py-3 font-semibold hover:bg-rose-100/55"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href={storeRoutes.register}
              className="text-perfume-ink block rounded-lg px-4 py-3 font-semibold hover:bg-rose-100/55"
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Link>
          </div>
        </nav>
      </Drawer>
    </header>
  );
}
