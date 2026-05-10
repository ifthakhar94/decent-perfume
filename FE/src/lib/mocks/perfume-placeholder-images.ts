/**
 * Perfume- and cosmetics-themed placeholders via [Pexels](https://www.pexels.com/)
 * CDN — different provider from Picsum; URLs are static photo IDs (bottles, beauty,
 * florals). `next/image` remote pattern: `images.pexels.com`.
 */
export function pexelsPlaceholderUrl(photoId: number, width: number): string {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/** Curated Pexels photo IDs (verified). Hero uses wide crops; grid uses narrower width. */
const PEXELS_HERO_IDS = [
  3785145, 965989, 7262897, 3784154, 1371524, 3990228, 6476589, 4041392,
] as const;

const PEXELS_PRODUCT_IDS = [
  3762873, 3781696, 2635394, 8463144, 6621466, 5240817, 3785160, 1763075,
] as const;

export const PERFUME_HERO_PEXELS_POOL = PEXELS_HERO_IDS.map((id) =>
  pexelsPlaceholderUrl(id, 1920),
);

export const PERFUME_PRODUCT_PEXELS_POOL = PEXELS_PRODUCT_IDS.map((id) =>
  pexelsPlaceholderUrl(id, 800),
);
