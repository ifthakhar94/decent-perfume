import type { Metadata } from "next";
import { StoreHomeHero } from "@/components/storefront/store-home-hero";

const homeDescription =
  "Discover curated niche and designer fragrances. Shop perfume, explore categories and new arrivals, and find gifts at Decent Perfume.";

export const metadata: Metadata = {
  title: "Home",
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Decent Perfume — Curated fragrance",
    description: homeDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decent Perfume — Curated fragrance",
    description: homeDescription,
  },
};

export default function HomePage() {
  return <StoreHomeHero />;
}
