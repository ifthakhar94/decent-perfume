import { faker } from "@faker-js/faker";

import { PERFUME_HERO_PEXELS_POOL } from "@/lib/mocks/perfume-placeholder-images";

export type HeroCarouselSlide = {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
};

/**
 * Builds hero carousel slides with Faker. Module-level export uses a fixed seed
 * so slides are stable between builds; change the seed to refresh mock content.
 * Replace image pool with CMS/asset URLs when the backend is ready.
 */
export function buildHeroCarouselSlides(count = 5): HeroCarouselSlide[] {
  faker.seed(42_024_2026);

  const imageAssignments = faker.helpers
    .shuffle([...PERFUME_HERO_PEXELS_POOL])
    .slice(0, count);

  return Array.from({ length: count }, (_, i) => ({
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    subtitle: faker.lorem.sentence({ min: 10, max: 18 }),
    ctaLabel: faker.helpers.arrayElement([
      "Shop the edit",
      "Explore notes",
      "Discover now",
      "View collection",
    ]),
    ctaHref: faker.helpers.arrayElement(["/shop", "/new", "/brands", "/gifts"]),
    imageUrl: imageAssignments[i],
  }));
}

export const HERO_CAROUSEL_SLIDES = buildHeroCarouselSlides(5);
