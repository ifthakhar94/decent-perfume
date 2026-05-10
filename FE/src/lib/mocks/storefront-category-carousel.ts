import { faker } from "@faker-js/faker";

import { CATEGORY_CAROUSEL_PEXELS_POOL } from "@/lib/mocks/perfume-placeholder-images";
import { storeRoutes } from "@/lib/routes/store";

export type StorefrontCategoryCard = {
  id: string;
  title: string;
  teaser: string;
  slug: string;
  href: string;
  imageUrl: string;
};

const CATEGORY_DEFINITIONS = [
  {
    slug: "womens",
    title: "Women's fragrances",
    teaser: "Floral, fresh & soft ambers",
  },
  {
    slug: "mens",
    title: "Men's fragrances",
    teaser: "Woody, aromatic & spicy",
  },
  {
    slug: "niche",
    title: "Niche & indie",
    teaser: "Small-batch artistic scents",
  },
  {
    slug: "designer",
    title: "Designer houses",
    teaser: "Iconic labels & classics",
  },
  {
    slug: "discovery",
    title: "Discovery sets",
    teaser: "Sample before full size",
  },
  {
    slug: "gifts",
    title: "Gift sets",
    teaser: "Wrapped & occasion-ready",
  },
  {
    slug: "home",
    title: "Home & candles",
    teaser: "Room-filling ambiance",
  },
  {
    slug: "new",
    title: "New arrivals",
    teaser: "Just landed this season",
  },
] as const;

const CATEGORY_CAROUSEL_SEED = 42_024_2028;

export function buildStorefrontCategoryCards(): StorefrontCategoryCard[] {
  faker.seed(CATEGORY_CAROUSEL_SEED);
  const images = faker.helpers.shuffle([...CATEGORY_CAROUSEL_PEXELS_POOL]);

  return CATEGORY_DEFINITIONS.map((def, i) => ({
    id: faker.string.uuid(),
    title: def.title,
    teaser: def.teaser,
    slug: def.slug,
    href: `${storeRoutes.shop}?category=${def.slug}`,
    imageUrl: images[i % images.length],
  }));
}

export const STOREFRONT_CATEGORY_CARDS = buildStorefrontCategoryCards();
