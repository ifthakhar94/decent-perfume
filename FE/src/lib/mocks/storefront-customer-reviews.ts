import { faker } from "@faker-js/faker";

export type StorefrontCustomerReview = {
  id: string;
  authorName: string;
  rating: number;
  title: string;
  body: string;
  reviewDate: string;
};

const REVIEW_SEED = 42_024_2029;

/**
 * Seeded mock reviews for the home “Customer reviews” block. Replace with API / UGC later.
 */
export function buildStorefrontCustomerReviews(
  count = 6,
): StorefrontCustomerReview[] {
  faker.seed(REVIEW_SEED);

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    authorName: faker.person.fullName(),
    rating: faker.helpers.arrayElement([5, 5, 5, 4, 4, 4, 3]),
    title: faker.lorem.sentence({ min: 4, max: 10 }).replace(/\.$/, ""),
    body: faker.lorem.sentences({ min: 2, max: 4 }),
    reviewDate: faker.date.recent({ days: 120 }).toISOString(),
  }));
}

export const STOREFRONT_CUSTOMER_REVIEWS = buildStorefrontCustomerReviews(6);
