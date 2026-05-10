import { faker } from "@faker-js/faker";

export type HeroCarouselSlide = {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
};

/**
 * Curated Unsplash URLs (perfume, bottles, florals). Faker has no category-specific
 * photo API since LoremFlickr was deprecated; we combine a fixed pool with
 * `faker.helpers.shuffle` so order stays deterministic for a given seed.
 */
const PERFUME_HERO_IMAGE_POOL = [
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1615634260168-28791d6f106e?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1587017539500-33b358d20e12?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7b539?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=85",
] as const;

/**
 * Builds hero carousel slides with Faker. Module-level export uses a fixed seed
 * so slides are stable between builds; change the seed to refresh mock content.
 * Replace image pool with CMS/asset URLs when the backend is ready.
 */
export function buildHeroCarouselSlides(count = 5): HeroCarouselSlide[] {
  faker.seed(42_024_2026);

  const imageAssignments = faker.helpers
    .shuffle([...PERFUME_HERO_IMAGE_POOL])
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
