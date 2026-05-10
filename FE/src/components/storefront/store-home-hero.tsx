import Link from "next/link";
import { StoreHomeCarousel } from "@/components/storefront/store-home-carousel";
import { StoreHomeCategoryCarousel } from "@/components/storefront/store-home-category-carousel";
import { StoreHomeCustomerReviews } from "@/components/storefront/store-home-customer-reviews";
import { StoreHomeProducts } from "@/components/storefront/store-home-products";
import { storeRoutes } from "@/lib/routes/store";

/**
 * Storefront home: hero, categories, products, customer reviews, sign-in strip.
 */
export function StoreHomeHero() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <section aria-label="Featured stories" className="w-full">
        <StoreHomeCarousel />
      </section>
      <StoreHomeCategoryCarousel />
      <StoreHomeProducts />
      <StoreHomeCustomerReviews />
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
