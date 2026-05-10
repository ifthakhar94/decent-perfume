import Link from "next/link";
import { StoreHomeCarousel } from "@/components/storefront/store-home-carousel";
import { StoreHomeProducts } from "@/components/storefront/store-home-products";
import { storeRoutes } from "@/lib/routes/store";

/**
 * Storefront home: full-width hero carousel + optional footer strip.
 */
export function StoreHomeHero() {
  return (
    <div className="flex flex-1 flex-col">
      <section aria-label="Featured stories" className="w-full">
        <StoreHomeCarousel />
      </section>
      <StoreHomeProducts />
      <div className="text-perfume-ink-muted px-4 py-8 text-center text-sm font-medium">
        Already know what you need?{" "}
        <Link
          href={storeRoutes.login}
          className="text-perfume-wine decoration-perfume-wine/40 hover:decoration-perfume-wine font-semibold underline underline-offset-4"
        >
          Sign in
        </Link>{" "}
        to pick up where you left off.
      </div>
    </div>
  );
}
