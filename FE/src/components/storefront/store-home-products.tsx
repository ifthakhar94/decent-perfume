import Image from "next/image";
import Link from "next/link";
import { STOREFRONT_FEATURED_PRODUCTS } from "@/lib/mocks/storefront-products";
import { storeRoutes } from "@/lib/routes/store";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/**
 * Featured product grid below the hero — mock data from `storefront-products` until catalog API exists.
 */
export function StoreHomeProducts() {
  return (
    <section
      aria-labelledby="store-home-products-heading"
      className="w-full min-w-0 px-3 py-12 sm:px-6 md:py-16 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="store-home-products-heading"
            className="text-perfume-ink font-sans text-2xl font-extrabold tracking-tight md:text-3xl"
          >
            Featured fragrances
          </h2>
          <p className="text-perfume-ink-muted mt-2 max-w-2xl text-sm font-medium text-pretty md:mx-auto md:text-base">
            A rotating edit of bottles and blends—mock listings for layout; swap
            in your catalog when ready.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {STOREFRONT_FEATURED_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Link
                href={`${storeRoutes.shop}/${product.slug}`}
                className="group focus-visible:ring-perfume-wine/50 block overflow-hidden rounded-3xl border border-white/55 bg-white/22 shadow-rose-950/12 backdrop-blur-xl transition duration-300 outline-none hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/30 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                <article className="flex h-full flex-col">
                  <div className="bg-perfume-blush/80 relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={`${product.name}, ${product.concentration}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 px-4 py-4 sm:px-5 sm:py-5">
                    <h3 className="text-perfume-ink group-hover:text-perfume-wine line-clamp-2 text-base leading-snug font-bold tracking-tight transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-perfume-ink-muted text-xs font-medium">
                      {product.concentration}
                      <span aria-hidden> · </span>
                      <span className="text-perfume-gold">
                        {product.accentNote}
                      </span>
                    </p>
                    <p className="text-perfume-wine mt-auto pt-2 text-lg font-bold tabular-nums">
                      {money.format(product.priceCents / 100)}
                    </p>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href={storeRoutes.shop}
            className="text-perfume-wine hover:bg-perfume-wine focus-visible:ring-perfume-wine/55 border-perfume-wine/35 hover:border-perfume-wine inline-flex min-h-11 items-center justify-center rounded-2xl border bg-white/25 px-10 py-3 text-sm font-bold shadow-lg shadow-rose-950/10 backdrop-blur-md transition duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] focus-visible:outline-none"
          >
            Show more
          </Link>
        </div>
      </div>
    </section>
  );
}
