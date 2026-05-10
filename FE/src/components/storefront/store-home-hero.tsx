import { StoreHomeCarousel } from "@/components/storefront/store-home-carousel";
import { StoreHomeCategoryCarousel } from "@/components/storefront/store-home-category-carousel";
import { StoreHomeCustomerReviews } from "@/components/storefront/store-home-customer-reviews";
import { StoreHomeProducts } from "@/components/storefront/store-home-products";

/**
 * Storefront home: hero, categories, products, reviews. Footer lives in `StorefrontShell`.
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
    </div>
  );
}
