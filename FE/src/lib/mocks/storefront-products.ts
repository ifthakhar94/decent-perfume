import { faker } from "@faker-js/faker";

import { PERFUME_PRODUCT_PEXELS_POOL } from "@/lib/mocks/perfume-placeholder-images";

export type StorefrontProduct = {
  id: string;
  name: string;
  concentration: string;
  accentNote: string;
  priceCents: number;
  imageUrl: string;
  slug: string;
};

const ACCORDS = [
  "Rose",
  "Oud",
  "Vétiver",
  "Iris",
  "Ambre",
  "Bergamote",
  "Cuir",
  "Jasmin",
  "Patchouli",
  "Safran",
] as const;

const CONCENTRATIONS = [
  "Eau de parfum",
  "Eau de toilette",
  "Parfum",
  "Extrait de parfum",
] as const;

const PRODUCT_SEED = 42_024_2027;

/**
 * Deterministic mock catalog for the storefront home grid. Replace with API data later.
 */
export function buildStorefrontProducts(count = 8): StorefrontProduct[] {
  faker.seed(PRODUCT_SEED);

  const imageAssignments = faker.helpers
    .shuffle([...PERFUME_PRODUCT_PEXELS_POOL])
    .slice(0, count);

  return Array.from({ length: count }, (_, i) => {
    const adjective = faker.commerce.productAdjective();
    const accord = faker.helpers.arrayElement(ACCORDS);
    const name = `${adjective} ${accord}`;
    const slug = faker.helpers.slugify(name).toLowerCase();
    const price = faker.number.int({ min: 5200, max: 28900 });

    return {
      id: faker.string.uuid(),
      name,
      concentration: faker.helpers.arrayElement(CONCENTRATIONS),
      accentNote: faker.helpers.arrayElement(ACCORDS),
      priceCents: price,
      imageUrl: imageAssignments[i],
      slug: slug || `item-${i}`,
    };
  });
}

export const STOREFRONT_FEATURED_PRODUCTS = buildStorefrontProducts(8);
